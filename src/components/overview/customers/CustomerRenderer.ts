import { ILabelElement, IPathElement, ItemRenderer } from 'enta';
import Icons from '../../../design/Icons';
import Theme from '../../../design/Theme';
import Factory from '../../../factories/Factory';
import ICustomer from '../../../model/vo/ICustomer';
import AvatarBox from '../../shared/AvatarBox';
export default class CustomerRenderer extends ItemRenderer<ICustomer> {
    public constructor() {
        super();
        this.name = 'CustomerRenderer';
        this.percentWidth = 100;
        this.height = 56;
        this.addElements([this.avatar, this.nameLabel, this.handleName, this.icon]);
        // this.addElements([this.avatar, this.icon]);
    }

    private _avatar!: AvatarBox;

    private get avatar(): AvatarBox {
        if (!this._avatar) {
            this._avatar = new AvatarBox('');
        }
        return this._avatar;
    }

    private _nameLabel!: ILabelElement;

    private get nameLabel(): ILabelElement {
        if (!this._nameLabel) {
            this._nameLabel = Factory.getBoldLabel(14, '', Theme.colors.black.opacity100);
            this._nameLabel.left = 72;
            this._nameLabel.top = 12;
        }
        return this._nameLabel;
    }

    private _handleLabel!: ILabelElement;

    private get handleName(): ILabelElement {
        if (!this._handleLabel) {
            this._handleLabel = Factory.getLabel(14, '', Theme.colors.black.opacity40);
            this._handleLabel.left = 72;
            this._handleLabel.bottom = 12;
        }
        return this._handleLabel;
    }

    private _icon!: IPathElement;

    private get icon(): IPathElement {
        if (!this._icon) {
            this._icon = Factory.getIcon(Icons.MESSAGE, Theme.colors.blue.opacity100);
            this._icon.right = 0;
            this._icon.verticalMiddle = 0;
        }
        return this._icon;
    }

    protected dataChanged(): void {
        if (this.data) {
            this.avatar.source = this.data.avatar;
            this.nameLabel.text = this.data.name;
            this.handleName.text = this.data.handle;
        }
    }
}
customElements.define('customer-renderer', CustomerRenderer);
