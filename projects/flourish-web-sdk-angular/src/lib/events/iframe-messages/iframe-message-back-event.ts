import { BackEventData } from "../event-datas/back-event-data";
import { IframeMessage } from "../iframe-messages/iframe-message";

export interface IframeMessageBackEvent extends IframeMessage {
    eventName: String
    data: BackEventData;
}
