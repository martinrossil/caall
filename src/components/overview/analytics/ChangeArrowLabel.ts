import { DisplayContainer, HorizontalLayout, IColor } from 'enta';
import Factory from '../../../factories/Factory';

export default class ChangeArrowLabel extends DisplayContainer {
    public constructor(icon: string, color: IColor, value: string) {
        super();
        this.name = 'ChangeArrowLabel';
        this.layout = new HorizontalLayout(16, 'left', 'middle');
        this.addElements([Factory.getIcon(icon, color), Factory.getBoldLabel(14, value, color)]);
    }
}
customElements.define('change-arrow-label', ChangeArrowLabel);
