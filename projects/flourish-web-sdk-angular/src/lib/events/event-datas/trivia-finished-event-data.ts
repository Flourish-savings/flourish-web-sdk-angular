import { IframeMessageTriviaFinishedEvent } from "../iframe-messages/iframe-message-trivia-finished-event";

export class TriviaFinishedEventData  {
    hits: Number | undefined;
    questions: Number | undefined;
    prizes: Prize[] | undefined;

    constructor(iframeMessage: IframeMessageTriviaFinishedEvent) {
        this.hits = iframeMessage.data.hits;
        this.questions = iframeMessage.data.questions;
        this.prizes = iframeMessage.data.prizes;
    }
}

class Prize {
    quantity: Number | undefined;
    category: String | undefined;

    constructor(quantity: Number, category: String) {
        this.quantity = quantity;
        this.category = category;
    }

}
