import { Cursor, HorizontalLayout, ILabelElement, IPathElement, ItemRenderer } from 'enta';
import Theme from '../../design/Theme';
import Factory from '../../factories/Factory';
import INavigationItem from '../../model/vo/INavigationItem';

export default class LeftNavigationRenderer extends ItemRenderer<INavigationItem> {
    public constructor() {
        super();
        this.name = 'LeftNavigationRenderer';
        this.cursor = Cursor.POINTER;
        this.width = 192;
        this.height = 56;
        this.layout = new HorizontalLayout(16, 'left', 'middle');
        this.addElements([this.pathElement, this.labelElement]);
    }

    private _pathElement!: IPathElement;

    private get pathElement(): IPathElement {
        if (!this._pathElement) {
            this._pathElement = Factory.getIcon('', Theme.colors.black.opacity40);
        }
        return this._pathElement;
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = Factory.getBoldLabel(14, '', Theme.colors.black.opacity40);
            this._labelElement.enabled = false;
        }
        return this._labelElement;
    }

    protected dataChanged(): void {
        if (this.data) {
            this.pathElement.pathData = this.data.icon;
            this.labelElement.text = this.data.text;
        }
    }

    public initial(): void {
        if (!this.selected) {
            this.pathElement.fillColor = Theme.colors.black.opacity40;
            this.labelElement.textColor = Theme.colors.black.opacity40;
        } else {
            this.pathElement.fillColor = Theme.colors.yellow.opacity100;
            this.labelElement.textColor = Theme.colors.black.opacity100;
        }
    }

    public hover(): void {
        this.pathElement.fillColor = Theme.colors.yellow.opacity100;
        this.labelElement.textColor = Theme.colors.black.opacity100;
    }

    public pressed(): void {
        this.pathElement.fillColor = Theme.colors.yellow.opacity60;
        this.labelElement.textColor = Theme.colors.black.opacity60;
    }

    protected selectedChanged(): void {
        if (this.selected) {
            this.pathElement.fillColor = Theme.colors.yellow.opacity100;
            this.labelElement.textColor = Theme.colors.black.opacity100;
        } else {
            this.pathElement.fillColor = Theme.colors.black.opacity40;
            this.labelElement.textColor = Theme.colors.black.opacity40;
        }
    }
}
customElements.define('left-navigation-renderer', LeftNavigationRenderer);
