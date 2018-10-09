import { injectable } from 'inversify';

@injectable()
export class Repository {
    public get(): string {
        return "xx";
    }
}