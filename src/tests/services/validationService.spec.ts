import { expect } from 'chai';
import { ValidationService } from './../../services/validationService';


describe('ValidationService', () => {
  let validationService;

  beforeEach(() => {
    validationService = new ValidationService();
  });

//   [
//     {
//         "name": "Eugene Murray 1",
//         "cardNumber": "123",
//         "limit": 2000,
//         "balance": 0
//     },
//     {
//         "name": "Eugene Murray 2",
//         "cardNumber": "321",
//         "limit": 4000,
//         "balance": 0
//     },
//     {
//         "name": "Eugene1",
//         "cardNumber": "6771771771771771774",
//         "limit": 4,
//         "balance": 4
//     },
//     {
//         "name": "Eugene1",
//         "cardNumber": "5126870832570869",
//         "limit": 4,
//         "balance": 4
//     },
//     {
//         "name": "Eugene1",
//         "cardNumber": "4941202229355074",
//         "limit": 4,
//         "balance": 4
//     },
//     {
//         "name": "Eugene1",
//         "cardNumber": "4941202229355074",
//         "limit": 4,
//         "balance": 4
//     }
// ]


//   it('should get back all user', () => {
//     expect(validationService.validCreditCard()).to.deep.equal(
//       [{
//         email: 'lorem@ipsum.com',
//         name: 'Lorem'
//       }, {
//           email: 'doloe@sit.com',
//           name: 'Dolor'
//         }]
//     );
//   });
});