import { DisplayContainer, VerticalLayout } from 'enta';
import Theme from '../../design/Theme';
import Factory from '../../factories/Factory';
import AvatarBox from '../shared/AvatarBox';

export default class ProfileBox extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ProfileBox';
        this.size(192, 182);
        this.padding = 32;
        this.cornerSize = 16;
        this.backgroundColor = Theme.colors.red.opacity10;
        this.layout = new VerticalLayout(24, 'center');
        this.addElements([new AvatarBox('martin.png'),
                            Factory.getBoldLabel(16, 'Martin Rossil', Theme.colors.black.opacity100),
                            Factory.getLabel(12, 'Owner & Founder', Theme.colors.black.opacity60)]);
    }
}
customElements.define('profile-box', ProfileBox);
