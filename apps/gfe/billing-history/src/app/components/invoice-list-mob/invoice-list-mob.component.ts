import { Component, inject } from "@angular/core";
import { BillingHistoryService } from "../../services/billing-history.service";
import { DateTimeService } from "../../services/date-time.service";

@Component({
    selector: 'bh-invoice-list-mob',
    templateUrl: './invoice-list-mob.component.html',
    styleUrls: ['./invoice-list-mob.component.scss'],
})
export class InvoiceListMobile {
    private _billingService = inject(BillingHistoryService);
    private _dateTimeService = inject(DateTimeService);

    ngOnInit(): void {
        this._billingService.getInvoices().subscribe({
            next: console.log
        });

        // Using fixed offset time zones
        const localDate = this._dateTimeService.convertToCustomFormat("25-12-2026 05:00 AM", "MMM d, yyyy hh:mm a", "UTC+5:30", "UTC+0");
        console.log(localDate); // "Dec 24, 2026 11:30 PM"
    }
}
