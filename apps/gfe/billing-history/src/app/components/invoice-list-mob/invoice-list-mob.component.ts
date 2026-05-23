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

        // const localDate = this._dateTimeService.convertToCustomFormat("25-12-2026", "Europe/London", "D MMM, YYYY", "America/Los_Angeles");
        // console.log(localDate); // "Dec 25, 2026"
    }

}
