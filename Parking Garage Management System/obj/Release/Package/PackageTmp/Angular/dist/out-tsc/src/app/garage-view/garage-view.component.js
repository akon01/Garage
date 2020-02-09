import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TicketType } from 'src/models/Ticket';
let GarageViewComponent = class GarageViewComponent {
    constructor(vehicleService, formBuilder) {
        this.vehicleService = vehicleService;
        this.formBuilder = formBuilder;
        this.tickets = [];
        this.vehicles = [];
        this.lots = [];
        this.ticketTypeKeys = [];
    }
    ngOnInit() {
        this.filterForm = this.formBuilder.group({
            TypeSelect: [''],
            FilterSelect: [''],
        });
        // defaluts
        this.filterForm.get('FilterSelect').setValue('All');
        this.filterType = 'All';
        // get enum keys
        this.ticketTypeKeys = Object.keys(TicketType).filter(key => !isNaN(Number(TicketType[key])));
        this.getTickets(this.ticketTypeKeys, true, true);
    }
    /**
     * Gets all currnet parked vehicles
     * @param isMakeLots set to true if you want to make the lots after getting the vehicles
     */
    getVehicles(isMakeLots) {
        this.vehicles = [];
        this.vehicleService.getVehicles().subscribe(vehicles => this.vehicles = vehicles, null, () => {
            if (isMakeLots) {
                this.makeLots();
            }
        });
    }
    /**
     * Gets all available tickets, can also get the parked vehicles and make current lots.
     * @param ticketTypeKeys all the Tickets types enum keys as strings.
     * @param isGetVehicles set to true if you want to get all vehicles after getting the tickets
     * @param isMakeLots set to true if you wnat to make the lots after getting the vehicles
     */
    getTickets(ticketTypeKeys, isGetVehicles, isMakeLots) {
        this.tickets = [];
        for (let o = 0; o < ticketTypeKeys.length; o++) {
            //gets the enum value by key string.
            const key = ticketTypeKeys[o];
            const typeNumber = TicketType[key];
            this.vehicleService.getTicketInfo(typeNumber).subscribe(ticket => {
                this.tickets.push(ticket);
            }, err => {
                alert(`No Ticket was found of type ${ticketTypeKeys[o]}`);
            }, () => {
                if (o == ticketTypeKeys.length - 1 && isGetVehicles) {
                    this.getVehicles(isMakeLots);
                }
            });
        }
    }
    /**
     * Make current lots,full and empty,can apply filter by selecting in the view.
     */
    makeLots() {
        this.lots = [];
        this.tickets.forEach(ticket => {
            ticket.Lots.forEach(lotNumber => {
                const vehicle = this.vehicles.find(vehicle => vehicle.LotNumber == lotNumber);
                this.lots.push({ number: lotNumber, ticket: ticket, vehicle: vehicle });
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
        this.lots.sort((a, b) => {
            if (a.number > b.number) {
                return 1;
            }
            else if (a.number < b.number) {
                return -1;
            }
            else
                return 0;
        });
    }
    /**
     * Filters the los by a specific ticket type
     */
    onFilterType() {
        this.lots = this.lots.filter(lot => lot.ticket.Type == TicketType[this.filterForm.get('TypeSelect').value]);
    }
    /**
     * Filters the lots to show only empty ones
     */
    onFilterEmpty() {
        this.lots = this.lots.filter(lot => !lot.vehicle);
    }
    /**
     * Filters the lots to show only full ones
     */
    onFilterFull() {
        this.lots = this.lots.filter(lot => lot.vehicle);
    }
    /**
     * Makes new lots with a diffrent filter.
     */
    onFilterChange() {
        this.filterType = this.filterForm.get('FilterSelect').value;
        this.getTickets(this.ticketTypeKeys, true, true);
    }
};
GarageViewComponent = __decorate([
    Component({
        selector: 'app-garage-view',
        templateUrl: './garage-view.component.html',
        styleUrls: ['./garage-view.component.css']
    })
], GarageViewComponent);
export { GarageViewComponent };
//# sourceMappingURL=garage-view.component.js.map