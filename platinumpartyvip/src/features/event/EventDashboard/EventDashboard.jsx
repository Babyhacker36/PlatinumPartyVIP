import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';


const eventsDashboard = [
  {
    id: '1',
    title: 'Blow Out Party at the Summit in Brooklyn....',
    date: '2018-03-27T11:00:00+00:00',
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
    date: '2018-03-28T14:00:00+00:00',
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
    isOpen: false
  };
// various methods to handle events

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  // method to update the event list and 
  // pass the information from the form to actual event list

  // cuid is a package found in json  is imported see above line 5
  // generates a random id

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState ({
      events: updatedEvents,
      isOpen:false
      // function with the method is passed down to the event form so 
      //  when the form is submitted can call the mrthed and update the state inside the dashboard
    })
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && (
          <EventForm createEvent ={this.handleCreateEvent} handleCancel={this.handleCancel} />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
