import { expect } from 'chai';
import { CreditCard } from '../../models/creditCard';
import { CreditCardService } from '../../services/creditCardService';
import { ValidationService } from '../../services/validationService';
import { Repository } from '../../data/repository';

describe('CreditCardService', () => {
  let creditCardService;
  let repository;

  beforeEach(() => {
    repository = new Repository();
    creditCardService = new CreditCardService(new ValidationService(), repository);
  });

  it('should getAllAsync success', () => {
    creditCardService.getAllAsync().then((data) => {
      expect(data.length).equals(2);
    });
  });

  it('should add creditcard 19 digits fail', () => {
    let creditCard = new CreditCard("Eugene Murray", "1234567890000000000", -1000, 0);
    try {
      creditCardService.add(creditCard);
    } catch (err) {
      expect(err).equals("Card is not valid");
    }
  });

  it('should add creditcard 18 digits success', () => {
    let creditCard = new CreditCard("Eugene Murray", "4941202229355074", -1000, 0);
    creditCardService.add(creditCard);
    repository.getByName("Eugene Murray").then((data) => {
      expect(data).to.deep.equal(
        {
          name: 'Eugene Murray',
          cardNumber: '4941202229355074',
          limit: -1000,
          balance: 0
        }
      );
    });

    it('should chargeAsync success', () => {
      creditCardService.chargeAsync("Eugene Murray", "£200").then((balance) => {
        expect(balance).to.deep.equal(
          {
            name: 'Eugene Murray',
            cardNumber: '4941202229355074',
            limit: -1000,
            balance: 800
          }
        );
      });
    });

    it('should creditAsync success', () => {
      creditCardService.creditAsync("Eugene Murray", "£200").then((balance) => {
        expect(balance).to.deep.equal(
          {
            name: 'Eugene Murray',
            cardNumber: '4941202229355074',
            limit: -1000,
            balance: 1000
          }
        );
      });
    });
  });

});