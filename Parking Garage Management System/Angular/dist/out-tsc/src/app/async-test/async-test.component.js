import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AsyncTestComponent = class AsyncTestComponent {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
        this.vehicles = [];
    }
    ngOnInit() {
    }
    testAsyncCheckIn() {
        this.vehicleService.CheckInAsyc().subscribe({ next: (vehicles) => this.vehicles = vehicles, error: (err) => alert(err) });
    }
};
AsyncTestComponent = __decorate([
    Component({
        selector: 'app-async-test',
        templateUrl: './async-test.component.html',
        styleUrls: ['./async-test.component.css']
    })
], AsyncTestComponent);
export { AsyncTestComponent };
//# sourceMappingURL=async-test.component.js.map