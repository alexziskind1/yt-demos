import { Observable } from "tns-core-modules/data/observable";
import { RadDataForm } from "nativescript-ui-dataform";

export class HelloWorldModel extends Observable {


    constructor(private dataForm: RadDataForm) {
        super();

    }

    public formModel = {
        title: 'Hello World'
    };

    public onTap() {
        const newFormModel = { ...this.formModel, title: 'Hi there' };
        this.set('formModel', newFormModel);

        this.dataForm.reload();
    }


}
