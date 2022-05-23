export class Deduplicate {
    constructor() {
        this.deduplicate = { s: {} };
        this.options = { max: 999, age: 1000 * 9 };
    }

    check(id) {
        if (!this.deduplicate.s[id]) {
            return false;
        }
        return this.track(id);
    }

    track(id) {
        this.deduplicate.s[id] = +new Date();
        if (!this.deduplicate.to) {
            this.deduplicate.to = window.setTimeout(function () {
                Object.keys(this.deduplicate.s).forEach(function (time, id) {
                    if (this.options.age > +new Date() - time) {
                        return;
                    }
                    delete this.deduplicate.s[id];
                });
                this.deduplicate.to = null;
            }, this.options.age);
        }
        return this.deduplicate;
    }
}
