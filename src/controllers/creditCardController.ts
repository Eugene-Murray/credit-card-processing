import {
  controller, httpGet, httpPost, httpPut
} from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { CreditCardService } from '../services/creditCardService';
import { Request, Response } from 'express';
import TYPES from '../constants/types';
import { CreditCard } from './../models/creditCard';

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
      this.creditCardService.addAsync(new CreditCard(request.body.name, request.body.cardNumber, request.body.limit, request.body.limit));
      response.status(200).send("Credit Card Successfully Created");
    } catch(err) {
      console.error(err);
      response.status(500).send(err.message);
    }
    
  }

  @httpPut('/change/:name')
  public change(request: Request): CreditCard {
    console.warn(request.body);
    return request.params.name;

    //this.creditCardService.changeAsync();
  }

  @httpPut('/credit/:name')
  public credit(request: Request): CreditCard {
    console.warn(request.body);
    return request.params.name;

    //this.creditCardService.creditAsync();
  }
}