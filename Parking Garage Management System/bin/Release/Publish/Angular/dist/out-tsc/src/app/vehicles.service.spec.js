import { TestBed } from '@angular/core/testing';
import { VehiclesService } from './vehicles.service';
describe('VehiclesService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(VehiclesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=vehicles.service.spec.js.map