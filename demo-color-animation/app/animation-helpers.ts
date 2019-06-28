export interface AnimationRange {
    from: number;
    to: number;
}

export interface AnimationColorRange {
    range_R: AnimationRange;
    range_G: AnimationRange;
    range_B: AnimationRange;
}

export interface JsAnimationDefinition {
    getRange: () => AnimationRange;
    curve(progress: number): number;
    step(deltaResult: number): void;
    //condition: () => boolean;
}

export interface JsColorAnimationDefinition {
    getRange: () => AnimationColorRange;
    curve(progress: number): number;
    step(r: number, g: number, b: number): void;
}


export function amountFromTo(range: AnimationRange) {
    return (t: number) => {
        const ret = range.from + t * (range.to - range.from);
        return ret;
    };
}

export function animate(
    duration: number,
    defs: JsAnimationDefinition[]) {

    return new Promise((resolve) => {
        const start = new Date();

        const timerId = setInterval(() => {
            const timePassed = new Date().valueOf() - start.valueOf();

            let progress = timePassed / duration;
            if (progress > 1) progress = 1;

            for (let i = 0; i < defs.length; i++) {
                const def = defs[i];

                const delta = def.curve(progress);
                const v = amountFromTo(def.getRange())(delta);

                def.step(v);
            }

            if (progress === 1) {
                clearInterval(timerId);
                resolve();
            }
        }, 17);
    });
}

export function animateColor(
    duration: number,
    defs: JsColorAnimationDefinition[]) {

    return new Promise((resolve) => {
        const start = new Date();

        const timerId = setInterval(() => {
            const timePassed = new Date().valueOf() - start.valueOf();

            let progress = timePassed / duration;
            if (progress > 1) progress = 1;

            for (let i = 0; i < defs.length; i++) {
                const def = defs[i];

                const delta = def.curve(progress);
                const range = def.getRange();
                const r = amountFromTo(range.range_R)(delta);
                const g = amountFromTo(range.range_G)(delta);
                const b = amountFromTo(range.range_B)(delta);

                def.step(r, g, b);
            }

            if (progress === 1) {
                clearInterval(timerId);
                resolve();
            }
        }, 17);
    });
}
