import {
  controller, httpGet, httpPost, httpPut
} from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { CreditCardService } from '../services/creditCardService';
import { Request, Response } from 'express';
import TYPES from '../constants/types';
import { CreditCard } from './../models/creditCard';
import { Balance } from '../models/balance';

@injectable()
@controller('/api/creditcard')
export class CreditCardController {

  constructor(@inject(TYPES.CreditCardService) private creditCardService: CreditCardService) { }

  @httpGet('/')
  public async getAll(): Promise<Array<CreditCard>> {
    return await this.creditCardService.getAllAsync();
  }

  @httpPost('/')
  public add(request: Request, response: Response) {
    try {
      this.creditCardService.add(new CreditCard(request.body.name, request.body.cardNumber, request.body.limit, 0));
      response.status(200).send("Credit Card Successfully Created");
    } catch(err) {
      console.error(err);
      response.status(500).send(err.message);
    }
    
  }

  @httpPut('/charge/:name')
  public async charge(request: Request): Promise<Balance> {
    return await this.creditCardService.chargeAsync(request.params.name, request.body.amount);
  }

  @httpPut('/credit/:name')
  public async credit(request: Request): Promise<Balance> {
    console.warn(request.body);
    return await this.creditCardService.creditAsync(request.params.name, request.body.amount);
  }
}