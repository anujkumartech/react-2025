import { useReducer, useState } from 'react';
import './App.css';
import StoriesPage from './component/StoriesPage.jsx';
import TicketsPage from './component/TicketsPage.jsx';

const initialState = {
  stories: [
    { id: 'story-1', title: 'User Authentication', description: 'Login and logout feature' },
    { id: 'story-2', title: 'Dashboard', description: 'Main dashboard page' },
  ],
  tickets: [
    { id: 'ticket-1', storyId: 'story-1', title: 'Create login form', status: 'todo' },
    { id: 'ticket-2', storyId: 'story-1', title: 'Add validation', status: 'in-progress' },
    { id: 'ticket-3', storyId: 'story-2', title: 'Design layout', status: 'done' },
  ],
};

const actions = {
  addStory: 'addStory',
  deleteStory: 'deleteStory',
  addTicket: 'addTicket',
  deleteTicket: 'deleteTicket',
  moveTicket: 'moveTicket',
};

function reducer(state, action) {
  console.log(`current state ${state}`)
  console.log(state)
  console.log('action' , action)
  switch (action.type) {
    case actions.addStory:

      return {
        ...state,
        stories: [...state.stories, action.story],
      };
    case actions.deleteStory:
      return {
        ...state,
        stories: state.stories.filter((s) => s.id !== action.storyId),
        tickets: state.tickets.filter((t) => t.storyId !== action.storyId),
      };
    case actions.addTicket:
      return {
        ...state,
        tickets: [...state.tickets, action.ticket],
      };
    case actions.deleteTicket:
      return {
        ...state,
        tickets: state.tickets.filter((t) => t.id !== action.ticketId),
      };
    case actions.moveTicket:
      return {
        ...state,
        tickets: state.tickets.map((t) =>
          t.id === action.ticketId ? { ...t, status: action.status } : t
        ),
      };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [stories, setStories] = useState([
  //   { id: 'story-1', title: 'User Authentication', description: 'Login and logout feature' },
  //   { id: 'story-2', title: 'Dashboard', description: 'Main dashboard page' },
  // ])
  const [activePage, setActivePage] = useState('stories');

  return (
    <div className="app-container">
      <h1 className="app-title">Mini Jira (Without useContext)</h1>
      <p className="app-subtitle">Notice: state and dispatch passed as props ⬇️</p>

      <nav className="app-nav">
        <button
          onClick={() => setActivePage('stories')}
          className={activePage === 'stories' ? 'app-tab app-tab--active' : 'app-tab'}
        >
          Stories
        </button>
        <button
          onClick={() => setActivePage('tickets')}
          className={activePage === 'tickets' ? 'app-tab app-tab--active' : 'app-tab'}
        >
          Tickets
        </button>
      </nav>

      {activePage === 'stories' && (
        <StoriesPage
          stories={state.stories}
          dispatch={dispatch}
          actions={actions}
        />
      )}

      {activePage === 'tickets' && (
        <TicketsPage
          tickets={state.tickets}
          stories={state.stories}
          dispatch={dispatch}
          actions={actions}
        />
      )}
    </div>
  );
};

export default App;
