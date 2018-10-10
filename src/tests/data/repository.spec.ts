import { expect } from 'chai';
import { Repository } from './../../data/repository';

describe('Repository', () => {
  let repository;

  beforeEach(() => {
    repository = new Repository();
  });

  it('should get back all pre-populated credit cards success', () => {
    repository.getAll().then((data) => {
        expect(data).to.deep.equal(
            [{
              name: 'Eugene Murray 1',
              cardNumber: '123',
              limit: 2000
            }, {
                email: 'Eugene Murray 2',
                name: '321',
                limit: 4000
              }]
          );
    });
  });

  it('should find credit card by name success', () => {
    let name: string = "Eugene Murray 2";
    repository.getByName(name).then((data) => {
      expect(data).to.deep.equal(
        {
            email: 'Eugene Murray 2',
            name: '321',
            limit: 4000
        }
      );
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