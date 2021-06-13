import { DisplayContainer, IDisplayContainer, IList, List, VerticalLayout } from 'enta';
import Theme from '../../../design/Theme';
import Factory from '../../../factories/Factory';
import Model from '../../../model/Model';
import ICustomer from '../../../model/vo/ICustomer';
import CustomerRenderer from './CustomerRenderer';

export default class NewCustomers extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'NewCustomers';
        this.percentWidth = 100;
        this.layout = new VerticalLayout(32);
        this.addElements([Factory.getBold24Black100Label('New Customers'), this.container]);
    }

    private _container!: IDisplayContainer;

    private get container(): IDisplayContainer {
        if (!this._container) {
            this._container = new DisplayContainer();
            this._container.percentWidth = 100;
            this._container.cornerSize = 16;
            this._container.backgroundColor = Theme.colors.white.opacity100;
            this._container.addElements([this.customerList]);
        }
        return this._container;
    }

    private _customerList!: IList<ICustomer>;

    private get customerList(): IList<ICustomer> {
        if (!this._customerList) {
            this._customerList = new List();
            this._customerList.percentWidth = 100;
            this._customerList.padding = 32;
            this._customerList.ItemRendererClass = CustomerRenderer;
            this._customerList.verticalScrollEnabled = false;
            this._customerList.layout = new VerticalLayout(32);
            this._customerList.dataProvider = Model.customers;
        }
        return this._customerList;
    }
}
customElements.define('new-customers', NewCustomers);
