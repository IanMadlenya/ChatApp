import ChatServerActionCreators from "../action/ChatServerActionCreators";
export default class ChatWebAPIUtils {
    static getAllMessages() {
        var rawMessages = JSON.parse(localStorage.getItem('messages'));
        // simulate success callback
        ChatServerActionCreators.receiveAll(rawMessages);
    }
    static createMessage(message, threadName) {
        // simulate writing to a database
        var rawMessages = JSON.parse(localStorage.getItem('messages'));
        var timestamp = Date.now();
        var id = 'm_' + timestamp;
        var threadID = message.threadID || ('t_' + Date.now());
        var createdMessage = {
            id: id,
            threadID: threadID,
            threadName: threadName,
            authorName: message.authorName,
            text: message.text,
            timestamp: timestamp
        };
        rawMessages.push(createdMessage);
        localStorage.setItem('messages', JSON.stringify(rawMessages));
        // simulate success callback
        setTimeout(() => {
            ChatServerActionCreators.receiveCreatedMessage(createdMessage);
        }, 0);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhdFdlYkFQSVV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHMvdXRpbC9DaGF0V2ViQVBJVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQ08sd0JBQXdCLE1BQU0sb0NBQW9DO0FBRXpFO0lBRUMsT0FBTyxjQUFjO1FBRXBCLElBQUksV0FBVyxHQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNqRiw0QkFBNEI7UUFDNUIsd0JBQXdCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxPQUFPLGFBQWEsQ0FBQyxPQUFvQixFQUFFLFVBQWlCO1FBRTNELGlDQUFpQztRQUNqQyxJQUFJLFdBQVcsR0FBcUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLGNBQWMsR0FBRztZQUNwQixFQUFFLEVBQUUsRUFBRTtZQUNOLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtZQUM5QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsU0FBUyxFQUFFLFNBQVM7U0FDcEIsQ0FBQztRQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRTlELDRCQUE0QjtRQUM1QixVQUFVLENBQUM7WUFDVix3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0FBQ0YsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSYXdNZXNzYWdlU3RhdGUsIE1lc3NhZ2VTdGF0ZX0gZnJvbSBcIi4uL01lc3NhZ2VcIjtcbmltcG9ydCBDaGF0U2VydmVyQWN0aW9uQ3JlYXRvcnMgZnJvbSBcIi4uL2FjdGlvbi9DaGF0U2VydmVyQWN0aW9uQ3JlYXRvcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdFdlYkFQSVV0aWxzXG57XG5cdHN0YXRpYyBnZXRBbGxNZXNzYWdlcygpXG5cdHtcblx0XHR2YXIgcmF3TWVzc2FnZXM6UmF3TWVzc2FnZVN0YXRlW10gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZXNzYWdlcycpKTtcblx0XHQvLyBzaW11bGF0ZSBzdWNjZXNzIGNhbGxiYWNrXG5cdFx0Q2hhdFNlcnZlckFjdGlvbkNyZWF0b3JzLnJlY2VpdmVBbGwocmF3TWVzc2FnZXMpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZU1lc3NhZ2UobWVzc2FnZTpNZXNzYWdlU3RhdGUsIHRocmVhZE5hbWU6c3RyaW5nKVxuXHR7XG5cdFx0Ly8gc2ltdWxhdGUgd3JpdGluZyB0byBhIGRhdGFiYXNlXG5cdFx0dmFyIHJhd01lc3NhZ2VzOlJhd01lc3NhZ2VTdGF0ZVtdID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWVzc2FnZXMnKSk7XG5cdFx0dmFyIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cdFx0dmFyIGlkID0gJ21fJyArIHRpbWVzdGFtcDtcblx0XHR2YXIgdGhyZWFkSUQgPSBtZXNzYWdlLnRocmVhZElEIHx8ICgndF8nICsgRGF0ZS5ub3coKSk7XG5cdFx0dmFyIGNyZWF0ZWRNZXNzYWdlID0ge1xuXHRcdFx0aWQ6IGlkLFxuXHRcdFx0dGhyZWFkSUQ6IHRocmVhZElELFxuXHRcdFx0dGhyZWFkTmFtZTogdGhyZWFkTmFtZSxcblx0XHRcdGF1dGhvck5hbWU6IG1lc3NhZ2UuYXV0aG9yTmFtZSxcblx0XHRcdHRleHQ6IG1lc3NhZ2UudGV4dCxcblx0XHRcdHRpbWVzdGFtcDogdGltZXN0YW1wXG5cdFx0fTtcblx0XHRyYXdNZXNzYWdlcy5wdXNoKGNyZWF0ZWRNZXNzYWdlKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWVzc2FnZXMnLCBKU09OLnN0cmluZ2lmeShyYXdNZXNzYWdlcykpO1xuXG5cdFx0Ly8gc2ltdWxhdGUgc3VjY2VzcyBjYWxsYmFja1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Q2hhdFNlcnZlckFjdGlvbkNyZWF0b3JzLnJlY2VpdmVDcmVhdGVkTWVzc2FnZShjcmVhdGVkTWVzc2FnZSk7XG5cdFx0fSwgMCk7XG5cdH1cbn0iXX0=