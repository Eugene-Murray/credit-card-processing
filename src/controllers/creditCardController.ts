import {
    controller, httpGet
  } from 'inversify-express-utils';
  import { injectable, inject } from 'inversify';
import { CreditCardService } from '../services/creditCardService';
import { ValidationService } from '../services/validationService';
import { Repository } from '../data/repository';
import { Request } from 'express';
import TYPES from '../constants/types';

@injectable()
  @controller('/api/creditcard')
  export class CreditCardController {
  
  constructor(@inject(TYPES.CreditCardService) private creditCardService: CreditCardService,
        @inject(TYPES.ValidationService) private validationService: ValidationService,
        @inject(TYPES.Repository) private repository: Repository) { }
  
    @httpGet('/')
    public getUsers(): string[] {
      
      var myarray = [];
      myarray.push("string 1");
      myarray.push("string 2");
      
      return myarray;
    }
  
    @httpGet('/:id')
    public getUser(request: Request): string {
      console.warn(this.creditCardService.get());
      console.warn(this.validationService.get());
      console.warn(this.repository.get());
      return request.params.id;
    }
  
    // @httpPost('/')
    // public newUser(request: Request): IUser {
    //   return this.userService.newUser(request.body);
    // }
  
    // @httpPut('/:id')
    // public updateUser(request: Request): IUser {
    //   return this.userService.updateUser(request.params.id, request.body);
    // }
  
    // @httpDelete('/:id')
    // public deleteUser(request: Request): string {
    //   return this.userService.deleteUser(request.params.id);
    // }
  }