import * as frameModule from 'tns-core-modules/ui/frame';
import { EventData } from 'tns-core-modules/ui/frame';

export function tapMeTap(args: EventData) {
    //alert('tap');

    frameModule.topmost().notify({ eventName: 'hideBottomSheet', object: args.object })
}
