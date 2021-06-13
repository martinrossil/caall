import { StatusType } from '../types/StatusType';

export default interface ITransaction {
    status: StatusType;
    id: number;
    date: Date;
    amount: number;
}
