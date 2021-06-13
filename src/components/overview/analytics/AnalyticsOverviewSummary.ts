import { ColumnLayout, DisplayContainer } from 'enta';
import Icons from '../../../design/Icons';
import Theme from '../../../design/Theme';
import OverviewSummary from './OverviewSummary';

export default class AnalyticsOverviewSummary extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'AnalyticsOverviewSummary';
        this.percentWidth = 100;
        this.layout = new ColumnLayout(256, 4, 230, 32);
        this.addElements([new OverviewSummary('Sales', '$34.1K', '($15.8K last year)', '105.23 %', Theme.colors.green.opacity100, Icons.ARROW_UP),
                            new OverviewSummary('Purchase', '$6.2K', '($30K last year)', '20.4 %', Theme.colors.red.opacity100, Icons.ARROW_DOWN),
                            new OverviewSummary('Return', '$261.3', '($234 last year)', '12.4 %', Theme.colors.green.opacity100, Icons.ARROW_UP),
                            new OverviewSummary('Marketing', '$13.1K', '($10.9 last year)', '32.84 %', Theme.colors.green.opacity100, Icons.ARROW_UP)]);
    }
}
customElements.define('analytics-overview-summary', AnalyticsOverviewSummary);
