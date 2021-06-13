import { ImageElement } from 'enta';

export default class AvatarBox extends ImageElement {
    public constructor(source: string) {
        super();
        this.name = 'AvatarBox';
        this.size(56, 56);
        this.cornerSize = 16;
        this.clip = 'hidden';
        this.source = source;
    }
}
customElements.define('avatar-box', AvatarBox);
