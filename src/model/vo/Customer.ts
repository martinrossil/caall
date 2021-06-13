import ICustomer from './ICustomer';

export default class Customer implements ICustomer {
    public avatar: string;
    public name: string;
    public handle: string;
    public constructor(avatar: string, name: string, handle: string) {
        this.avatar = avatar;
        this.name = name;
        this.handle = handle;
    }
}
