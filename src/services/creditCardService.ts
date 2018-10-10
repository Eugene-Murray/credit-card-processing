import { injectable, inject } from 'inversify';
import { CreditCard } from './../models/creditCard';
import { Balance } from './../models/balance';
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

    public add(creditCard: CreditCard): void {
        if(this.validationService.validCreditCard(creditCard.cardNumber))
        {
            this.repository.add(creditCard);
        }
        else
        {
            throw Error("Card is not valid");
        }
    }

    public chargeAsync(name: string, amount: string): Promise<Balance> {
        return new Promise<Balance>((resolve, reject) => {
            this.repository.getByName(name).then((creditCard) => {
                if(!creditCard) 
                    reject("credit card not found");

                amount = amount.replace("£", "");  
                let amountNumber = parseFloat(amount);  
                let newBalance = creditCard.balance - amountNumber;
                if(newBalance < creditCard.limit) 
                    reject("new balance would be greater than limit - reject");

                    creditCard.balance = newBalance;
                    this.repository.updateBalance(creditCard); 
                    
                    let remainingBalance = this.calcRemainingBalance(creditCard);

                resolve(new Balance(creditCard.cardNumber, remainingBalance));
            });
        });
    }

    public creditAsync(name: string, amount: string): Promise<Balance> {
        return new Promise<Balance>((resolve, reject) => {
            this.repository.getByName(name).then((creditCard) => {
                if(!creditCard) 
                    reject("credit card not found");

                amount = amount.replace("£", "");  
                let amountNumber = parseFloat(amount);  
                creditCard.balance += amountNumber;
                this.repository.updateBalance(creditCard);

                let remainingBalance = this.calcRemainingBalance(creditCard);

                resolve(new Balance(creditCard.cardNumber, remainingBalance));
            });
        });
    }

    private calcRemainingBalance(creditCard: CreditCard) : number {
        return Math.abs(creditCard.limit - creditCard.balance);
    }
}