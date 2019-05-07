
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { RadDataForm } from 'nativescript-ui-dataform';


export function navigatingTo(args: EventData) {

    const page = <Page>args.object;

    const dataForm = page.getViewById('myDataForm') as RadDataForm;

    page.bindingContext = new HelloWorldModel(dataForm);
}
