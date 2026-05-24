import { inject, Injectable } from '@angular/core';
import { DateTimeBase } from './datetime/datetime.base';

@Injectable()
export class DateTimeService {
    private _dateTimeProvider = inject(DateTimeBase);

    /**
     * Converts a dd-MM-yyyy string from a specific timezone into a formatted date in same/different timeone.
     * @param {string} dateStr - The input date (e.g., "25-12-2026")
     * @param {string} sourceTimeZone - The timezone the date belongs to (e.g., "Asia/Tokyo")
     * @param {string} [targetTimeZone] - Optional: The timezone you want to convert the date TO
     */
    convertToCustomFormat(
        dateStr: string,
        targetFormat: string,
        sourceTimeZone: string,
        targetTimeZone: string = sourceTimeZone
    ): string {
       return this._dateTimeProvider.convertToCustomFormat(dateStr, "dd-MM-yyyy hh:mm a", targetFormat, sourceTimeZone, targetTimeZone);
    }
}
