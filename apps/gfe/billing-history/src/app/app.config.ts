import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app.routes';
import { DeviceDetector } from './services/device-detector.service';
import { BillingHistoryService } from './services/billing-history.service';
import { DateTimeService } from './services/date-time.service';
import { DateTimeBase } from './services/datetime/datetime.base';
import { LuxonAdapter } from './services/datetime/luxon.adapter';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(appRoutes),
        provideHttpClient(),
        DeviceDetector,
        BillingHistoryService,
        DateTimeService,
        { provide: DateTimeBase, useClass: LuxonAdapter },
    ],
};
