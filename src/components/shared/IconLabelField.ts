import { DisplayContainer, HorizontalLayout, IColor } from 'enta';
import Factory from '../../factories/Factory';

export default class IconLabelField extends DisplayContainer {
    public constructor(width: number, height: number, iconColor: IColor, icon: string, labelColor: IColor, label: string, backgroundColor: IColor) {
        super();
        this.name = 'IconLabelField';
        this.backgroundColor = backgroundColor;
        this.size(width, height);
        this.paddingX = 18;
        this.cornerSize = 16;
        this.layout = new HorizontalLayout(16, 'left', 'middle');
        this.addElements([Factory.getIcon(icon, iconColor), Factory.getBoldLabel(14, label, labelColor)]);
    }
}
customElements.define('icon-label-field', IconLabelField);
