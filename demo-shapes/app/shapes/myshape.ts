import { View, isIOS, isAndroid } from "tns-core-modules/ui/core/view";

export class MyShape extends View {

    public createNativeView() {

        let view = null;

        if (isIOS) {
            view = UIView.new();
        } else {
            view = new android.view.View(this._context);
        }

        return view;
    }
}
