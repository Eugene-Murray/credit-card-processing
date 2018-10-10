import { expect } from 'chai';
import { Repository } from './../../data/repository';
import { CreditCard } from './../../models/creditCard';

describe('Repository', () => {
  let repository;

  beforeEach(() => {
    repository = new Repository();
  });

  it('should get back all pre-populated credit cards success', () => {
    repository.getAll().then((data: Array<CreditCard>) => {
      expect(data[0].name).to.equal('Eugene Murray 1');
      expect(data[0].cardNumber).to.equal('123');
      expect(data[0].limit).to.equal(-2000);
      expect(data[0].balance).to.equal(0);
      expect(data[1].name).to.equal('Eugene Murray 2');
      expect(data[1].cardNumber).to.equal('321');
      expect(data[1].limit).to.equal(-4000);
      expect(data[1].balance).to.equal(0);
    }).catch((err) => {
      console.error(err);
    });
  });

  it('should find credit card by name success', () => {
    let name: string = "Eugene Murray 2";
    repository.getByName(name).then((data) => {
      expect(data.name).to.equal('Eugene Murray 2');
      expect(data.cardNumber).to.equal('321');
      expect(data.limit).to.equal(-4000);
      expect(data.balance).to.equal(0);
    }).catch((err) => {
      console.error(err);
    });
  });

  it('should update balance success', () => {
    let name: string = "Eugene Murray 2";
    repository.getByName(name).then((creditCard) => {
        let oldBalance = creditCard.balance;
        creditCard.balance += 500;
        repository.updateBalance(creditCard);

        repository.getByName(name).then((creditCard) => {
          let newBalance = creditCard.balance;
          expect(oldBalance).not.equal(newBalance);
          expect(oldBalance).lessThan(newBalance);
        });
      });
  });
});