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

    public getByName(name: string): Promise<CreditCard> {
        return new Promise<CreditCard>((resolve, reject) => {
            resolve(this.CreditCardDB.find((creditCard: CreditCard) => {
                return creditCard.name === name;
            }));
        });
    }

    public getAll(): Promise<Array<CreditCard>> {
        return new Promise<Array<CreditCard>>((resolve, reject) => {
            resolve(this.CreditCardDB);
        });
    }

    public update(creditCard: CreditCard): void {
        let index = this.CreditCardDB.findIndex((creditCard) => {
            return creditCard.name === creditCard.name;
        });
        this.CreditCardDB[index].balance = creditCard.balance;
    }

    private prePopulate(): void {
        this.CreditCardDB.push(new CreditCard("Eugene Murray 1", "123", -2000, 0));
        this.CreditCardDB.push(new CreditCard("Eugene Murray 2", "321", -4000, 0));
    }
}