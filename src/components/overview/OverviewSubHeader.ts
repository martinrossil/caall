import { DisplayContainer, HorizontalLayout, IColor } from 'enta';
import Icons from '../../design/Icons';
import Theme from '../../design/Theme';
import IconLabelField from '../shared/IconLabelField';
import SpacerElement from '../shared/SpacerElement';
import ShowDropDown from './ShowDropDown';

export default class OverviewSubHeader extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'OverviewSubHeader';
        this.percentWidth = 100;
        this.height = 56;
        this.layout = new HorizontalLayout(0, 'left', 'middle');
        const white: IColor = Theme.colors.white.opacity100;
        const blue: IColor = Theme.colors.blue.opacity100;
        this.addElements([new ShowDropDown(),
                            new SpacerElement(100),
                            new IconLabelField(183, 56, white, Icons.ARROW_DOWN, white, 'Generate Report', blue)]);
    }
}
customElements.define('overview-sub-header', OverviewSubHeader);
