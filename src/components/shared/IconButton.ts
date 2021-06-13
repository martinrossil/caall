import { DisplayContainer, IColor, IPathElement } from 'enta';
import Theme from '../../design/Theme';
import Factory from '../../factories/Factory';

export default class IconButton extends DisplayContainer {
    public constructor(icon: string, color: IColor, size = 56) {
        super();
        this.name = 'IconButton';
        this.iconPath.pathData = icon;
        this.size(size, size);
        this.cornerSize = 16;
        this.backgroundColor = color;
        this.addElement(this.iconPath);
    }

    private _iconPath!: IPathElement;

    public get iconPath(): IPathElement {
        if (!this._iconPath) {
            this._iconPath = Factory.getIcon('', Theme.colors.black.opacity100);
            this._iconPath.horizontalCenter = this._iconPath.verticalMiddle = 0;
        }
        return this._iconPath;
    }
}
customElements.define('icon-button', IconButton);
