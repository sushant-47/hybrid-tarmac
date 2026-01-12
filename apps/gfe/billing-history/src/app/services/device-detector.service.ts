import { inject, Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable()
export class DeviceDetector {
    private _deviceDetector = inject(DeviceDetectorService);

    isMobile(): boolean {
        return this._deviceDetector.isMobile();
    }

    isDesktop(): boolean {
        return (
            this._deviceDetector.isDesktop()
            || (this.isMobile() && this._deviceDetector.isDesktopModeEnabled())
        );
    }
}
