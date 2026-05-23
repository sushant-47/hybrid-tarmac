import { inject, Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { DateTimeBase } from './datetime/datetime.base';

@Injectable()
export class DateTimeService {
    private _dateTimeAdapter = inject(DateTimeBase);

    constructor() {
        // const zdt = DateTime.fromFormat('11-09-2023 10:00 PM', 'dd-MM-yyyy h:mm a', {zone: 'America/Los_Angeles'});
        const zdt = DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
        console.log('instanceof: ', zdt instanceof DateTime)
        console.log('zdt: ', zdt);
        console.log('ISO: ', zdt.setZone('utc').toISO());
    }

    /**
     * Converts a DD-MM-YYYY string from a specific timezone into a formatted date.
     * @param {string} dateStr - The input date (e.g., "25-12-2026")
     * @param {string} sourceTimeZone - The timezone the date belongs to (e.g., "Asia/Tokyo")
     * @param {string} [targetTimeZone] - Optional: The timezone you want to convert the date TO
     */
    formatTimezoneDate(
        dateStr: string,
        dateFormat: string,
        sourceTimeZone: string,
        targetTimeZone: string = sourceTimeZone
    ): any {
    }

    convertToCustomFormat(
        dateStr: string,
        sourceTimeFormat: string,
        targetTimeFormat: string,
        sourceTimeZone: string,
        targetTimeZone?: string,
    ): string {
        return this.customFormat(this.formatTimezoneDate(dateStr, sourceTimeFormat, sourceTimeZone), targetTimeFormat);
    }

    /**
     * Formats a Temporal.ZonedDateTime using Moment.js style tokens.
     * @param {Temporal.ZonedDateTime} zdt - The Temporal object
     * @param {string} formatStr - The token string (e.g., "YYYY-MM-DD HH:mm")
     */
    customFormat(zdt: any, formatStr: string): string {
        return '';
    }
}
