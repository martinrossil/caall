import { ColumnLayout, DisplayContainer } from 'enta';
import NewCustomers from './customers/NewCustomers';
import TransactionHistory from './transactions/TransactionHistory';

export default class CustomerTransactions extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'CustomerTransactions';
        this.percentWidth = 100;
        this.layout = new ColumnLayout(300, 2, 440, 32);
        this.addElements([new NewCustomers(), new TransactionHistory()]);
    }
}
customElements.define('customer-transactions', CustomerTransactions);
