import React, { Component } from 'react';
import { Text, NativeModules } from 'react-native';

const RNCalendarEvents = NativeModules.RNCalendarEvents;

class Events extends Component {
authorizationStatus() {
    return RNCalendarEvents.authorizationStatus();
  }
    saveEvent() {
        RNCalendarEvents.saveEvent('title', {
            location: 'location',
            notes: 'notes',
            startDate: '2016-08-19T19:26:00.000Z',
            endDate: '2017-08-19T19:26:00.000Z'
  })
  .then(id => {
    console.log(id);
  })
  .catch(error => {
   console.log(error);
  });
    }

    render() {
        return (
            <Text onPress={this.authorizationStatus}>
                Event
            </Text>
        );
    }
}
export default Events;
