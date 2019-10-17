// import axios from 'axios';

// const CALENDAR_ID = 'vanderbilt.edu_pjh3eog4al1rhoccv5dukekn80@group.calendar.google.com';
// // const API_KEY = `${process.env.GATSBY_API_KEY}`;
// const TIME_MIN = '2019-10-01T00:00:00Z';
// const TIME_MAX = '2019-11-04T10:00:00Z';
// let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&orderBy=startTime&&singleEvents=true&timeMin=${TIME_MIN}&timeMax=${TIME_MAX}`;

// export async function getEvents() {
// 	axios
// 		.get(url)
// 		.then(resp => {
// 			const events = [];
// 			resp.data.items.map(event => {
// 				let newEvent = {
// 					start: event.start.dateTime || event.start.date,
// 					end: event.end.dateTime || event.end.date,
// 					title: event.summary,
// 				};
// 				newEvent.start = new Date(newEvent.start);
// 				newEvent.end = new Date(newEvent.end);
// 				events.push(newEvent);
// 			});
// 			callback(events);
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// }
