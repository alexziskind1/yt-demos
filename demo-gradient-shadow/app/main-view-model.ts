import { Observable } from "tns-core-modules/data/observable";

export class HelloWorldModel extends Observable {

    public items: string[] = [];

    constructor() {
        super();

        for (var i = 0; i < 100; i++) {
            this.items.push('item ' + i);
        }
    }
}
