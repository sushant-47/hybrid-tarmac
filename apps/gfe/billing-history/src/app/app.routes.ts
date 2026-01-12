import { inject } from '@angular/core';
import { Route, UrlSegment } from '@angular/router';
import { DeviceDetector } from './services/device-detector.service';
import { InvoiceList } from './components/invoice-list/invoice-list.component';
import { InvoiceListMobile } from './components/invoice-list-mob/invoice-list-mob.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: InvoiceList,
        canMatch: [
            (route: Route, segments: UrlSegment[]) => {
                const deviceDetector = inject(DeviceDetector);
                return deviceDetector.isDesktop();
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        component: InvoiceListMobile,
        canMatch: [
            (route: Route, segments: UrlSegment[]) => {
                const deviceDetector = inject(DeviceDetector);
                return deviceDetector.isMobile();
            }
        ]
    }
];
