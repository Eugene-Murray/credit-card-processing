import { injectable, inject } from 'inversify';
import { CreditCard } from './../models/creditCard';
import { ValidationService } from '../services/validationService';
import { Repository } from '../data/repository';
import TYPES from '../constants/types';

@injectable()
export class CreditCardService {

    constructor(@inject(TYPES.ValidationService) private validationService: ValidationService,
        @inject(TYPES.Repository) private repository: Repository) { }
    
    public async getAllAsync(): Promise<Array<CreditCard>> {
        return await this.repository.getAll();
    }

    public addAsync(creditCard: CreditCard): void {
        if(this.validationService.validCreditCard(creditCard))
        {
            this.repository.add(creditCard);
        }
        else
        {
            throw Error("Card is not valid");
        }
    }

    public changeAsync(): void {

    }

    public creditAsync(): void {
        
    }
}