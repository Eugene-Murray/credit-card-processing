
import { injectable } from 'inversify';
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

    public getAll(): Promise<Array<CreditCard>> {
        return new Promise<Array<CreditCard>>((resolve, reject) => {
            resolve(this.CreditCardDB);
        });
    }

    public get(): string {
        return "xx";
    }
}