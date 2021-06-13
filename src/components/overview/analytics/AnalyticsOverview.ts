import { DisplayContainer, VerticalLayout } from 'enta';
import Factory from '../../../factories/Factory';
import AnalyticsOverviewSummary from './AnalyticsOverviewSummary';

export default class AnalyticsOverview extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'AnalyticsOverview';
        this.percentWidth = 100;
        this.layout = new VerticalLayout(32);
        this.addElements([Factory.getBold24Black100Label('Analytics Overview'), new AnalyticsOverviewSummary()]);
    }
}
customElements.define('analytics-overview', AnalyticsOverview);
