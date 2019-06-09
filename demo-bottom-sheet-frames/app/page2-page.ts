import { EventData } from "tns-core-modules/ui/page/page";
import { Button } from 'tns-core-modules/ui/button';

import * as frameModule from 'tns-core-modules/ui/frame';


export function btnShowTap(args: EventData) {
    //Show bottom sheet
    console.log('btnShowTaop');
    frameModule.topmost().notify({ eventName: 'showBottomSheet', object: args.object });
}
