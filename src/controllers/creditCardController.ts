import {
  controller, httpGet, httpPost, httpPut
} from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { CreditCardService } from '../services/creditCardService';
import { ValidationService } from '../services/validationService';
import { Repository } from '../data/repository';
import { Request } from 'express';
import TYPES from '../constants/types';
import { CreditCard } from './../models/creditCard';

@injectable()
@controller('/api/creditcard')
export class CreditCardController {

  constructor(@inject(TYPES.CreditCardService) private creditCardService: CreditCardService,
    @inject(TYPES.ValidationService) private validationService: ValidationService,
    @inject(TYPES.Repository) private repository: Repository) { }


  @httpGet('/:id')
  public getUser(request: Request): string {
    console.warn(this.creditCardService.get());
    console.warn(this.validationService.get());
    console.warn(this.repository.get());
    return request.params.id;
  }

  @httpGet('/')
  public async getAll(): Promise<Array<CreditCard>> {
    return await this.creditCardService.getAll();
  }

  @httpPost('/')
  public add(request: Request): void {
    this.creditCardService.add(new CreditCard(request.body.name, request.body.cardNumber, request.body.limit));
  }

  @httpPut('/change/:name')
  public change(request: Request): CreditCard {
    console.warn(request.body);
    return request.params.name;
  }

  @httpPut('/credit/:name')
  public credit(request: Request): CreditCard {
    console.warn(request.body);
    return request.params.name;
  }
}