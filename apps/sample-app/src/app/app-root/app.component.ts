import { Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
import { FloorService } from '../services/floor.service';

@Component({
    selector: 'sa-root',
    standalone: false,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public floors: number[] = [];

    constructor(private _floorService: FloorService) {
        for (let i=this._floorService.numOfFloors - 1; i >= 0; i--) {
            this.floors.push(i);
        }
    }

    public ngOnInit(): void {}
}
