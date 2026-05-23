import { DateTime } from 'luxon';
import { DateTimeBase } from './datetime.base';
import { Injectable } from '@angular/core';

/**
    * Important links
    * Working with time zones: https://moment.github.io/luxon/#/zones
    ** Use fixed offset time zones as much as possible: https://moment.github.io/luxon/#/zones?id=specifying-a-zone
    *
    * Luxon formatting functions and presets: https://moment.github.io/luxon/#/formatting?id=presets
    * 
    * Luxon moment equivalents: https://moment.github.io/luxon/#/moment
    *
    * Luxon tokens: https://moment.github.io/luxon/#/parsing?id=table-of-tokens
    *
    * Get list of IANA time zones: Intl.supportedValuesOf('timeZone')
*/
@Injectable()
export class LuxonAdapter extends DateTimeBase<DateTime> {
    // export class LuxonAdapter {
    now(): DateTime {
        return DateTime.now();
    }

    toISO(time: DateTime): string {
        return time.toISO();
    }

    toUTC(time: DateTime): DateTime {
        return time.setZone('utc');
    }

    /** conversion methods */
    /**
     *
     * @param time
     * @param timeFormat format of `time`
     * @param timeZone timezone of `time`, `utc` if not specified
     * @returns
     */
    convertToUTC(time: string, timeFormat: string | 'ISO', timeZone: string = 'utc'): DateTime {
        if (timeFormat === 'ISO') {
            return DateTime.fromISO(time, { zone: timeZone });
        }
        return this.toUTC(DateTime.fromFormat(time, timeFormat, { zone: timeZone }));
    }

    convertToCustomFormat(
        time: string,
        sourceTimeFormat: string | 'ISO',
        targetTimeFormat: string | 'ISO',
        sourceTimeZone: string = 'utc',
        targetTimeZone: string = 'utc'
    ): string {
        // source date time
        let sdt: DateTime;
        if (sourceTimeFormat === 'ISO') {
            sdt = DateTime.fromISO(time, { zone: sourceTimeZone });
        } else {
            sdt = DateTime.fromFormat(time, sourceTimeFormat, { zone: sourceTimeZone });
        }

        if (targetTimeFormat === 'ISO') {
            return this.toISO(sdt.setZone(targetTimeZone));
        }
        return sdt.setZone(targetTimeZone).toFormat(targetTimeFormat);
    }
}
