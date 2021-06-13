import { DisplayContainer, HorizontalLayout, IPathElement, PathElement, Rectangle } from 'enta';
import Icons from '../../design/Icons';
import Theme from '../../design/Theme';
import Factory from '../../factories/Factory';

export default class LogoBox extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'LogoBox';
        this.layout = new HorizontalLayout(16, 'left', 'middle');
        this.addElements([this.logo, Factory.getBoldLabel(38, 'CaAll', Theme.colors.black.opacity100)]);
    }

    private _logo!: IPathElement;
    private get logo(): IPathElement {
        if (!this._logo) {
            this._logo = new PathElement();
            this._logo.size(32, 32);
            this._logo.viewBox = new Rectangle(2, 2, 20, 20);
            this._logo.pathData = Icons.EYE;
            this._logo.fillColor = Theme.colors.yellow.opacity100;
        }
        return this._logo;
    }
}
customElements.define('logo-box', LogoBox);
