import { DisplayContainer, VerticalLayout } from 'enta';
import LeftNavigation from '../navigation/LeftNavigation';
import LogoBox from './LogoBox';
import ProfileBox from './ProfileBox';

export default class LeftSideBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'LeftSideBar';
        this.width = 240;
        this.paddingY = 44;
        this.paddingX = 24;
        this.percentHeight = 100;
        this.layout = new VerticalLayout(32, 'center');
        this.addElements([new LogoBox(), new ProfileBox(), new LeftNavigation()]);
    }
}
customElements.define('left-side-bar', LeftSideBar);
