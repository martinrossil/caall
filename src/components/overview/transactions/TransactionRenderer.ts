import { DisplayContainer, IDisplayContainer, ItemRenderer } from 'enta';
import Icons from '../../../design/Icons';
import Theme from '../../../design/Theme';
import ITransaction from '../../../model/vo/ITransaction';

export default class TransactionRenderer extends ItemRenderer<ITransaction> {
    public constructor() {
        super();
        this.name = 'TransactionRenderer';
        this.percentWidth = 100;
        this.height = 48;
    }

    protected dataChanged(): void {
        if (this.data) {
            // console.log(this.data);
        }
    }

    private _iconContainer!: IDisplayContainer;

    private get iconContainer(): IDisplayContainer {
        if (!this._iconContainer) {
            this._iconContainer = new DisplayContainer();
        }
        return this._iconContainer;
    }
}
customElements.define('transaction-renderer', TransactionRenderer);
