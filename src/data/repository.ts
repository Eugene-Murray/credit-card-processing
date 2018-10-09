
import { injectable } from 'inversify';
import { CreditCard } from './../models/creditCard';



@injectable()
export class Repository {

    private CreditCardDB: Array<CreditCard>;

    constructor() {
        this.CreditCardDB = [];
        this.prePopulate();
    }

    public add(creditCard: CreditCard): void {
        this.CreditCardDB.push(creditCard);
    }

    public getAll(): Promise<Array<CreditCard>> {
        return new Promise<Array<CreditCard>>((resolve, reject) => {
            resolve(this.CreditCardDB);
        });
    }

    private prePopulate(): void {
        this.CreditCardDB.push(new CreditCard("Eugene Murray 1", "123", 2000));
        this.CreditCardDB.push(new CreditCard("Eugene Murray 2", "321", 4000));
    }
}