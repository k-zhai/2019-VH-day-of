/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const superagent = require('superagent');

const CALENDAR_ID = 'vanderbilt.edu_pjh3eog4al1rhoccv5dukekn80@group.calendar.google.com';
const API_KEY = `${process.env.API_KEY}`;
const TIME_MIN = '2019-10-01T00:00:00Z';
const TIME_MAX = '2019-11-04T10:00:00Z';
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&orderBy=startTime&&singleEvents=true&timeMin=${TIME_MIN}&timeMax=${TIME_MAX}`;

// const startEventTime = new Date('2019-10-01T00:00:00.000Z');
// const endEventTime = new Date('2019-11-03T23:59:59.999Z');

// async function getEvents() {
async function getEvents() {
	try {
		const events = [];
		const res = await superagent.get(url);
		await JSON.parse(res.text).items.map(event => {
			events.push({
				start: event.start.dateTime || event.start.date,
				end: event.end.dateTime || event.end.date,
				title: event.summary,
			});
		});
		return events;
	} catch (err) {
		console.error(err);
	}
}
// }

exports.createPages = async ({ actions: { createPage } }) => {
	const events = await getEvents();
	createPage({
		path: `/`,
		component: require.resolve('./src/templates/index.js'),
		context: { events },
	});
};
