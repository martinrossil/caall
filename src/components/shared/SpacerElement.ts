import { DisplayElement } from 'enta';

export default class SpacerElement extends DisplayElement {
    public constructor(percentWidth = NaN, percentHeight = NaN) {
        super();
        this.name = 'SpacerElement';
        this.percentWidth = percentWidth;
        this.percentHeight = percentHeight;
    }
}
customElements.define('spacer-element', SpacerElement);
