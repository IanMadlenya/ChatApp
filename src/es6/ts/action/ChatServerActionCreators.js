import MessageStore from "../store/MessageStore";
import ThreadStore from "../store/ThreadStore";
export default class ChatServerActionCreators {
    static receiveAll(rawMessages) {
        ThreadStore.receiveRawMessages(rawMessages);
        MessageStore.receiveRawMessages(rawMessages);
    }
    static receiveCreatedMessage(createdMessage) {
        // MessageStore.receiveRawCreatedMessage(createdMessage);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhdFNlcnZlckFjdGlvbkNyZWF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHMvYWN0aW9uL0NoYXRTZXJ2ZXJBY3Rpb25DcmVhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FDTyxZQUFZLE1BQU0sdUJBQXVCO09BQ3pDLFdBQVcsTUFBTSxzQkFBc0I7QUFFOUM7SUFHQyxPQUFjLFVBQVUsQ0FBQyxXQUE2QjtRQUVyRCxXQUFXLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxPQUFjLHFCQUFxQixDQUFDLGNBQThCO1FBRWpFLHlEQUF5RDtJQUMxRCxDQUFDO0FBQ0YsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSYXdNZXNzYWdlU3RhdGV9IGZyb20gXCIuLi9NZXNzYWdlXCI7XG5pbXBvcnQgTWVzc2FnZVN0b3JlIGZyb20gXCIuLi9zdG9yZS9NZXNzYWdlU3RvcmVcIjtcbmltcG9ydCBUaHJlYWRTdG9yZSBmcm9tIFwiLi4vc3RvcmUvVGhyZWFkU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdFNlcnZlckFjdGlvbkNyZWF0b3JzXG57XG5cblx0cHVibGljIHN0YXRpYyByZWNlaXZlQWxsKHJhd01lc3NhZ2VzOlJhd01lc3NhZ2VTdGF0ZVtdKVxuXHR7XG5cdFx0VGhyZWFkU3RvcmUucmVjZWl2ZVJhd01lc3NhZ2VzKHJhd01lc3NhZ2VzKTtcblx0XHRNZXNzYWdlU3RvcmUucmVjZWl2ZVJhd01lc3NhZ2VzKHJhd01lc3NhZ2VzKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgcmVjZWl2ZUNyZWF0ZWRNZXNzYWdlKGNyZWF0ZWRNZXNzYWdlOlJhd01lc3NhZ2VTdGF0ZSlcblx0e1xuXHRcdC8vIE1lc3NhZ2VTdG9yZS5yZWNlaXZlUmF3Q3JlYXRlZE1lc3NhZ2UoY3JlYXRlZE1lc3NhZ2UpO1xuXHR9XG59Il19