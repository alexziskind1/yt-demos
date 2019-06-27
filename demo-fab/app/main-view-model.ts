import { Observable } from "tns-core-modules/data/observable";
import { ItemEventData } from 'tns-core-modules/ui/list-view';

export class HelloWorldModel extends Observable {

    public items = [];

    constructor() {
        super();

        for (let i = 1; i < 30; i++) {
            this.items.push(i)
        }
    }

    public onItemTap(args: ItemEventData) {
        alert('Item tapped: ' + args.index);
    }
}
