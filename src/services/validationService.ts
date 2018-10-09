import { injectable } from 'inversify';
import { CreditCard } from './../models/creditCard';

@injectable()
export class ValidationService {
    
    public validCreditCard(creditCard: CreditCard) : boolean {
        // Accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(creditCard.cardNumber)) return false;

        // Luhn Algorithm
        let nCheck = 0; 
        let bEven = false;

        creditCard.cardNumber = creditCard.cardNumber.replace(/\D/g, "");

        for (var n = creditCard.cardNumber.length - 1; n >= 0; n--) {
            let cDigit = creditCard.cardNumber.charAt(n);
            let nDigit = parseInt(cDigit, 10);
            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) == 0;
    }
}