import { TriviaFinishedEventData } from "../event-datas/trivia-finished-event-data";
import { IframeMessage } from "./iframe-message";

export interface IframeMessageTriviaFinishedEvent extends IframeMessage {
    eventName: String
    data: TriviaFinishedEventData;
}
