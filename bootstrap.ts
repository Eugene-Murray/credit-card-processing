import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import TYPES from './constants/types';
import { CreditCardService } from './services/creditCardService';
import { ValidationService } from './services/validationService';
import './controllers/creditCardController';


let container = new Container();
container.bind<CreditCardService>(TYPES.CreditCardService).to(CreditCardService);
container.bind<ValidationService>(TYPES.ValidationService).to(ValidationService);

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let serverInstance = server.build();
serverInstance.listen(3000);

console.log('Credit-Card-Processing Server started on port 3000');