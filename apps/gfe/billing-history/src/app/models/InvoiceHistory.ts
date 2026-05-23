import { Plan } from "../enums/Plan.enum";
import { Status } from "../enums/Status.enum";

/**
 * Class that holds data for each invoice
 *
 * TODO: Use observables for triggering updates to a cell
 */
export class InvoiceHistory {
    amount: number;
    plan: Plan;
    status: Status;
    invoice_url: string;
    created_at: string;

    constructor(obj: Partial<InvoiceHistory> = {}) {
        this.amount = obj.amount;
        this.plan = obj.plan;
        this.status = obj.status;
        this.invoice_url = obj.invoice_url;
        this.created_at = obj.created_at;
    }
}
