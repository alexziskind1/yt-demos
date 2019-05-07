import { Observable } from "tns-core-modules/data/observable";

export class HelloWorldModel extends Observable {

    onTap() {
        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: JSON.stringify({
                something: 'something'
            })
        }).then(res => res.json())
            .then(data => {
                console.log('data', data);
            });
    }
}
