import { DisplayContainer, IColor, VerticalLayout } from 'enta';
import Theme from '../../../design/Theme';
import Factory from '../../../factories/Factory';
import ChangeArrowLabel from './ChangeArrowLabel';

export default class OverviewSummary extends DisplayContainer {
    public constructor(section: string, amount: string, last: string, change: string, color: IColor, icon: string) {
        super();
        this.name = 'OverviewSummary';
        this.percentWidth = 100;
        this.height = 230;
        this.paddingTop = 32;
        this.backgroundColor = Theme.colors.white.opacity100;
        this.cornerSize = 16;
        this.layout = new VerticalLayout(32, 'center');
        this.addElements([Factory.getBoldBlack100Label(14, section),
                            Factory.getBoldBlack100Label(36, amount),
                            Factory.getLabel(14, last, Theme.colors.black.opacity40),
                            new ChangeArrowLabel(icon, color, change)]);
    }
}
customElements.define('overview-summary', OverviewSummary);
