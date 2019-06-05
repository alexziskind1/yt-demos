import { EventData } from "tns-core-modules/ui/page/page";
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { MyShape } from "./shapes/myshape";

export function onLoaded(args: EventData) {
    const layout = <StackLayout>args.object;

    const shape = new MyShape();

    shape.width = 100;
    shape.height = 100;
    shape.backgroundColor = 'blue';

    layout.addChild(shape);
}
