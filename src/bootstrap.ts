import 'reflect-metadata';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import TYPES from './constants/types';
import TAGS from './constants/tags';
import { CreditCardService } from './services/creditCardService';
import { ValidationService } from './services/validationService';
import { Repository } from './data/repository';
import { CreditCardController } from './controllers/creditCardController';


let container = new Container();
container.bind<interfaces.Controller>(TYPE.Controller).to(CreditCardController).whenTargetNamed(TAGS.CreditCardController);
container.bind<CreditCardService>(TYPES.CreditCardService).to(CreditCardService);
container.bind<ValidationService>(TYPES.ValidationService).to(ValidationService);
container.bind<Repository>(TYPES.Repository).to(Repository).inSingletonScope();

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