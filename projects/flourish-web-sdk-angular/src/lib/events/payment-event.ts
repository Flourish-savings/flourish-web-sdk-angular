import { Event } from "./event";

export class PaymentEvent extends Event {

    constructor() {
        super("GoToPayment");
    }

}