
import { injectable} from 'inversify';
import { CreditCard } from './../models/creditCard';



@injectable()
export class Repository {

    private CreditCardDB: Array<CreditCard>;

    constructor() {
        this.CreditCardDB = [];
    }

    public add(creditCard: CreditCard): void {
      this.CreditCardDB.push(creditCard);
    }

    public getAll(): Array<CreditCard> {
        return this.CreditCardDB;
    }

    public get(): string {
        return "xx";
    }
}