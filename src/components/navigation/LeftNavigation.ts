import { List, VerticalLayout } from 'enta';
import Model from '../../model/Model';
import INavigationItem from '../../model/vo/INavigationItem';
import LeftNavigationRenderer from './LeftNavigationRenderer';

export default class LeftNavigation extends List<INavigationItem> {
    public constructor() {
        super();
        this.name = 'LeftNavigation';
        this.percentHeight = 100;
        this.width = 192;
        this.ItemRendererClass = LeftNavigationRenderer;
        this.dataProvider = Model.navigationItems;
        this.layout = new VerticalLayout();
        this.selectedIndex = 0;
    }
}
customElements.define('left-navigation', LeftNavigation);
