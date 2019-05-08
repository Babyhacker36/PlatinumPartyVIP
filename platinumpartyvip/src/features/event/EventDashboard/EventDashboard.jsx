import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';


const eventsDashboard = [
  {
    id: '1',
    title: 'Blow Out Party at the Summit in Brooklyn....',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Manhattan, New York',
    venue: "Summit Night Club",
    hostedBy: 'Tracy',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/24.jpg',
    attendees: [
      { 
        id: 'a',
        name: 'Tracy',
        photoURL: 'https://randomuser.me/api/portraits/women/4.jpg'
      },
      {
        id: 'b',
        name: 'Jessica',
        photoURL: 'https://randomuser.me/api/portraits/women/22.jpg'
      },
      {
        id: 'c',
        name: 'James',
        photoURL: 'https://randomuser.me/api/portraits/men/11.jpg'
      },
      {
        id: 'd',
        name: 'Katrina',
        photoURL: 'https://randomuser.me/api/portraits/women/12.jpg'
      },
      {
        id: 'e',
        name: 'Will',
        photoURL: 'https://randomuser.me/api/portraits/men/18.jpg'
      },
      {
        id: 'f',
        name: 'Ryan',
        photoURL: 'https://randomuser.me/api/portraits/men/30.jpg'
      }

    ]
  },
  {
    id: '2',
    title: 'Ladies Night at the 40/40 Club',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'LAs Vegas',
    venue: '40/40 Club New York City',
    hostedBy: 'Justin',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/38.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Justin',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/28.jpg'
      }
    ]
  }
];


class EventDashboard extends Component {
  state = {
    events: eventsDashboard,
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent)
          // clones the object then assigns the event
        } else {
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  } 

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  }

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    })
  }

  render() {
    const {selectedEvent} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={this.state.events} onEventOpen={this.handleOpenEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} handleCancel={this.handleCancel} createEvent={this.handleCreateEvent} />}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
