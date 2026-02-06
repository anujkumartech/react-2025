import { createContext, useContext, useReducer } from 'react';

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
  switch (action.type) {
    case actions.addStory:
      return {
        ...state,
        stories: [...state.stories, action.story],
      };
    case actions.deleteStory:
      return {
        ...state,
        stories: state.stories.filter(s => s.id !== action.storyId),
        tickets: state.tickets.filter(t => t.storyId !== action.storyId),
      };
    case actions.addTicket:
      return {
        ...state,
        tickets: [...state.tickets, action.ticket],
      };
    case actions.deleteTicket:
      return {
        ...state,
        tickets: state.tickets.filter(t => t.id !== action.ticketId),
      };
    case actions.moveTicket:
      return {
        ...state,
        tickets: state.tickets.map(t =>
          t.id === action.ticketId ? { ...t, status: action.status } : t
        ),
      };
    default:
      return state;
  }
}

const BoardContext = createContext(null);

const BoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};

function useBoard() {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useBoard must be used within BoardProvider');
  }
  return context;
}

export { BoardProvider, useBoard, actions };
