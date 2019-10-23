# VandyHacks day-of Website

Here's a short documentation of the code. The basic are written in react components similar to the v1 website.

#### Schedule Part

The calendar is implemented with **[React big calendar](http://intljusticemission.github.io/react-big-calendar/examples/index.html)**. 

The **event** data is in the form of json (allDay and resource field are not needed) and pretty easy to work with.

```javascript
const events = [
  {
    title: 'All Day Event very long title',
    start: some date object here,
    end: some date object here,
  },...,];
```
(Could reference this [sample file](https://github.com/intljusticemission/react-big-calendar/blob/master/examples/events.js))

The **styling** of calendar is in the last portion of `layout.css`. (I explicitly identify classes from the source code and change styling there, which is probably a really bad style.)

Currently, the data is fetching from the public vandyhacks calendar. (Since I put my own google api key in the environment to query for data, I put the fetching data code in server side). The source code for fetching the data is in `gatsby-node.js`. 


#### Announcement Part

Currently it's just plain text holder in the text-box.