import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let ZeroToInfinitPipe = class ZeroToInfinitPipe {
    transform(value, ...args) {
        if (value == 0) {
            return "No Limit";
        }
        else {
            return value;
        }
    }
};
ZeroToInfinitPipe = __decorate([
    Pipe({
        name: 'zeroToInfinit'
    })
], ZeroToInfinitPipe);
export { ZeroToInfinitPipe };
//# sourceMappingURL=zero-to-infinit.pipe.js.map