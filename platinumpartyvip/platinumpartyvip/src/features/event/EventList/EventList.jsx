import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <div>
<<<<<<< HEAD:platinumpartyvip/src/features/event/EventList/EventList.jsx
        {events && events.map(event => (
=======
        {events.map(event => (
>>>>>>> 6d504f2466f0bc937d93a4fc120ad0ef9416fa1f:platinumpartyvip/platinumpartyvip/src/features/event/EventList/EventList.jsx
          <EventListItem
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
