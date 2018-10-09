import { injectable, inject } from 'inversify';
import { CreditCard } from './../models/creditCard';
import { ValidationService } from '../services/validationService';
import { Repository } from '../data/repository';
import TYPES from '../constants/types';

@injectable()
export class CreditCardService {

    constructor(@inject(TYPES.ValidationService) private validationService: ValidationService,
        @inject(TYPES.Repository) private repository: Repository) { }
    
    public get(): string {
        return "xx";
    }

    public getAll(): Array<CreditCard> {
        return this.repository.getAll();
    }

    public add(creditCard: CreditCard): void {
        console.warn(this.validationService.get());
        this.repository.add(creditCard);
    }

//   public getUsers(): IUser[] {
//     return this.userStorage;
//   }

//   public getUser(id: string): IUser {
//     let result: IUser;
//     this.userStorage.map(user => {
//       if (user.name === id) {
//         result = user;
//       }
//     });

//     return result;
//   }

//   public newUser(user: IUser): IUser {
//     this.userStorage.push(user);
//     return user;
//   }

//   public updateUser(id: string, user: IUser): IUser {
//     this.userStorage.map((entry, index) => {
//       if (entry.name === id) {
//         this.userStorage[index] = user;
//       }
//     });

//     return user;
//   }

//   public deleteUser(id: string): string {
//     let updatedUser: IUser[] = [];
//     this.userStorage.map(user => {
//       if (user.name !== id) {
//         updatedUser.push(user);
//       }
//     });

//     this.userStorage = updatedUser;
//     return id;
//   }
}