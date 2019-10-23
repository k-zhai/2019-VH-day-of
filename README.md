## VandyHacks day-of Website

Here's a short documentation of the code. The basic are written in react components similar to the v1 website, and hosted by Gatsby. To test run `npm run develop`, to build run `npm run build`.

### Schedule Part

The calendar is implemented with **[React big calendar](http://intljusticemission.github.io/react-big-calendar/examples/index.html)**. 

The **event** data is in the form of json and pretty easy to work with.

```javascript
const events = [
  {
    title: 'All Day Event very long title',
    start: some date object here,
    end: some date object here,
  },...,];
```
(Could also reference this [sample file](https://github.com/intljusticemission/react-big-calendar/blob/master/examples/events.js))

The **styling** of calendar is in the last portion of `layout.css`. (Explicitly identify classes name and change styling there accordingly, which is fast but really bad and inconsistent style.)

Currently, the data is fetching from the public Candyhacks calendar. (Since there's my own google api key in the environment to query for data, I put the fetching data code in server side). The source code for fetching the data is in **`gatsby-node.js`**. (Since it's in the server side, has to rebuild if any changes.) 


### Announcement Part

Currently it's just plain text holder in the text-box.


### Deploy

It's not deployed to any places right now.
