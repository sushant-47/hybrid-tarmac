import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable()
export class BillingHistoryService {
    private _http = inject(HttpClient);

    getInvoices() {
        return this._http.request(
            'GET',
            'https://www.greatfrontend.com/api/projects/challenges/account/billing/history',
            {
                observe: 'response',
                responseType: 'json',
            }
        );
    }
}
