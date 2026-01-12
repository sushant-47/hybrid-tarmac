import { Component, inject } from "@angular/core";
import { BillingHistoryService } from "../../services/billing-history.service";

@Component({
    selector: 'bh-invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.scss'],
})
export class InvoiceList {
    private _billingService = inject(BillingHistoryService);

    ngOnInit(): void {
        this._billingService.getInvoices().subscribe({
            next: (response) => console.log
        })
    }
}
