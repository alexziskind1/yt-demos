import { EventData } from "tns-core-modules/data/observable";
import { Page, View, Color } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { animate, JsAnimationDefinition, animateColor, JsColorAnimationDefinition, AnimationColorRange } from "./animation-helpers";

let lbl: View = null;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    lbl = page.getViewById('lbl') as View;
}

export function onTap_bak() {
    const endColor = new Color('blue');

    const defR: JsAnimationDefinition = {
        curve: t => t,
        getRange: () => { return { from: lbl.color.r, to: endColor.r }; },
        step: (v) => lbl.color = new Color(255, v, lbl.color.g, lbl.color.b)
    };
    const defG: JsAnimationDefinition = {
        curve: t => t,
        getRange: () => { return { from: lbl.color.g, to: endColor.g }; },
        step: (v) => lbl.color = new Color(255, lbl.color.r, v, lbl.color.b)
    };
    const defB: JsAnimationDefinition = {
        curve: t => t,
        getRange: () => { return { from: lbl.color.b, to: endColor.b }; },
        step: (v) => lbl.color = new Color(255, lbl.color.r, lbl.color.g, v)
    };

    animate(5000, [defR, defG, defB]);

}


export function onTap() {
    const endColor = new Color('blue');
    const def: JsColorAnimationDefinition = {
        curve: t => t,
        getRange: () => {
            const r: AnimationColorRange = {
                range_R: { from: lbl.color.r, to: endColor.r },
                range_G: { from: lbl.color.g, to: endColor.g },
                range_B: { from: lbl.color.b, to: endColor.b }
            };
            return r;
        },
        step: (r, g, b) => lbl.color = new Color(255, r, g, b)
    };
    animateColor(5000, [def]);
}
