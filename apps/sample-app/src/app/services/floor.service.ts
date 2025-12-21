import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable() 
export class FloorService {
    public readonly numOfFloors: number = 3;

    public get floor$(): Observable<Map<number, string[]>> {
        return this._floor$.asObservable();
    }

    private _people: string[] = ['P0', 'P1', 'P2', 'P3', 'P4'];
    private _floor$: BehaviorSubject<Map<number, string[]>>;
    private _floorMap: Map<number, string[]> = new Map<number, string[]>();

    constructor() {
        this._initializeFloors();
        this._floor$ = new BehaviorSubject(new Map(this._floorMap));
    }

    public movePeople({fromFloor, toFloor, persons}: {fromFloor: number, toFloor: number, persons: string[]}): void {
        let people: string[] = this._floorMap.get(fromFloor) as string[];
        // remove persons from the source floor
        for (let i=0; i < persons.length; i++) {
            let personIndex: number = people.findIndex((personName) => personName === persons[i]);
            people.splice(personIndex, 1);
        }
        this._floorMap.set(fromFloor, people);
        
        this._floorMap.set(toFloor, [...this._floorMap.get(toFloor) as string[], ...persons]);  // add persons to the dest floor

        this._floor$.next(this._floorMap);
    }

    private _initializeFloors(): void {
        let floorArr: [number, string[]][] = [];
        for (let i=0; i < this.numOfFloors; i++) {
            if (i === 0) { // ground floor
                floorArr.push([i, [...this._people]]);
                continue;
            }
            floorArr.push([i, []]);
        }
        this._floorMap = new Map(floorArr);
    }
}