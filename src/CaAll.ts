import { ApplicationElement } from 'enta';
export default class CaAll extends ApplicationElement {
    public constructor() {
        super();
        console.log('CaAll');
    }
}
customElements.define('ca-all', CaAll);
