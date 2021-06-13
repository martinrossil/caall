import { DisplayContainer, HorizontalLayout } from 'enta';
import Icons from '../../design/Icons';
import Theme from '../../design/Theme';
import IconButton from './IconButton';
import IconLabelField from './IconLabelField';
import SpacerElement from './SpacerElement';

export default class HeaderBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'HeaderBar';
        this.percentWidth = 100;
        this.height = 56;
        this.layout = new HorizontalLayout(16);
        this.addElements([new IconLabelField(296, 56, Theme.colors.black.opacity40, Icons.SEARCH, Theme.colors.black.opacity40, 'Search for...', Theme.colors.white.opacity100),
                            new SpacerElement(100),
                            new IconButton(Icons.NOTIFICATION, Theme.colors.yellow.opacity20),
                            new IconButton(Icons.SETTING, Theme.colors.yellow.opacity20)]);
    }
}
customElements.define('header-bar', HeaderBar);
