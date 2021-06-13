import { DisplayContainer, HorizontalLayout, IDisplayContainer, IList, List, VerticalLayout } from 'enta';
import Theme from '../../../design/Theme';
import Factory from '../../../factories/Factory';
import Model from '../../../model/Model';
import ITransaction from '../../../model/vo/ITransaction';
import SpacerElement from '../../shared/SpacerElement';
import TransactionRenderer from './TransactionRenderer';

export default class TransactionHistory extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'TransactionHistory';
        this.percentWidth = 100;
        this.layout = new VerticalLayout(32);
        this.addElements([Factory.getBold24Black100Label('Transaction History'), this.container]);
    }

    private _container!: IDisplayContainer;

    private get container(): IDisplayContainer {
        if (!this._container) {
            this._container = new DisplayContainer();
            this._container.percentWidth = 100;
            this._container.cornerSize = 16;
            this._container.padding = 32;
            this._container.backgroundColor = Theme.colors.white.opacity100;
            this._container.layout = new VerticalLayout(32);
            this._container.addElements([this.transactionHeader, this.transactionList]);
        }
        return this._container;
    }

    private _transactionHeader!: IDisplayContainer;

    private get transactionHeader(): IDisplayContainer {
        if (!this._transactionHeader) {
            this._transactionHeader = new DisplayContainer();
            this._transactionHeader.percentWidth = 100;
            this._transactionHeader.height = 72;
            this._transactionHeader.cornerSize = 16;
            this._transactionHeader.backgroundColor = Theme.colors.red.opacity10;
            this._transactionHeader.layout = new HorizontalLayout();
            this._transactionHeader.addElements([Factory.getBoldLabel(14, 'Payment Number', Theme.colors.black.opacity100),
                                                new SpacerElement(100),
                                                Factory.getBoldLabel(14, 'Amount', Theme.colors.black.opacity100, 120),
                                                Factory.getBoldLabel(14, 'Status', Theme.colors.black.opacity100, 78)]);
        }
        return this._transactionHeader;
    }

    private _transactionList!: IList<ITransaction>;

    private get transactionList(): IList<ITransaction> {
        if (!this._transactionList) {
            this._transactionList = new List();
            this._transactionList.percentWidth = 100;
            this._transactionList.ItemRendererClass = TransactionRenderer;
            this._transactionList.verticalScrollEnabled = false;
            this._transactionList.layout = new VerticalLayout(32);
            this._transactionList.dataProvider = Model.transactions;
        }
        return this._transactionList;
    }
}
customElements.define('transaction-history', TransactionHistory);
