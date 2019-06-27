import { EventData } from "tns-core-modules/data/observable";
import { Page, View } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { screen } from 'tns-core-modules/platform';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    const btnFab = page.getViewById('btnFab') as View;

    btnFab.top = screen.mainScreen.heightDIPs - 200;
    btnFab.left = screen.mainScreen.widthDIPs - 80;
}


export function onButtonTap(args: EventData) {
    alert('FAB btn tapped');
}
