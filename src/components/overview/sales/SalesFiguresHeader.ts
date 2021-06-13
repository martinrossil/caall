import { DisplayContainer, HorizontalLayout, IColor } from 'enta';
import Icons from '../../../design/Icons';
import Theme from '../../../design/Theme';
import Factory from '../../../factories/Factory';
import IconLabelField from '../../shared/IconLabelField';
import SpacerElement from '../../shared/SpacerElement';

export default class SalesFiguresHeader extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'SalesFiguresHeader';
        this.percentWidth = 100;
        this.layout = new HorizontalLayout(16, 'left', 'middle');
        const black: IColor = Theme.colors.black.opacity100;
        this.addElements([Factory.getBoldLabel(24, 'Sales Figures', Theme.colors.black.opacity100, 152),
                            new SpacerElement(100),
                            new IconLabelField(148, 48, Theme.colors.yellow.opacity100, Icons.DOT, black, 'Marketing', Theme.colors.yellow.opacity20),
                            new IconLabelField(120, 48, Theme.colors.blue.opacity100, Icons.DOT, black, 'Direct', Theme.colors.blue.opacity20)]);
    }
}
customElements.define('sales-figures-header', SalesFiguresHeader);
