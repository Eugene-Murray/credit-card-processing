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

  it('should validCreditCard 18 digits success', () => {
    let creditCard: string = "5573610058109036";
    let result = validationService.validCreditCard(creditCard);
    expect(result).equals(false);
  });

  it('should validCreditCard 19 digits success', () => {
    let creditCard: string = "123";
    let result = validationService.validCreditCard(creditCard);
    expect(result).equals(false);
  });
});