import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { InvoiceHistory } from "../models/InvoiceHistory";

@Injectable()
export class BillingHistoryService {
    private _http = inject(HttpClient);

    getInvoices(): Observable<InvoiceHistory[]> {
        return this._http.request<{data: InvoiceHistory[]}>(
            'GET',
            'https://www.greatfrontend.com/api/projects/challenges/account/billing/history',
            {
                observe: 'response',
                responseType: 'json',
            }
        ).pipe(
            map((response) => {
                const data = response.body.data;
                if (data?.length > 0) {
                    return data.map((invoice) => new InvoiceHistory(invoice));
                }
                return [];
            })
        );
    }
}
