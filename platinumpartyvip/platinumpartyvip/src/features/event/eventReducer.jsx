import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants';




const initialState = [
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


export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)]
}

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ]
}

export const deleteEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.eventId)
  ]
}

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
})