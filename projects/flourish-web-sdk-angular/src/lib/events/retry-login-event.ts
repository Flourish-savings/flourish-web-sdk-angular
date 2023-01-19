import { Event } from "./event";

export class RetryLoginEvent extends Event {

    constructor() {
        super("RetryLogin");
    }

}