import {
    controller, httpGet, httpPost, httpPut, httpDelete
  } from 'inversify-express-utils';
  import { inject } from 'inversify';
  import { CreditCardService } from '../services/creditCardServices';
  import { ValidationService } from '../services/validationServices';
  import { Repository } from '../data/repository';
  import { Request } from 'express';
  import TYPES from '../constants/types';
  
  @controller('/user')
  export class UserController {
  
    constructor(@inject(TYPES.CreditCardService) private creditCardService: CreditCardService,
        @inject(TYPES.ValidationService) private validationService: ValidationService,
        @inject(TYPES.Repository) private repository: Repository) { }
  
    @httpGet('/')
    public getUsers(): IUser[] {
      return this.userService.getUsers();
    }
  
    @httpGet('/:id')
    public getUser(request: Request): IUser {
      return this.userService.getUser(request.params.id);
    }
  
    @httpPost('/')
    public newUser(request: Request): IUser {
      return this.userService.newUser(request.body);
    }
  
    @httpPut('/:id')
    public updateUser(request: Request): IUser {
      return this.userService.updateUser(request.params.id, request.body);
    }
  
    @httpDelete('/:id')
    public deleteUser(request: Request): string {
      return this.userService.deleteUser(request.params.id);
    }
  }