
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";

import { screen, isIOS } from 'tns-core-modules/platform';
import { CubicBezierAnimationCurve } from "tns-core-modules/ui/animation/animation";
import * as frameModule from "tns-core-modules/ui/frame";


export function pageFrameLoaded(args: EventData) {
    const frame = args.object as frameModule.Frame;

    frameModule.topmost().on('showBottomSheet', () => {
        frame.borderRadius = 10;
        frame.animate({
            duration: 1000,
            scale: { x: .95, y: .95 },
            opacity: .6,
            curve: new CubicBezierAnimationCurve(.44, .63, 0, 1)
        });
    });

    frameModule.topmost().on('hideBottomSheet', () => {
        frame.animate({
            duration: 1000,
            scale: { x: 1, y: 1 },
            opacity: 1,
            curve: new CubicBezierAnimationCurve(.44, .63, 0, 1)
        }).then(() => { frame.borderRadius = 0; });
    });
}

export function actionFrameLoaded(args: EventData) {
    const frame = args.object as frameModule.Frame;

    frame.translateY = screen.mainScreen.heightDIPs;

    frameModule.topmost().on('showBottomSheet', () => {
        frame.animate({
            duration: 1000,
            translate: { x: 0, y: 200 },
            curve: new CubicBezierAnimationCurve(.44, .63, 0, 1)
        });
    });

    frameModule.topmost().on('hideBottomSheet', () => {
        frame.animate({
            duration: 1000,
            translate: { x: 0, y: screen.mainScreen.heightDIPs },
            curve: new CubicBezierAnimationCurve(.44, .63, 0, 1)
        });
    });

}
