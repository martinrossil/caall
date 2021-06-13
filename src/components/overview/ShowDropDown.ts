import { DisplayContainer, HorizontalLayout } from 'enta';
import Icons from '../../design/Icons';
import Theme from '../../design/Theme';
import Factory from '../../factories/Factory';

export default class ShowDropDown extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ShowDropDown';
        this.size(186, 40);
        this.cornerSize = 16;
        this.paddingX = 16;
        this.layout = new HorizontalLayout(16, 'left', 'middle');
        this.backgroundColor = Theme.colors.yellow.opacity20;
        this.addElements([Factory.getBoldLabel(14, 'Show:', Theme.colors.black.opacity40),
                            Factory.getBoldLabel(14, 'This Year', Theme.colors.black.opacity100),
                            Factory.getIcon(Icons.CARET_DOWN, Theme.colors.black.opacity100)])
    }
}
customElements.define('show-drop-down', ShowDropDown);
