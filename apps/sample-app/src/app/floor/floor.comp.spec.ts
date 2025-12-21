import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloorComponent } from './floor.component';
import { FloorService } from '../services/floor.service';

describe('FloorComponent', () => {
    let fixture: ComponentFixture<FloorComponent>;
    const floorID: number = 1;
    let movePeopleSpy: jest.SpyInstance;

    beforeEach(async () => {
        movePeopleSpy = jest.spyOn(FloorService.prototype, 'movePeople');

        await TestBed.configureTestingModule({
            imports: [],
            providers: [FloorService],
            declarations: []
        }).compileComponents();

        fixture = TestBed.createComponent(FloorComponent);
        fixture.componentInstance.floorID = floorID;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    })

    it('should create the component', () => {
        expect(fixture.componentInstance).toBeDefined();
    });

    it('should move people to upper floor - #goUp', () => {
        expect(movePeopleSpy).toHaveBeenCalledTimes(0);
        fixture.componentInstance.goUp();
        expect(movePeopleSpy).toHaveBeenCalledTimes(1);
        expect(movePeopleSpy.mock.lastCall[0]?.fromFloor).toEqual(floorID);
        expect(movePeopleSpy.mock.lastCall[0]?.toFloor).toEqual(floorID + 1);
    });

    it('should move people to lower floor - #goDown', () => {
        expect(movePeopleSpy).toHaveBeenCalledTimes(0);
        // debugger;
        fixture.componentInstance.goDown();
        expect(movePeopleSpy).toHaveBeenCalledTimes(1);
        expect(movePeopleSpy.mock.lastCall[0].fromFloor).toEqual(floorID);
        expect(movePeopleSpy.mock.lastCall[0].toFloor).toEqual(floorID - 1);
    });
});
