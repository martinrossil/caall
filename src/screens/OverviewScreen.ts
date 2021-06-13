import { IVerticalLayout, ScrollContainer, VerticalLayout } from 'enta';
import OverviewSubHeader from '../components/overview/OverviewSubHeader';
import HeaderBar from '../components/shared/HeaderBar';
import CustomerTransactions from '../components/overview/CustomerTransactions';
import AnalyticsOverview from '../components/overview/analytics/AnalyticsOverview';
import SalesFiguresHeader from '../components/overview/sales/SalesFiguresHeader';

export default class OverviewScreen extends ScrollContainer {
    public constructor() {
        super();
        this.name = 'DesktopOverviewScreen';
        this.paddingY = 32;
        this.layout = this.verticalLayout;
        this.percentWidth = this.percentHeight = 100;
        this.addElements([new AnalyticsOverview(), new SalesFiguresHeader(), new CustomerTransactions()]);
    }

    private verticalLayout: IVerticalLayout = new VerticalLayout();
    private headerBar: HeaderBar = new HeaderBar();
    private overviewSubHeader: OverviewSubHeader = new OverviewSubHeader();

    protected validate(): void {
        super.validate();
        if (window.innerWidth > 1023) {
            this.paddingX = 56;
            this.verticalLayout.verticalGap = 64;
        } else {
            this.paddingX = 32;
            this.verticalLayout.verticalGap = 32;
        }
        if (window.innerWidth < 768) {
            if (this.contains(this.headerBar)) {
                this.removeElement(this.headerBar);
            }
            if (this.contains(this.overviewSubHeader)) {
                this.removeElement(this.overviewSubHeader);
            }
        } else {
            if (!this.contains(this.headerBar)) {
                this.addElementAt(this.headerBar, 0);
            }
            if (!this.contains(this.overviewSubHeader)) {
                this.addElementAt(this.overviewSubHeader, 1);
            }
        }
    }
}
customElements.define('overview-screen', OverviewScreen);
