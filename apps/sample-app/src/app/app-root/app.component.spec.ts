import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from '../app.module';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule],
            declarations: []
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
    });

    it('should create the app', () => {;
        expect(fixture.componentInstance).toBeDefined();
    });

    it(`should have 3 floors`, () => {
        expect(fixture.componentInstance.floors.length).toEqual(3);
    });

    it('should render 3 floor component instances', () => {
        fixture.detectChanges();
        const floorDebugEls = fixture.debugElement.queryAll((debugEl) => {
            return debugEl.name === 'sa-floor'
        });
        expect(floorDebugEls.length).toEqual(3);
    });
});
