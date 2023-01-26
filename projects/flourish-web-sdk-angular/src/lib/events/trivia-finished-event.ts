import { TriviaFinishedEventData } from "./event-datas/trivia-finished-event-data";
import { IframeMessageTriviaFinishedEvent } from "./iframe-messages/iframe-message-trivia-finished-event";

export class TriviaFinishedEvent {

    name: String | undefined;
    data: TriviaFinishedEventData | undefined;

    constructor(iframeMessage: IframeMessageTriviaFinishedEvent) {
        this.name = iframeMessage.eventName;
        this.data = new TriviaFinishedEventData(iframeMessage);
    }

}
