import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import EventList from '../EventList/EventListItem';

 class EventDashboard extends Component {
  render() {
    return (
     
     <Grid>
       <Grid.Column width = {10}>
       <EventList/>
       
       
       </Grid.Column> {/* end of the first column */}

       <Grid.Column width = {6}>
       <h2>Right column</h2>
       
       
       </Grid.Column>{/* end of the second column */}



 
     </Grid>

      



    )
  }
}

export default EventDashboard