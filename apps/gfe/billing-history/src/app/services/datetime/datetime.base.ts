import { Injectable } from "@angular/core";

@Injectable()
export abstract class DateTimeBase<T> {
    abstract now(): T;

    abstract toISO(time: T): string;

    abstract toUTC(time: T): T;

    abstract convertToUTC(
        time: string,
        timeFormat: string,
        timeZone: string,
    ): T;
    abstract convertToUTC(
        time: string,
        timeFormat: 'ISO',
    ): T;

    abstract convertToCustomFormat(
        dateStr: string,
        sourceTimeFormat: string,
        targetTimeFormat: string,
        sourceTimeZone: string,
        targetTimeZone: string,
    ): string;
}
