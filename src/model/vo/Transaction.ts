import { StatusType } from '../types/StatusType';
import ITransaction from './ITransaction';

export default class Transaction implements ITransaction {
    public status: StatusType;
    public id: number;
    public date: Date;
    public amount: number;
    public constructor(status: StatusType, id: number, date: Date, amount: number) {
        this.status = status;
        this.id = id;
        this.date = date;
        this.amount = amount;
    }
}
