import { ScreenNavigator } from 'enta';
import Theme from '../design/Theme';
import OverviewScreen from './OverviewScreen';

export default class MainScreenNavigator extends ScreenNavigator {
    public constructor() {
        super();
        this.name = 'DesktopScreenNavigator';
        this.percentWidth = this.percentHeight = 100;
        this.backgroundColor = Theme.colors.red.opacity10;
        this.addElements([new OverviewScreen()]);
    }
}
customElements.define('main-screen-navigator', MainScreenNavigator);
