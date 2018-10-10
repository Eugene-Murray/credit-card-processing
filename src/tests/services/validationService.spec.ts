import { expect } from 'chai';
import { ValidationService } from '../../services/validationService';

describe('CreditCardService', () => {
  let validationService;

  beforeEach(() => {
    validationService = new ValidationService();
  });

  it('should validCreditCard fail', () => {
    let creditCard: string = "123";
    let result = validationService.validCreditCard(creditCard);
    expect(result).equals(false);
  });

  it('should validCreditCard fail', () => {
    let creditCard: string = "123-123-123";
    let result = validationService.validCreditCard(creditCard);
    expect(result).equals(false);
  });

  it('should validCreditCard fail', () => {
    let creditCard: string = "123#123#123";
    let result = validationService.validCreditCard(creditCard);
    expect(result).equals(false);
  });

  it('should validCreditCard Visa (Debit) digits success', () => {
    let creditCard: string = "4921818425002311";
    let result = validationService.validCreditCard(creditCard);
    expect(result).equals(true);
  });

  it('should validCreditCard Maestro (19 Digit) digits success', () => {
    let creditCard: string = "6771771771771771774";
    let result = validationService.validCreditCard(creditCard);
    expect(result).equals(true);
  });
});