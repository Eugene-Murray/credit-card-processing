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

//   it('should give back the right user', () => {
//     expect(controller.getUser({
//       params: {
//         id: 'Lorem'
//       }
//     })).to.deep.equal({
//       email: 'lorem@ipsum.com',
//       name: 'Lorem'
//     });
//   });

//   it('should add a new user', () => {
//     expect(controller.getUsers()).to.have.length(2);
//     expect(controller.newUser({
//       body: {
//         email: 'test@test.com',
//         name: 'test'
//       }
//     })).to.deep.equal({
//       email: 'test@test.com',
//       name: 'test'
//     });
//     expect(controller.getUsers()).to.have.length(3);
//   });

//   it('should update a existing user', () => {
//     expect(controller.updateUser({
//       body: {
//         email: 'changed@changed.com',
//         name: 'Lorem'
//       }, params: {
//         id: 'Lorem'
//       }
//     })).to.deep.equal({
//       email: 'changed@changed.com',
//       name: 'Lorem'
//     });
//   });

//   it('should delete a user', () => {
//     expect(controller.getUsers()).to.have.length(2);
//     expect(controller.deleteUser({
//       params: {
//         id: 'Lorem'
//       }
//     })).to.equal('Lorem');
//     expect(controller.getUsers()).to.have.length(1);
//   });
});