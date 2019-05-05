import React, { Component } from 'react';
import EventLisItem from './EventListItem';

 class EventList extends Component {
  render() {
    return (
      <div>
          <h1>Event List Item</h1>
        <EventLisItem/>
        <EventLisItem/>
        <EventLisItem/>
      </div>
    )
  }
}


export default EventList