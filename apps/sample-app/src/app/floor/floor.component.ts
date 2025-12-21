
import { Component, Input, HostListener } from '@angular/core';
import { FloorService } from '../services/floor.service';
import { Subject, filter, map, takeUntil } from 'rxjs';

@Component({
    selector: 'sa-floor',
    standalone: true,
    templateUrl: './floor.component.html',
    styleUrls: ['./floor.component.scss']
})
export class FloorComponent {
    @Input() floorID: number = 0;

    @HostListener('click', ['$event'])
    unselectAll(event: MouseEvent): void {
        if (!(
            (event.target as HTMLElement).classList.contains('person')
            || (event.target as HTMLButtonElement).classList.contains('select-all')
        )) {
            this.personSelected = false;
            this.selectedPeople = [];
        }
    }

    people: string[] = [];
    selectedPeople: string[] = [];
    personSelected: boolean = false;
    enableGoUp: boolean = false;
    enableGoDown: boolean = false;

    private _destroy$: Subject<void> = new Subject<void>();
    constructor(private _floorService: FloorService) {
    }

    ngOnInit(): void {
        this._floorService.floor$.pipe(
            map<Map<number, string[]>, string[]>((floorMap: Map<number, string[]>) => floorMap.get(this.floorID) as string[]),
            filter((people: string[]) => people.length !== this.people.length), // change people on the floor if moved from any floor,
            takeUntil(this._destroy$)
        ).subscribe({
            next: (value: string[]): void => {
                this.people = [...value];

                this.enableGoUp = this.floorID !== (this._floorService.numOfFloors - 1) && this.people.length > 0;
                this.enableGoDown = this.floorID !== 0 && this.people.length > 0;
            }
        });
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    togglePerson(person: string, selectedIndex?: number): void {
        let selPersonIndex: number;

        if (typeof selectedIndex === 'number') {
            selPersonIndex = selectedIndex;
        } else {
            selPersonIndex = this.selectedPeople.findIndex((val: string) => val === person);
        }

        const isPersonSelected: boolean = this.isPersonSelectedBySelectIndex(selPersonIndex);
        if (isPersonSelected) {
            this.selectedPeople.splice(selPersonIndex, 1);
        } else {
            this.selectedPeople.push(person);
        }
        this.personSelected = !!this.selectedPeople.length;
    }

    toggleAll(): void {
        const deSelect: boolean = this.selectedPeople.length === this.people.length;
        if (deSelect) {
            this.selectedPeople = [];
            this.personSelected = false;
            return;
        }
        const selectedPeopleSet = new Set(this.selectedPeople);
        const peopleSet = new Set(this.people);
        const unselectedPeople = Array.from(peopleSet.difference(selectedPeopleSet));

        for (let i = 0; i < unselectedPeople.length; i++) {
            this.togglePerson(unselectedPeople[i], -1);
        }
    }

    /** for querying selected persons from template */
    isPersonSelected(person: string): boolean {
        return this.selectedPeople.findIndex((val: string) => val === person) > -1;
    }

    isPersonSelectedBySelectIndex(selectedIndex: number): boolean {
        return selectedIndex > -1;
    }

    goUp(): void {
        this._floorService.movePeople({
            fromFloor: this.floorID,
            toFloor: this.floorID + 1,
            persons: this.selectedPeople
        });
    }

    goDown(): void {
        this._floorService.movePeople({
            fromFloor: this.floorID,
            toFloor: this.floorID - 1,
            persons: this.selectedPeople
        });
    }
}
