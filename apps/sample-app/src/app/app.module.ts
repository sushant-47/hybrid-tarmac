import { NgModule, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app-root/app.component';
import { FloorComponent } from './floor/floor.component';
import { FloorService } from './services/floor.service';
import { appRoutes } from './app.routes';
import { provideRouter } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        FloorComponent,
        BrowserModule,
    ],
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(appRoutes),
        FloorService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
