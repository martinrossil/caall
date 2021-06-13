import { ApplicationElement, HorizontalLayout } from 'enta';
import CustomerTransactions from './components/overview/CustomerTransactions';
import LeftSideBar from './components/sidebar/LeftSideBar';
import MainScreenNavigator from './screens/MainScreenNavigator';
export default class CaAll extends ApplicationElement {
    public constructor() {
        super();
        this.name = 'CaAll';
        this.layout = new HorizontalLayout();
        window.addEventListener('load', () => {
            this.pageLoaded = true;
            this.addElement(new MainScreenNavigator());
            this.updateUI();
        }, { once: true })
    }

    private pageLoaded = false;
    private leftSideBar: LeftSideBar = new LeftSideBar();

    protected validate(): void {
        super.validate();
        if (this.pageLoaded) {
            this.updateUI();
        }
    }

    private updateUI() {
        if (this.measuredWidth > 1023) {
            if (!this.contains(this.leftSideBar)) {
                this.addElementAt(this.leftSideBar, 0);
            }
        } else {
            if (this.contains(this.leftSideBar)) {
                this.removeElement(this.leftSideBar);
            }
        }
    }
}
customElements.define('ca-all', CaAll);
