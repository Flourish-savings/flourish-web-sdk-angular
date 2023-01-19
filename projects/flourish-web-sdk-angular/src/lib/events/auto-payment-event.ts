import { Event } from "./event";

export class AutoPaymentEvent extends Event {

    constructor() {
        super("GoToPayment");
    };

}