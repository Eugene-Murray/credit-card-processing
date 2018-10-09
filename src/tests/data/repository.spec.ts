import { expect } from 'chai';
//import { CreditCard } from './../../models/creditCard';
import { Repository } from './../../data/repository';

describe('Repository', () => {
  let repository;

  beforeEach(() => {
    repository = new Repository();
  });

  it('should get back all pre-populated credit cards', () => {
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
});