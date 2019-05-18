import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { Label } from 'tns-core-modules/ui/label';
import { animate, JsAnimationDefinition } from "./animation-helpers";
import * as d3 from 'd3-ease';

let page: Page = null;

export function navigatingTo(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}


export function onTap(args: EventData) {
    const lbl = page.getViewById('lbl') as Label;

    const def1: JsAnimationDefinition = {
        getRange: () => {
            return { from: 100, to: 200 };
        },
        curve: d3.easeExpOut,
        step: (v) => {
            lbl.height = v;
        }
    };

    const def2: JsAnimationDefinition = {
        getRange: () => {
            return { from: 600, to: 10 };
        },
        curve: d3.easeBounceOut,
        step: (v) => {
            lbl.width = v;
        }
    };

    animate(2000, [def1, def2]).then(() => console.log('animation complete'));

}
