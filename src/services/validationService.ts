import { injectable } from 'inversify';

@injectable()
export class ValidationService {
    
    /**
     * Validate credit card
     * @param cardNumber 
     * @returns true if credit card 
     */
    public validCreditCard(cardNumber: string) : boolean {
        // Accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(cardNumber)) return false;

        // Luhn Algorithm
        let nCheck = 0; 
        let bEven = false;

        cardNumber = cardNumber.replace(/\D/g, "");

        for (var n = cardNumber.length - 1; n >= 0; n--) {
            let cDigit = cardNumber.charAt(n);
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