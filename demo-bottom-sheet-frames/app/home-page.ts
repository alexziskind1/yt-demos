import { EventData } from "tns-core-modules/ui/page/page";
import { Button } from 'tns-core-modules/ui/button';

import * as frameModule from 'tns-core-modules/ui/frame';

export function page1BtnTap(args: EventData) {
    //frame.topmost().navigate('page2-page');

    const button = args.object as Button;

    button.page.frame.navigate('page2-page');
}

export function btnShowTap(args: EventData) {
    //Show bottom sheet

    frameModule.topmost().notify({ eventName: 'showBottomSheet', object: args.object });
}
