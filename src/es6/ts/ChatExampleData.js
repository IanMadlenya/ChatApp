export function init() {
    localStorage.clear();
    localStorage.setItem('messages', JSON.stringify([
        {
            id: 'm_1',
            threadID: 't_1',
            threadName: 'Jing and Bill',
            authorName: 'Bill',
            text: 'Hey Jing, want to give a Flux talk at ForwardJS?',
            timestamp: Date.now() - 99999
        },
        {
            id: 'm_2',
            threadID: 't_1',
            threadName: 'Jing and Bill',
            authorName: 'Bill',
            text: 'Seems like a pretty cool conference.',
            timestamp: Date.now() - 89999
        },
        {
            id: 'm_3',
            threadID: 't_1',
            threadName: 'Jing and Bill',
            authorName: 'Jing',
            text: 'Sounds good.  Will they be serving dessert?',
            timestamp: Date.now() - 79999
        },
        {
            id: 'm_4',
            threadID: 't_2',
            threadName: 'Dave and Bill',
            authorName: 'Bill',
            text: 'Hey Dave, want to get a beer after the conference?',
            timestamp: Date.now() - 69999
        },
        {
            id: 'm_5',
            threadID: 't_2',
            threadName: 'Dave and Bill',
            authorName: 'Dave',
            text: 'Totally!  Meet you at the hotel bar.',
            timestamp: Date.now() - 59999
        },
        {
            id: 'm_6',
            threadID: 't_3',
            threadName: 'Functional Heads',
            authorName: 'Bill',
            text: 'Hey Brian, are you going to be talking about functional stuff?',
            timestamp: Date.now() - 49999
        },
        {
            id: 'm_7',
            threadID: 't_3',
            threadName: 'Bill and Brian',
            authorName: 'Brian',
            text: 'At ForwardJS?  Yeah, of course.  See you there!',
            timestamp: Date.now() - 39999
        }
    ]));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhdEV4YW1wbGVEYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvQ2hhdEV4YW1wbGVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0MsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDL0M7WUFDQyxFQUFFLEVBQUUsS0FBSztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsVUFBVSxFQUFFLGVBQWU7WUFDM0IsVUFBVSxFQUFFLE1BQU07WUFDbEIsSUFBSSxFQUFFLGtEQUFrRDtZQUN4RCxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUs7U0FDN0I7UUFDRDtZQUNDLEVBQUUsRUFBRSxLQUFLO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixVQUFVLEVBQUUsZUFBZTtZQUMzQixVQUFVLEVBQUUsTUFBTTtZQUNsQixJQUFJLEVBQUUsc0NBQXNDO1lBQzVDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSztTQUM3QjtRQUNEO1lBQ0MsRUFBRSxFQUFFLEtBQUs7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFVBQVUsRUFBRSxlQUFlO1lBQzNCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLElBQUksRUFBRSw2Q0FBNkM7WUFDbkQsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLO1NBQzdCO1FBQ0Q7WUFDQyxFQUFFLEVBQUUsS0FBSztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsVUFBVSxFQUFFLGVBQWU7WUFDM0IsVUFBVSxFQUFFLE1BQU07WUFDbEIsSUFBSSxFQUFFLG9EQUFvRDtZQUMxRCxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUs7U0FDN0I7UUFDRDtZQUNDLEVBQUUsRUFBRSxLQUFLO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixVQUFVLEVBQUUsZUFBZTtZQUMzQixVQUFVLEVBQUUsTUFBTTtZQUNsQixJQUFJLEVBQUUsc0NBQXNDO1lBQzVDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSztTQUM3QjtRQUNEO1lBQ0MsRUFBRSxFQUFFLEtBQUs7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFVBQVUsRUFBRSxrQkFBa0I7WUFDOUIsVUFBVSxFQUFFLE1BQU07WUFDbEIsSUFBSSxFQUFFLGdFQUFnRTtZQUN0RSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUs7U0FDN0I7UUFDRDtZQUNDLEVBQUUsRUFBRSxLQUFLO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLElBQUksRUFBRSxpREFBaUQ7WUFDdkQsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLO1NBQzdCO0tBQ0QsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG5cdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWVzc2FnZXMnLCBKU09OLnN0cmluZ2lmeShbXG5cdFx0e1xuXHRcdFx0aWQ6ICdtXzEnLFxuXHRcdFx0dGhyZWFkSUQ6ICd0XzEnLFxuXHRcdFx0dGhyZWFkTmFtZTogJ0ppbmcgYW5kIEJpbGwnLFxuXHRcdFx0YXV0aG9yTmFtZTogJ0JpbGwnLFxuXHRcdFx0dGV4dDogJ0hleSBKaW5nLCB3YW50IHRvIGdpdmUgYSBGbHV4IHRhbGsgYXQgRm9yd2FyZEpTPycsXG5cdFx0XHR0aW1lc3RhbXA6IERhdGUubm93KCkgLSA5OTk5OVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6ICdtXzInLFxuXHRcdFx0dGhyZWFkSUQ6ICd0XzEnLFxuXHRcdFx0dGhyZWFkTmFtZTogJ0ppbmcgYW5kIEJpbGwnLFxuXHRcdFx0YXV0aG9yTmFtZTogJ0JpbGwnLFxuXHRcdFx0dGV4dDogJ1NlZW1zIGxpa2UgYSBwcmV0dHkgY29vbCBjb25mZXJlbmNlLicsXG5cdFx0XHR0aW1lc3RhbXA6IERhdGUubm93KCkgLSA4OTk5OVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6ICdtXzMnLFxuXHRcdFx0dGhyZWFkSUQ6ICd0XzEnLFxuXHRcdFx0dGhyZWFkTmFtZTogJ0ppbmcgYW5kIEJpbGwnLFxuXHRcdFx0YXV0aG9yTmFtZTogJ0ppbmcnLFxuXHRcdFx0dGV4dDogJ1NvdW5kcyBnb29kLiAgV2lsbCB0aGV5IGJlIHNlcnZpbmcgZGVzc2VydD8nLFxuXHRcdFx0dGltZXN0YW1wOiBEYXRlLm5vdygpIC0gNzk5OTlcblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiAnbV80Jyxcblx0XHRcdHRocmVhZElEOiAndF8yJyxcblx0XHRcdHRocmVhZE5hbWU6ICdEYXZlIGFuZCBCaWxsJyxcblx0XHRcdGF1dGhvck5hbWU6ICdCaWxsJyxcblx0XHRcdHRleHQ6ICdIZXkgRGF2ZSwgd2FudCB0byBnZXQgYSBiZWVyIGFmdGVyIHRoZSBjb25mZXJlbmNlPycsXG5cdFx0XHR0aW1lc3RhbXA6IERhdGUubm93KCkgLSA2OTk5OVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6ICdtXzUnLFxuXHRcdFx0dGhyZWFkSUQ6ICd0XzInLFxuXHRcdFx0dGhyZWFkTmFtZTogJ0RhdmUgYW5kIEJpbGwnLFxuXHRcdFx0YXV0aG9yTmFtZTogJ0RhdmUnLFxuXHRcdFx0dGV4dDogJ1RvdGFsbHkhICBNZWV0IHlvdSBhdCB0aGUgaG90ZWwgYmFyLicsXG5cdFx0XHR0aW1lc3RhbXA6IERhdGUubm93KCkgLSA1OTk5OVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6ICdtXzYnLFxuXHRcdFx0dGhyZWFkSUQ6ICd0XzMnLFxuXHRcdFx0dGhyZWFkTmFtZTogJ0Z1bmN0aW9uYWwgSGVhZHMnLFxuXHRcdFx0YXV0aG9yTmFtZTogJ0JpbGwnLFxuXHRcdFx0dGV4dDogJ0hleSBCcmlhbiwgYXJlIHlvdSBnb2luZyB0byBiZSB0YWxraW5nIGFib3V0IGZ1bmN0aW9uYWwgc3R1ZmY/Jyxcblx0XHRcdHRpbWVzdGFtcDogRGF0ZS5ub3coKSAtIDQ5OTk5XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogJ21fNycsXG5cdFx0XHR0aHJlYWRJRDogJ3RfMycsXG5cdFx0XHR0aHJlYWROYW1lOiAnQmlsbCBhbmQgQnJpYW4nLFxuXHRcdFx0YXV0aG9yTmFtZTogJ0JyaWFuJyxcblx0XHRcdHRleHQ6ICdBdCBGb3J3YXJkSlM/ICBZZWFoLCBvZiBjb3Vyc2UuICBTZWUgeW91IHRoZXJlIScsXG5cdFx0XHR0aW1lc3RhbXA6IERhdGUubm93KCkgLSAzOTk5OVxuXHRcdH1cblx0XSkpO1xufSJdfQ==