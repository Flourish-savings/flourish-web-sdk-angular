import { Event } from "./event";

export class TriviaFinishedEvent extends Event {

    constructor() {
        super("TriviaFinished");
    }

}