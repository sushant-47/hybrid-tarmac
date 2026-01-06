import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    imports: [RouterModule],
    selector: 'bh-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected title = 'billing-history';
}
