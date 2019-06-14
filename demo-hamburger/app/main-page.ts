import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";

export function menuTap(args: EventData) {
    const btn = args.object as View;

    const bar1 = btn.getViewById('bar1') as View;
    const bar2 = btn.getViewById('bar2') as View;
    const bar3 = btn.getViewById('bar3') as View;

    toggleClassOnView(bar1, 'menu-bar-on', 'menu-bar-off');
    toggleClassOnView(bar2, 'menu-bar-on', 'menu-bar-off');
    toggleClassOnView(bar3, 'menu-bar-on', 'menu-bar-off');
}

function toggleClassOnView(view: View, className1: string, className2: string) {
    var newClassName = view.className.trim();
    if (view.className.indexOf(className1) >= 0) {
        newClassName = view.className.replace(className1, '');
        newClassName = newClassName.trim() + ' ' + className2;
    } else {
        newClassName = view.className.replace(className2, '');
        newClassName = newClassName.trim() + ' ' + className1;
    }

    view.className = newClassName;
}
