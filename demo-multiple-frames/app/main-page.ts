
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { Frame } from "tns-core-modules/ui/frame/frame";
import { screen, isIOS } from 'tns-core-modules/platform';

export function actionFrameLoaded(args: EventData) {
    const frame = args.object as Frame;

    if (isIOS) {
        frame.translateY = screen.mainScreen.heightDIPs - 80;
    } else {
        frame.translateY = screen.mainScreen.heightDIPs - 150;
    }

}
