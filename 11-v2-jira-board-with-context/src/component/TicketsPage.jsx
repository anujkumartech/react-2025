import { useState } from 'react';
import { actions, useBoard } from '../context/BoardContext';

const TicketsPage = () => {
  const { state, dispatch } = useBoard();
  const [title, setTitle] = useState('');
  const [storyId, setStoryId] = useState('');

  const handleAddTicket = (event) => {
    event.preventDefault();
    if (!title.trim() || !storyId) return;

    dispatch({
      type: actions.addTicket,
      ticket: {
        id: `ticket-${Date.now()}`,
        storyId,
        title,
        status: 'todo',
      },
    });
    setTitle('');
    setStoryId('');
  };

  const handleMoveTicket = (ticketId, status) => {
    dispatch({ type: actions.moveTicket, ticketId, status });
  };

  const handleDeleteTicket = (ticketId) => {
    dispatch({ type: actions.deleteTicket, ticketId });
  };

  const getStoryTitle = (currentStoryId) => {
    const story = state.stories.find(s => s.id === currentStoryId);
    return story ? story.title : 'Unknown';
  };

  const statuses = ['todo', 'in-progress', 'done'];

  return (
    <div className="page">
      <h2 className="page-title">
        {'\u{1F3AB}'} Tickets
      </h2>

      <form onSubmit={handleAddTicket} className="page-form">
        <input
          type="text"
          placeholder="Ticket title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="form-input"
        />
        <select
          value={storyId}
          onChange={(event) => setStoryId(event.target.value)}
          className="form-input"
        >
          <option value="">Select Story</option>
          {state.stories.map(story => (
            <option key={story.id} value={story.id}>{story.title}</option>
          ))}
        </select>
        <button type="submit" className="primary-button">Add Ticket</button>
      </form>

      <div className="board">
        {statuses.map(status => (
          <div key={status} className="board-column">
            <h3 className="column-title">{status.toUpperCase()}</h3>
            {state.tickets
              .filter(t => t.status === status)
              .map(ticket => (
                <div key={ticket.id} className="ticket-card">
                  <div>
                    <strong>{ticket.title}</strong>
                    <p className="story-tag">{getStoryTitle(ticket.storyId)}</p>
                  </div>
                  <div className="ticket-actions">
                    <select
                      value={ticket.status}
                      onChange={(event) => handleMoveTicket(ticket.id, event.target.value)}
                      className="status-select"
                    >
                      {statuses.map(currentStatus => (
                        <option key={currentStatus} value={currentStatus}>
                          {currentStatus}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => handleDeleteTicket(ticket.id)}
                      className="danger-button"
                      type="button"
                      aria-label="Delete ticket"
                    >
                      {'\u2715'}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
