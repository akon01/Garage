function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container>*:not(.circle-link),\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <img width=\"40\" alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" />\n  <button mat-raised-button routerLink=\"/CheckIn\" style=\"color: black;\"> Vehicle Check-In </button> &nbsp;\n  <button mat-raised-button routerLink=\"/CheckOut\" style=\"color: black;\"> Vehicle Check-Out </button>&nbsp;\n  <button mat-raised-button routerLink=\"/GarageView\" style=\"color: black;\"> Garage View </button>&nbsp;\n  <button mat-raised-button routerLink=\"/CheckInAsyncTest\" style=\"color: black;\"> Async Check-In Test </button>\n\n</div>\n\n<router-outlet></router-outlet>\n\n<div class=\"content\" role=\"main\">\n\n  <!-- Footer -->\n  <footer>\n    All Rights Reserved To Sagi Ofir {{date | date:\"dd/MM/yyyy\"}}\n  </footer>\n\n  <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\"\n    viewBox=\"0 0 2611.084 485.677\">\n    <path id=\"Path_39\" data-name=\"Path 39\"\n      d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\"\n      transform=\"translate(142.69 -634.312)\" fill=\"#eee\" />\n  </svg>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/async-test/async-test.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/async-test/async-test.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAsyncTestAsyncTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<button style=\"text-align: center;\" mat-raised-button (click)=\"testAsyncCheckIn()\">Click Me To Test Async Check-In Of 5\n  Vehicles </button>\n<div *ngIf=\"vehicles.length > 0\">\n  <li>\n    <ul *ngFor=\"let vehicle of vehicles\">\n      <app-vehicle-view [vehicleLicenseId]=\"vehicle.LicensePlateID\"></app-vehicle-view>\n    </ul>\n  </li>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/check-in/check-in.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check-in/check-in.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckInCheckInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"checkInForm\" style=\"text-align: center;\">\n  <mat-form-field appearance=\"standard\">\n    <mat-label>\n      Name\n    </mat-label>\n    <input [(ngModel)]=\"vehicle.Name\" matInput id=\"name\" type=\"text\" formControlName=\"name\"\n      placeholder=\"Simple placeholder\">\n  </mat-form-field><br>\n\n\n  <mat-form-field appearance=\"standard\">\n    <mat-label>\n      License Plate ID\n    </mat-label>\n    <input [(ngModel)]=\"vehicle.LicensePlateID\" matInput id=\"LicensePlateId\" type=\"number\"\n      formControlName=\"LicensePlateId\">\n  </mat-form-field><br>\n\n\n  <mat-form-field appearance=\"standard\">\n    <mat-label>\n      Phone Number\n    </mat-label>\n    <input [(ngModel)]=\"vehicle.PhoneNumber\" matInput id=\"PhoneNumber\" type=\"tel\" formControlName=\"PhoneNumber\">\n  </mat-form-field><br>\n\n\n  <mat-form-field appearance=\"standard\">\n    <mat-label>\n      Vehicle Type\n    </mat-label>\n    <mat-select formControlName=\"VehicleType\">\n      <mat-option *ngFor=\"let vType of vehicleTypes\" [value]=\"vType\">{{vType}}</mat-option>\n    </mat-select>\n  </mat-form-field><br>\n\n\n  <mat-form-field appearance=\"standard\">\n    <mat-label>\n      Ticket Type\n    </mat-label>\n    <mat-select #ticketTypeControl formControlName=\"TicketType\">\n      <mat-option *ngFor=\"let ticket of ticketTypes\" [value]=\"ticket\">{{ticket}} </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <br>\n  <button *ngIf=\"ticketTypeControl.value\" mat-raised-button type=\"button\" (click)=\"openTicketView()\">View\n    Details</button>\n\n  <br *ngIf=\"ticketTypeControl.value\">\n\n\n  <mat-form-field appearance=\"standard\">\n    <mat-label>\n      Height\n    </mat-label>\n    <input [(ngModel)]=\"vehicle.Height\" matInput id=\"Height\" type=\"number\" formControlName=\"Height\">\n  </mat-form-field><br>\n\n\n  <mat-form-field appearance=\"standard\">\n    <mat-label>\n      Width\n    </mat-label>\n    <input [(ngModel)]=\"vehicle.Width\" matInput id=\"Width\" type=\"number\" formControlName=\"Width\">\n  </mat-form-field><br>\n\n\n  <mat-form-field appearance=\"standard\">\n    <mat-label for=\"Length\">\n      Length\n    </mat-label>\n    <input [(ngModel)]=\"vehicle.Length\" matInput id=\"Length\" type=\"number\" formControlName=\"Length\">\n  </mat-form-field><br>\n\n  <button mat-raised-button class=\"button\" type=\"submit\" (click)=\"onSubmit()\">Check In</button>\n\n\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/check-out/check-out.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check-out/check-out.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckOutCheckOutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"checkOutForm\" style=\"text-align: center;\">\n  <mat-form-field appearance=\"standard\">\n    <mat-label>\n      Parked Car License Plate ID\n    </mat-label>\n    <input matInput id=\"plateId\" type=\"number\" formControlName=\"plateId\" placeholder=\"123456789\">\n  </mat-form-field>\n  <button mat-raised-button class=\"button\" (click)=\"onSubmit()\">View Car Details </button>\n</form>\n<br>\n<!-- <app-vehicle-view *ngIf=\"selectedVehicle\" [vehicleLicenseId]=\"selectedVehicle.LicensePlateID\"></app-vehicle-view> -->\n<!-- <button mat-raised-button *ngIf=\"selectedVehicle\" type=\"button\" (click)=\"checkOut()\">Confirm Check-Out</button> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/garage-view/garage-view.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/garage-view/garage-view.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGarageViewGarageViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <h3 style=\"text-align: center;\">\n    Filter By:\n  </h3>\n  <form [formGroup]=\"filterForm\" style=\"text-align: center;\">\n    <mat-form-field>\n      <mat-select formControlName=\"FilterSelect\" id=\"filterSelect\" (selectionChange)=\"onFilterChange()\">\n        <mat-option selected value=\"All\">\n          View All Lots\n        </mat-option>\n        <mat-option value=\"Type\">\n          View Lots By Ticket Type\n        </mat-option>\n        <mat-option value=\"Empty\">\n          View Empty Lots\n        </mat-option>\n        <mat-option value=\"Full\">\n          View Full Lots\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field *ngIf=\"filterType == 'Type'\">\n      <div>\n        <mat-select formControlName=\"TypeSelect\" id=\"TypeSelect\" (selectionChange)=\"onFilterChange()\">\n          <mat-option *ngFor=\"let type of ticketTypeKeys\" [value]=\"type\">\n            {{type}}\n          </mat-option>\n        </mat-select>\n      </div>\n    </mat-form-field>\n  </form>\n</div>\n\n\n<div *ngIf=\"lots.length > 0\">\n  <ul>\n    <li *ngFor=\"let lot of lots\">Lot number: {{lot.number}}\n      <div *ngIf=\"lot.vehicle\">\n        <app-vehicle-view [vehicleLicenseId]=\"lot.vehicle.LicensePlateID\"></app-vehicle-view>\n\n      </div>\n      <div *ngIf=\"!lot.vehicle\">\n        No Vehicle Parked.\n      </div>\n    </li>\n  </ul>\n</div>\n<div *ngIf=\"lots.length == 0\">\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainPageMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img style=\"text-align: center;\" src=\"https://hiddenarchitecture.net/wp-content/uploads/2016/11/Untitled-1-copy-1.jpg\"\n  style=\"height: 500px;width: 500px;\">\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ticket-view/ticket-view.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ticket-view/ticket-view.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTicketViewTicketViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card *ngIf=\"ticket\">\n  <mat-card-title>{{ticket.Type |enumConverter:\"Ticket\"}} Ticket\n  </mat-card-title>\n  <mat-card-content>\n    <div>Lots: {{ticket.Lots[0]}} - {{ticket.Lots[ticket.Lots.length-1]}} </div><br>\n    <div>Allowed Dimentions:\n      <mat-card>\n        <mat-card-content>\n          Height: {{ticket.Dimentions.Height | zeroToInfinit}} cm <br>\n          Width: {{ticket.Dimentions.Width | zeroToInfinit}} cm<br>\n          Length: {{ticket.Dimentions.Length | zeroToInfinit}} cm<br>\n        </mat-card-content>\n      </mat-card>\n    </div><br>\n    <div>Allowed Vehicle Classes:\n      <mat-card>\n        <mat-card-content>\n          <ul>\n            <li *ngFor=\"let class of ticket.VehicleClasses\">\n              {{class |enumConverter:\"VehicleClass\"}}</li>\n          </ul>\n        </mat-card-content>\n      </mat-card>\n    </div><br>\n    <div>Time Limit(Hours): {{ticket.TimeLimit | zeroToInfinit}} </div><br>\n    <div>Cost: {{ticket.Cost}} $\n      <div style=\"color: red;\" *ngIf=\"ticketToUpgradeFrom\">\n        Previus Ticket Cost: {{ticketToUpgradeFrom.Cost}} $<br>\n        Difrrence: {{ticket.Cost-ticketToUpgradeFrom.Cost}} $\n      </div>\n    </div><br>\n  </mat-card-content>\n\n  <mat-card-actions>\n    <button *ngIf=\"isForUpgrade\" mat-raised-button type=\"button\" (click)=\"getNextValueTicket()\">Upgrade Ticket </button>\n    <button *ngIf=\"ticketToUpgradeFrom\" mat-raised-button type=\"button\" (click)=\"confirm()\">Check-In Using This\n      Ticket</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <div style=\"color: red;\" *ngIf=\"isForUpgrade\">\n      {{ errorString }}\n    </div>\n  </mat-card-footer>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-view/vehicle-view.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-view/vehicle-view.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVehicleViewVehicleViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card *ngIf=\"vehicle != null\">\n  <mat-card-title mat-dialog-title>{{vehicle.Name}} - {{vehicle.LicensePlateID}} </mat-card-title>\n  <mat-dialog-content>\n    <mat-card-content>\n      <p>Name: {{vehicle.Name}}</p>\n\n\n      <p>License Plate ID: {{vehicle.LicensePlateID}}</p>\n\n      <p>Phone: {{vehicle.PhoneNumber}}</p>\n\n      <p>Vehicle Type: {{vehicle.VehicleType |enumConverter:\"VehicleClass\"}}</p>\n\n      <p>Checked In With {{vehicle.TicketType | enumConverter:\"Ticket\"}} Ticket</p>\n\n      <p>Dimensions (in Cm):<br>\n        Height: {{vehicle.Height}}<br>\n        Width: {{vehicle.Width}}<br>\n        Length: {{vehicle.Length}}</p>\n\n      <p>Parked At Lot Number: {{vehicle.LotNumber}}</p>\n    </mat-card-content>\n  </mat-dialog-content>\n  <mat-dialog-actions *ngIf=\"data.vehicleId\">\n    <button mat-raised-button type=\"button\" (click)=\"checkOut()\">Check-Out</button>\n  </mat-dialog-actions>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./check-in/check-in.component */
    "./src/app/check-in/check-in.component.ts");
    /* harmony import */


    var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./check-out/check-out.component */
    "./src/app/check-out/check-out.component.ts");
    /* harmony import */


    var _garage_view_garage_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./garage-view/garage-view.component */
    "./src/app/garage-view/garage-view.component.ts");
    /* harmony import */


    var _async_test_async_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./async-test/async-test.component */
    "./src/app/async-test/async-test.component.ts");

    var routes = [{
      path: "",
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]
    }, {
      path: "CheckIn",
      component: _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_4__["CheckInComponent"]
    }, {
      path: "CheckOut",
      component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_5__["CheckOutComponent"]
    }, {
      path: "GarageView",
      component: _garage_view_garage_view_component__WEBPACK_IMPORTED_MODULE_6__["GarageViewComponent"]
    }, {
      path: "CheckInAsyncTest",
      component: _async_test_async_test_component__WEBPACK_IMPORTED_MODULE_7__["AsyncTestComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'ParkingGarage';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.date = new Date();
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./check-in/check-in.component */
    "./src/app/check-in/check-in.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/ */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _vehicle_view_vehicle_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./vehicle-view/vehicle-view.component */
    "./src/app/vehicle-view/vehicle-view.component.ts");
    /* harmony import */


    var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./check-out/check-out.component */
    "./src/app/check-out/check-out.component.ts");
    /* harmony import */


    var _ticket_view_ticket_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ticket-view/ticket-view.component */
    "./src/app/ticket-view/ticket-view.component.ts");
    /* harmony import */


    var _garage_view_garage_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./garage-view/garage-view.component */
    "./src/app/garage-view/garage-view.component.ts");
    /* harmony import */


    var _enum_converter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./enum-converter.pipe */
    "./src/app/enum-converter.pipe.ts");
    /* harmony import */


    var _zero_to_infinit_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./zero-to-infinit.pipe */
    "./src/app/zero-to-infinit.pipe.ts");
    /* harmony import */


    var _async_test_async_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./async-test/async-test.component */
    "./src/app/async-test/async-test.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"], _check_in_check_in_component__WEBPACK_IMPORTED_MODULE_6__["CheckInComponent"], _vehicle_view_vehicle_view_component__WEBPACK_IMPORTED_MODULE_11__["VehicleViewComponent"], _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_12__["CheckOutComponent"], _ticket_view_ticket_view_component__WEBPACK_IMPORTED_MODULE_13__["TicketViewComponent"], _garage_view_garage_view_component__WEBPACK_IMPORTED_MODULE_14__["GarageViewComponent"], _enum_converter_pipe__WEBPACK_IMPORTED_MODULE_15__["EnumConverterPipe"], _zero_to_infinit_pipe__WEBPACK_IMPORTED_MODULE_16__["ZeroToInfinitPipe"], _async_test_async_test_component__WEBPACK_IMPORTED_MODULE_17__["AsyncTestComponent"]],
      entryComponents: [_ticket_view_ticket_view_component__WEBPACK_IMPORTED_MODULE_13__["TicketViewComponent"], _vehicle_view_vehicle_view_component__WEBPACK_IMPORTED_MODULE_11__["VehicleViewComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"], _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
      providers: [{
        provide: _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"],
        useValue: {}
      }, {
        provide: _angular_material___WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"],
        useValue: []
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/async-test/async-test.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/async-test/async-test.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAsyncTestAsyncTestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FzeW5jLXRlc3QvYXN5bmMtdGVzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/async-test/async-test.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/async-test/async-test.component.ts ***!
    \****************************************************/

  /*! exports provided: AsyncTestComponent */

  /***/
  function srcAppAsyncTestAsyncTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsyncTestComponent", function () {
      return AsyncTestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _vehicles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../vehicles.service */
    "./src/app/vehicles.service.ts");

    var AsyncTestComponent =
    /*#__PURE__*/
    function () {
      function AsyncTestComponent(vehicleService) {
        _classCallCheck(this, AsyncTestComponent);

        this.vehicleService = vehicleService;
        this.vehicles = [];
      }

      _createClass(AsyncTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "testAsyncCheckIn",
        value: function testAsyncCheckIn() {
          var _this = this;

          this.vehicleService.CheckInAsyc().subscribe({
            next: function next(vehicles) {
              return _this.vehicles = vehicles;
            },
            error: function error(err) {
              return alert(err);
            }
          });
        }
      }]);

      return AsyncTestComponent;
    }();

    AsyncTestComponent.ctorParameters = function () {
      return [{
        type: _vehicles_service__WEBPACK_IMPORTED_MODULE_2__["VehiclesService"]
      }];
    };

    AsyncTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-async-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./async-test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/async-test/async-test.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./async-test.component.css */
      "./src/app/async-test/async-test.component.css")).default]
    })], AsyncTestComponent);
    /***/
  },

  /***/
  "./src/app/check-in/check-in.component.css":
  /*!*************************************************!*\
    !*** ./src/app/check-in/check-in.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckInCheckInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrLWluL2NoZWNrLWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/check-in/check-in.component.ts":
  /*!************************************************!*\
    !*** ./src/app/check-in/check-in.component.ts ***!
    \************************************************/

  /*! exports provided: CheckInComponent */

  /***/
  function srcAppCheckInCheckInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckInComponent", function () {
      return CheckInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _vehicles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../vehicles.service */
    "./src/app/vehicles.service.ts");
    /* harmony import */


    var src_models_Vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/models/Vehicle */
    "./src/models/Vehicle.ts");
    /* harmony import */


    var src_models_Ticket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/Ticket */
    "./src/models/Ticket.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _ticket_view_ticket_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ticket-view/ticket-view.component */
    "./src/app/ticket-view/ticket-view.component.ts");
    /* harmony import */


    var src_models_ErrorStrings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/models/ErrorStrings */
    "./src/models/ErrorStrings.ts");

    var TicketVehicleClassError = "Ticket Does Not Cover Vehicle";
    var TicketVehicleDimentionsError = "Vehicle Dimentions Are Too Big For This Ticket";
    var VehhicleExsistsError = "Vehicle Already In Garage";
    var TicketLotFullError = "Ticket Lots Are Full";

    var CheckInComponent =
    /*#__PURE__*/
    function () {
      function CheckInComponent(formBuilder, vehiclesService, dialog) {
        _classCallCheck(this, CheckInComponent);

        this.formBuilder = formBuilder;
        this.vehiclesService = vehiclesService;
        this.dialog = dialog;
        this.vehicle = new src_models_Vehicle__WEBPACK_IMPORTED_MODULE_4__["Vehicle"]();
        this.vehicleTypes = [];
        this.ticketTypes = [];
      }

      _createClass(CheckInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          //Get Strings of the available types of tickets and vehicles
          this.vehiclesService.getTicketTypes().subscribe(function (types) {
            var _this2$ticketTypes;

            (_this2$ticketTypes = _this2.ticketTypes).push.apply(_this2$ticketTypes, _toConsumableArray(types));
          });
          this.vehiclesService.getVehicleTypes().subscribe(function (types) {
            var _this2$vehicleTypes;

            (_this2$vehicleTypes = _this2.vehicleTypes).push.apply(_this2$vehicleTypes, _toConsumableArray(types));
          });
          this.checkInForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            LicensePlateId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PhoneNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"]],
            VehicleType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            TicketType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Height: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Width: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Length: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
        /**
         * Opens a dialog which lets the user upgrade his ticket
         * @param ticketType selected ticket to upgrade from
         * @param errorString Error message to show why you need to upgrade your ticket
         */

      }, {
        key: "openUpgradeDialog",
        value: function openUpgradeDialog(ticketType, errorString) {
          var _this3 = this;

          //opens the upgrade dialog
          var dialogRef = this.dialog.open(_ticket_view_ticket_view_component__WEBPACK_IMPORTED_MODULE_7__["TicketViewComponent"], {
            data: {
              ticketType: ticketType,
              isForUpgrade: true,
              vehicleToCheckIn: this.vehicle,
              errorString: errorString
            }
          }); //if the dialog resulted in a confirm on the upgrade pass the upgraded ticket to confirm Check-In.

          dialogRef.afterClosed().subscribe(function (result) {
            //if the chosen ticket type is one of the available ticket types.
            if (result in src_models_Ticket__WEBPACK_IMPORTED_MODULE_5__["TicketType"]) {
              var confirmDialogRef = _this3.dialog.open(_ticket_view_ticket_view_component__WEBPACK_IMPORTED_MODULE_7__["TicketViewComponent"], {
                data: {
                  ticketType: result,
                  ticketTypeToUpgradeFrom: ticketType,
                  isForUpgrade: false,
                  vehicleToCheckIn: _this3.vehicle
                }
              }); //if the confirm dialog ended with confrim, check-in the vehicle


              confirmDialogRef.afterClosed().subscribe(function (confirmResult) {
                if (confirmResult == true) {
                  _this3.checkInForm.get('TicketType').setValue(_this3.ticketTypes[result]);

                  _this3.onSubmit();
                }
              });
            }
          });
        }
        /**
         * Opens a dialog which shows the selected ticket info
         */

      }, {
        key: "openTicketView",
        value: function openTicketView() {
          var ticketType = src_models_Ticket__WEBPACK_IMPORTED_MODULE_5__["TicketType"][this.checkInForm.get('TicketType').value];
          var dialogRef = this.dialog.open(_ticket_view_ticket_view_component__WEBPACK_IMPORTED_MODULE_7__["TicketViewComponent"], {
            data: {
              ticketType: ticketType,
              isForUpgrade: false,
              vehicleToCheckIn: this.vehicle
            }
          });
        }
        /**
         * Checks-in the vehicle, if can't will show an upgrade dialog
         */

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          this.vehicle.LotNumber = 0;
          this.vehicle.VehicleType = src_models_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleType"][this.checkInForm.get('VehicleType').value];
          this.vehicle.TicketType = src_models_Ticket__WEBPACK_IMPORTED_MODULE_5__["TicketType"][this.checkInForm.get('TicketType').value];
          this.vehiclesService.checkInVehicle(this.vehicle).subscribe(function (vehicle) {
            alert("Vehicle ".concat(vehicle.Name, " - ").concat(vehicle.LicensePlateID, " was created successfully"));
          }, function (err) {
            if (err.error.message == src_models_ErrorStrings__WEBPACK_IMPORTED_MODULE_8__["ErrorStrings"].VehhicleExsistsError) {
              alert(src_models_ErrorStrings__WEBPACK_IMPORTED_MODULE_8__["ErrorStrings"].VehhicleExsistsError);
            } else {
              _this4.openUpgradeDialog(_this4.vehicle.TicketType, err.error.Message);
            }
          }); // this.vehiclesService.getTicketInfo(TicketType.VALUE).subscribe(ticket => {
          //   console.log(ticket);
          // })
        }
      }]);

      return CheckInComponent;
    }();

    CheckInComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _vehicles_service__WEBPACK_IMPORTED_MODULE_3__["VehiclesService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    CheckInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-check-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./check-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/check-in/check-in.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./check-in.component.css */
      "./src/app/check-in/check-in.component.css")).default]
    })], CheckInComponent);
    /***/
  },

  /***/
  "./src/app/check-out/check-out.component.css":
  /*!***************************************************!*\
    !*** ./src/app/check-out/check-out.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckOutCheckOutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrLW91dC9jaGVjay1vdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/check-out/check-out.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/check-out/check-out.component.ts ***!
    \**************************************************/

  /*! exports provided: CheckOutComponent */

  /***/
  function srcAppCheckOutCheckOutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function () {
      return CheckOutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _vehicles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../vehicles.service */
    "./src/app/vehicles.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _vehicle_view_vehicle_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../vehicle-view/vehicle-view.component */
    "./src/app/vehicle-view/vehicle-view.component.ts");

    var CheckOutComponent =
    /*#__PURE__*/
    function () {
      function CheckOutComponent(vehicleService, formBuilder, dialog) {
        _classCallCheck(this, CheckOutComponent);

        this.vehicleService = vehicleService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
      }

      _createClass(CheckOutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkOutForm = this.formBuilder.group({
            plateId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
        /**
         * Checks out the selected vehicle
         */

      }, {
        key: "checkOut",
        value: function checkOut() {
          var _this5 = this;

          this.vehicleService.checkOutVehicle(this.selectedVehicle.LicensePlateID).subscribe(function (answer) {
            alert("Vehicle ".concat(_this5.selectedVehicle.LicensePlateID, " was checked out."));
          });
        }
        /**
         * Opens a dialog with the selected vehicle to confirm the check-out.
         */

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          var plateId = this.checkOutForm.value.plateId;
          this.vehicleService.getVehicleByLicenseNumber(plateId).subscribe({
            next: function next(vehicle) {
              _this6.selectedVehicle = vehicle;

              _this6.dialog.open(_vehicle_view_vehicle_view_component__WEBPACK_IMPORTED_MODULE_5__["VehicleViewComponent"], {
                data: {
                  vehicleId: vehicle.LicensePlateID
                }
              });
            },
            error: function error(err) {
              return alert("No Vehicle Found With License Plate ".concat(plateId));
            }
          });
        }
      }]);

      return CheckOutComponent;
    }();

    CheckOutComponent.ctorParameters = function () {
      return [{
        type: _vehicles_service__WEBPACK_IMPORTED_MODULE_2__["VehiclesService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-check-out',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./check-out.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/check-out/check-out.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./check-out.component.css */
      "./src/app/check-out/check-out.component.css")).default]
    })], CheckOutComponent);
    /***/
  },

  /***/
  "./src/app/enum-converter.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/enum-converter.pipe.ts ***!
    \****************************************/

  /*! exports provided: EnumConverterPipe */

  /***/
  function srcAppEnumConverterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnumConverterPipe", function () {
      return EnumConverterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_models_Ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/Ticket */
    "./src/models/Ticket.ts");
    /* harmony import */


    var src_models_Vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/Vehicle */
    "./src/models/Vehicle.ts");

    var EnumConverterPipe =
    /*#__PURE__*/

    /**
     * Converts an Enum value to a string.
     */
    function () {
      function EnumConverterPipe() {
        _classCallCheck(this, EnumConverterPipe);
      }

      _createClass(EnumConverterPipe, [{
        key: "transform",
        value: function transform(value, args) {
          console.log(args);

          if (args == "Ticket") {
            return src_models_Ticket__WEBPACK_IMPORTED_MODULE_2__["TicketType"][value];
          }

          if (args == "VehicleClass") return src_models_Vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleClass"][value];
        }
      }]);

      return EnumConverterPipe;
    }();

    EnumConverterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'enumConverter'
    })
    /**
     * Converts an Enum value to a string.
     */
    ], EnumConverterPipe);
    /***/
  },

  /***/
  "./src/app/garage-view/garage-view.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/garage-view/garage-view.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGarageViewGarageViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhcmFnZS12aWV3L2dhcmFnZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/garage-view/garage-view.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/garage-view/garage-view.component.ts ***!
    \******************************************************/

  /*! exports provided: GarageViewComponent */

  /***/
  function srcAppGarageViewGarageViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GarageViewComponent", function () {
      return GarageViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_models_Ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/models/Ticket */
    "./src/models/Ticket.ts");
    /* harmony import */


    var _vehicles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../vehicles.service */
    "./src/app/vehicles.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var GarageViewComponent =
    /*#__PURE__*/
    function () {
      function GarageViewComponent(vehicleService, formBuilder) {
        _classCallCheck(this, GarageViewComponent);

        this.vehicleService = vehicleService;
        this.formBuilder = formBuilder;
        this.tickets = [];
        this.vehicles = [];
        this.lots = [];
        this.ticketTypeKeys = [];
      }

      _createClass(GarageViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filterForm = this.formBuilder.group({
            TypeSelect: [''],
            FilterSelect: ['']
          }); // defaluts

          this.filterForm.get('FilterSelect').setValue('All');
          this.filterType = 'All'; // get enum keys

          this.ticketTypeKeys = Object.keys(src_models_Ticket__WEBPACK_IMPORTED_MODULE_2__["TicketType"]).filter(function (key) {
            return !isNaN(Number(src_models_Ticket__WEBPACK_IMPORTED_MODULE_2__["TicketType"][key]));
          });
          this.getTickets(this.ticketTypeKeys, true, true);
        }
        /**
         * Gets all currnet parked vehicles
         * @param isMakeLots set to true if you want to make the lots after getting the vehicles
         */

      }, {
        key: "getVehicles",
        value: function getVehicles(isMakeLots) {
          var _this7 = this;

          this.vehicles = [];
          this.vehicleService.getVehicles().subscribe(function (vehicles) {
            return _this7.vehicles = vehicles;
          }, null, function () {
            if (isMakeLots) {
              _this7.makeLots();
            }
          });
        }
        /**
         * Gets all available tickets, can also get the parked vehicles and make current lots.
         * @param ticketTypeKeys all the Tickets types enum keys as strings.
         * @param isGetVehicles set to true if you want to get all vehicles after getting the tickets
         * @param isMakeLots set to true if you wnat to make the lots after getting the vehicles
         */

      }, {
        key: "getTickets",
        value: function getTickets(ticketTypeKeys, isGetVehicles, isMakeLots) {
          var _this8 = this;

          this.tickets = [];

          var _loop = function _loop(o) {
            //gets the enum value by key string.
            var key = ticketTypeKeys[o];
            var typeNumber = src_models_Ticket__WEBPACK_IMPORTED_MODULE_2__["TicketType"][key];

            _this8.vehicleService.getTicketInfo(typeNumber).subscribe(function (ticket) {
              _this8.tickets.push(ticket);
            }, function (err) {
              alert("No Ticket was found of type ".concat(ticketTypeKeys[o]));
            }, function () {
              if (o == ticketTypeKeys.length - 1 && isGetVehicles) {
                _this8.getVehicles(isMakeLots);
              }
            });
          };

          for (var o = 0; o < ticketTypeKeys.length; o++) {
            _loop(o);
          }
        }
        /**
         * Make current lots,full and empty,can apply filter by selecting in the view.
         */

      }, {
        key: "makeLots",
        value: function makeLots() {
          var _this9 = this;

          this.lots = [];
          this.tickets.forEach(function (ticket) {
            ticket.Lots.forEach(function (lotNumber) {
              var vehicle = _this9.vehicles.find(function (vehicle) {
                return vehicle.LotNumber == lotNumber;
              });

              _this9.lots.push({
                number: lotNumber,
                ticket: ticket,
                vehicle: vehicle
              });
            });
          });

          switch (this.filterForm.get('FilterSelect').value) {
            case 'All':
              break;

            case 'Type':
              if (this.filterForm.get('TypeSelect').value == '') {
                this.filterForm.get('TypeSelect').setValue(this.ticketTypeKeys[0]);
              }

              this.onFilterType();
              break;

            case 'Empty':
              this.onFilterEmpty();
              break;

            case 'Full':
              this.onFilterFull();
              break;

            default:
              break;
          }

          this.lots.sort(function (a, b) {
            if (a.number > b.number) {
              return 1;
            } else if (a.number < b.number) {
              return -1;
            } else return 0;
          });
        }
        /**
         * Filters the los by a specific ticket type
         */

      }, {
        key: "onFilterType",
        value: function onFilterType() {
          var _this10 = this;

          this.lots = this.lots.filter(function (lot) {
            return lot.ticket.Type == src_models_Ticket__WEBPACK_IMPORTED_MODULE_2__["TicketType"][_this10.filterForm.get('TypeSelect').value];
          });
        }
        /**
         * Filters the lots to show only empty ones
         */

      }, {
        key: "onFilterEmpty",
        value: function onFilterEmpty() {
          this.lots = this.lots.filter(function (lot) {
            return !lot.vehicle;
          });
        }
        /**
         * Filters the lots to show only full ones
         */

      }, {
        key: "onFilterFull",
        value: function onFilterFull() {
          this.lots = this.lots.filter(function (lot) {
            return lot.vehicle;
          });
        }
        /**
         * Makes new lots with a diffrent filter.
         */

      }, {
        key: "onFilterChange",
        value: function onFilterChange() {
          this.filterType = this.filterForm.get('FilterSelect').value;
          this.getTickets(this.ticketTypeKeys, true, true);
        }
      }]);

      return GarageViewComponent;
    }();

    GarageViewComponent.ctorParameters = function () {
      return [{
        type: _vehicles_service__WEBPACK_IMPORTED_MODULE_3__["VehiclesService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    GarageViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-garage-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./garage-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/garage-view/garage-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./garage-view.component.css */
      "./src/app/garage-view/garage-view.component.css")).default]
    })], GarageViewComponent);
    /***/
  },

  /***/
  "./src/app/main-page/main-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/main-page/main-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainPageMainPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main-page/main-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-page/main-page.component.ts ***!
    \**************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainPageComponent =
    /*#__PURE__*/
    function () {
      function MainPageComponent() {
        _classCallCheck(this, MainPageComponent);
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainPageComponent;
    }();

    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-page.component.css */
      "./src/app/main-page/main-page.component.css")).default]
    })], MainPageComponent);
    /***/
  },

  /***/
  "./src/app/ticket-view/ticket-view.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/ticket-view/ticket-view.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTicketViewTicketViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC12aWV3L3RpY2tldC12aWV3LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ticket-view/ticket-view.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ticket-view/ticket-view.component.ts ***!
    \******************************************************/

  /*! exports provided: TicketViewComponent */

  /***/
  function srcAppTicketViewTicketViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketViewComponent", function () {
      return TicketViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _vehicles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../vehicles.service */
    "./src/app/vehicles.service.ts");
    /* harmony import */


    var src_models_Ticket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/Ticket */
    "./src/models/Ticket.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var TicketViewComponent =
    /*#__PURE__*/
    function () {
      function TicketViewComponent(dialogRef, vehicleService, data) {
        _classCallCheck(this, TicketViewComponent);

        this.dialogRef = dialogRef;
        this.vehicleService = vehicleService;
        this.isForUpgrade = false;

        if (data) {
          this.ticketType = data.ticketType;
          this.isForUpgrade = data.isForUpgrade;
          this.vehicleToCheckIn = data.vehicleToCheckIn;
          this.errorString = data.errorString;
          this.ticketTypeToUpgradeFrom = data.ticketTypeToUpgradeFrom;
        }
      }
      /**
       * Checks if the vehicle is legal for the current ticket, if not tries with the next value.
       */


      _createClass(TicketViewComponent, [{
        key: "getNextValueTicket",
        value: function getNextValueTicket() {
          var _this11 = this;

          var numberOfEnumKeys = Object.keys(src_models_Ticket__WEBPACK_IMPORTED_MODULE_3__["TicketType"]).length / 2 - 1; //if the enum value is bigger than coded values

          if (numberOfEnumKeys <= this.vehicleToCheckIn.TicketType) {
            this.dialogRef.close(false);
            throw new Error("Vehicle Enum Value is Bigger than ".concat(numberOfEnumKeys, ",it is ").concat(this.vehicleToCheckIn.TicketType));
          }

          this.vehicleToCheckIn.TicketType += 1;
          this.vehicleService.checkVehicleLegal(this.vehicleToCheckIn).subscribe(function (isLegal) {
            if (isLegal == true) {
              _this11.dialogRef.close(_this11.vehicleToCheckIn.TicketType);
            }
          }, function (err) {
            //check if ticket type can go one up, if not alert (should not happen,vip covers everything)
            _this11.getNextValueTicket();
          });
        }
        /**
         * Confirm using this ticket
         */

      }, {
        key: "confirm",
        value: function confirm() {
          this.dialogRef.close(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.vehicleService.getTicketInfo(this.ticketType).subscribe(function (ticket) {
            _this12.ticket = ticket;
          });

          if (this.ticketTypeToUpgradeFrom != null) {
            this.vehicleService.getTicketInfo(this.ticketTypeToUpgradeFrom).subscribe(function (ticket) {
              _this12.ticketToUpgradeFrom = ticket;
            });
          }
        }
      }]);

      return TicketViewComponent;
    }();

    TicketViewComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: _vehicles_service__WEBPACK_IMPORTED_MODULE_2__["VehiclesService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    TicketViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ticket-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ticket-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ticket-view/ticket-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket-view.component.css */
      "./src/app/ticket-view/ticket-view.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], TicketViewComponent);
    /***/
  },

  /***/
  "./src/app/vehicle-view/vehicle-view.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/vehicle-view/vehicle-view.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVehicleViewVehicleViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtdmlldy92ZWhpY2xlLXZpZXcuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/vehicle-view/vehicle-view.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/vehicle-view/vehicle-view.component.ts ***!
    \********************************************************/

  /*! exports provided: VehicleViewComponent */

  /***/
  function srcAppVehicleViewVehicleViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleViewComponent", function () {
      return VehicleViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _vehicles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../vehicles.service */
    "./src/app/vehicles.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var VehicleViewComponent =
    /*#__PURE__*/
    function () {
      function VehicleViewComponent(vehicleService, dialogRef, data) {
        _classCallCheck(this, VehicleViewComponent);

        this.vehicleService = vehicleService;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(VehicleViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          //if was opened as a dialog , sets the input
          if (this.data != null && this.data != undefined && this.vehicleLicenseId == undefined) {
            this.vehicleLicenseId = this.data.vehicleId;
          }

          this.vehicleService.getVehicleByLicenseNumber(this.vehicleLicenseId).subscribe(function (vehicle) {
            _this13.vehicle = vehicle;
          });
        }
        /**
         * Checks-out a vehicle.
         */

      }, {
        key: "checkOut",
        value: function checkOut() {
          var _this14 = this;

          this.vehicleService.checkOutVehicle(this.vehicleLicenseId).subscribe({
            next: function next(vehicle) {
              alert("vehicle ".concat(vehicle.Name, " - ").concat(vehicle.LicensePlateID, " was checked-out"));
            },
            error: function error(err) {
              alert(err);
              alert(err.message.message);
            },
            complete: function complete() {
              _this14.dialogRef.close();
            }
          });
        }
      }]);

      return VehicleViewComponent;
    }();

    VehicleViewComponent.ctorParameters = function () {
      return [{
        type: _vehicles_service__WEBPACK_IMPORTED_MODULE_2__["VehiclesService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VehicleViewComponent.prototype, "vehicleLicenseId", void 0);
    VehicleViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vehicle-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vehicle-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle-view/vehicle-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vehicle-view.component.css */
      "./src/app/vehicle-view/vehicle-view.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], VehicleViewComponent);
    /***/
  },

  /***/
  "./src/app/vehicles.service.ts":
  /*!*************************************!*\
    !*** ./src/app/vehicles.service.ts ***!
    \*************************************/

  /*! exports provided: VehiclesService */

  /***/
  function srcAppVehiclesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehiclesService", function () {
      return VehiclesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var VehiclesService =
    /*#__PURE__*/
    function () {
      function VehiclesService(httpClient) {
        _classCallCheck(this, VehiclesService);

        this.httpClient = httpClient;
      }
      /**
       * Sends a Get request that checks if the vehicle is legal based on his ticket.
       * @return True if the vehicle is legal,falase otherwise.
       * @param vehicleToCheck The vehicle to check for.
       */


      _createClass(VehiclesService, [{
        key: "checkVehicleLegal",
        value: function checkVehicleLegal(vehicleToCheck) {
          return this.httpClient.post("https://localhost:44344/api/Tickets/CheckLegal", vehicleToCheck);
        }
        /**
         * Sends a Get request that gets all vehicles
         */

      }, {
        key: "getVehicles",
        value: function getVehicles() {
          return this.httpClient.get("https://localhost:44344/api/Vehicles/");
        }
        /**
        *Sends a Get request that gets a vehicle by his license number.
        *@param licenseNumber The License Number of the vehicle to get.
        */

      }, {
        key: "getVehicleByLicenseNumber",
        value: function getVehicleByLicenseNumber(licenseNumber) {
          return this.httpClient.get("https://localhost:44344/api/Vehicles/".concat(licenseNumber));
        }
        /**
        *Sends a Delete request that checks-out a vehicle by his license number
        *@param licenseNumber The License Number of the vehicle to get.
         */

      }, {
        key: "checkOutVehicle",
        value: function checkOutVehicle(licenseNumber) {
          return this.httpClient.delete("https://localhost:44344/api/Vehicles/CheckOut/".concat(licenseNumber));
        }
        /**
        *Sends a Post request that checks-in a vehicle.
        *@param vehicle The Vehicle to check-in.
         */

      }, {
        key: "checkInVehicle",
        value: function checkInVehicle(vehicle) {
          return this.httpClient.post("https://localhost:44344/api/Vehicles/CheckIn", vehicle);
        }
        /**
        *Sends a Get request that gets the types of available tickets
         */

      }, {
        key: "getTicketTypes",
        value: function getTicketTypes() {
          return this.httpClient.get("https://localhost:44344/api/Tickets");
        }
        /**
        *Sends a Get request that gets the available types of vehicles.
         */

      }, {
        key: "getVehicleTypes",
        value: function getVehicleTypes() {
          return this.httpClient.get("https://localhost:44344/api/Vehicles/types");
        }
        /**
        *Sends a Get request that gets a ticket info by its type
        *@param ticketType The type of ticket to get.
         */

      }, {
        key: "getTicketInfo",
        value: function getTicketInfo(ticketType) {
          return this.httpClient.get("https://localhost:44344/api/Tickets/".concat(ticketType));
        }
      }, {
        key: "CheckInAsyc",
        value: function CheckInAsyc() {
          return this.httpClient.post("https://localhost:44344/api/Vehicles/CheckInAsyncTest", null);
        }
      }]);

      return VehiclesService;
    }();

    VehiclesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    VehiclesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VehiclesService);
    /***/
  },

  /***/
  "./src/app/zero-to-infinit.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/zero-to-infinit.pipe.ts ***!
    \*****************************************/

  /*! exports provided: ZeroToInfinitPipe */

  /***/
  function srcAppZeroToInfinitPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZeroToInfinitPipe", function () {
      return ZeroToInfinitPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ZeroToInfinitPipe =
    /*#__PURE__*/
    function () {
      function ZeroToInfinitPipe() {
        _classCallCheck(this, ZeroToInfinitPipe);
      }

      _createClass(ZeroToInfinitPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value == 0) {
            return "No Limit";
          } else {
            return value;
          }
        }
      }]);

      return ZeroToInfinitPipe;
    }();

    ZeroToInfinitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'zeroToInfinit'
    })], ZeroToInfinitPipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/models/ErrorStrings.ts":
  /*!************************************!*\
    !*** ./src/models/ErrorStrings.ts ***!
    \************************************/

  /*! exports provided: ErrorStrings */

  /***/
  function srcModelsErrorStringsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorStrings", function () {
      return ErrorStrings;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ErrorStrings;

    (function (ErrorStrings) {
      ErrorStrings["TicketVehicleClassError"] = "Ticket Does Not Cover Vehicle";
      ErrorStrings["TicketVehicleDimentionsError"] = "Vehicle Dimentions Are Too Big For This Ticket";
      ErrorStrings["VehhicleExsistsError"] = "Vehicle Already In Garage";
      ErrorStrings["TicketLotFullError"] = "Ticket Lots Are Full";
    })(ErrorStrings || (ErrorStrings = {}));
    /***/

  },

  /***/
  "./src/models/Ticket.ts":
  /*!******************************!*\
    !*** ./src/models/Ticket.ts ***!
    \******************************/

  /*! exports provided: TicketType, VehicleDimentions, Ticket */

  /***/
  function srcModelsTicketTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketType", function () {
      return TicketType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleDimentions", function () {
      return VehicleDimentions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ticket", function () {
      return Ticket;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TicketType;

    (function (TicketType) {
      TicketType[TicketType["REGULAR"] = 0] = "REGULAR";
      TicketType[TicketType["VALUE"] = 1] = "VALUE";
      TicketType[TicketType["VIP"] = 2] = "VIP";
    })(TicketType || (TicketType = {}));

    var VehicleDimentions = function VehicleDimentions(height, width, length) {
      _classCallCheck(this, VehicleDimentions);

      this.Height = height;
      this.Width = width;
      this.Length = length;
    };

    var Ticket = function Ticket(lots, dimentions, vehicleClasses, cost, timeLimit, type) {
      _classCallCheck(this, Ticket);

      this.Lots = lots;
      this.Dimentions = dimentions;
      this.VehicleClasses = vehicleClasses;
      this.Cost = cost;
      this.TimeLimit = timeLimit;
      this.Type = type;
    };
    /***/

  },

  /***/
  "./src/models/Vehicle.ts":
  /*!*******************************!*\
    !*** ./src/models/Vehicle.ts ***!
    \*******************************/

  /*! exports provided: VehicleType, VehicleClass, Vehicle */

  /***/
  function srcModelsVehicleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleType", function () {
      return VehicleType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleClass", function () {
      return VehicleClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vehicle", function () {
      return Vehicle;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VehicleType;

    (function (VehicleType) {
      VehicleType[VehicleType["MOTORCYCLE"] = 0] = "MOTORCYCLE";
      VehicleType[VehicleType["PRIVATE"] = 1] = "PRIVATE";
      VehicleType[VehicleType["SUV"] = 2] = "SUV";
      VehicleType[VehicleType["CROSSOVER"] = 3] = "CROSSOVER";
      VehicleType[VehicleType["VAN"] = 4] = "VAN";
      VehicleType[VehicleType["TRUCK"] = 5] = "TRUCK";
    })(VehicleType || (VehicleType = {}));

    var VehicleClass;

    (function (VehicleClass) {
      VehicleClass[VehicleClass["CLASS_A"] = 0] = "CLASS_A";
      VehicleClass[VehicleClass["CLASS_B"] = 1] = "CLASS_B";
      VehicleClass[VehicleClass["CLASS_C"] = 2] = "CLASS_C";
    })(VehicleClass || (VehicleClass = {}));

    var Vehicle = function Vehicle(name, licensePlateID, phoneNumber, vehicleType, ticketType, height, width, length, lotNumber) {
      _classCallCheck(this, Vehicle);

      this.Name = name;
      this.LicensePlateID = licensePlateID;
      this.PhoneNumber = phoneNumber;
      this.VehicleType = vehicleType;
      this.TicketType = ticketType;
      this.Height = height;
      this.Width = width;
      this.Length = length;
      this.LotNumber = lotNumber;
    };
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Coding\CSharp\Parking\Parking Garage Management System\Parking Garage Management System\Angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map