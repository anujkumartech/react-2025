import { useState } from 'react';

const TicketsPage = ({ tickets, stories, dispatch, actions }) => {
  const [title, setTitle] = useState('');
  const [storyId, setStoryId] = useState('');

  const handleAddTicket = (e) => {
    e.preventDefault();
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

  const getStoryTitle = (lookupId) => {
    const story = stories.find((s) => s.id === lookupId);
    return story ? story.title : 'Unknown';
  };

  const statuses = ['todo', 'in-progress', 'done'];

  return (
    <div className="page">
      <h2 className="page-title">🎫 Tickets</h2>

      <form onSubmit={handleAddTicket} className="form">
        <input
          type="text"
          placeholder="Ticket title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-input"
        />
        <select
          value={storyId}
          onChange={(e) => setStoryId(e.target.value)}
          className="text-input"
        >
          <option value="">Select Story</option>
          {stories.map((story) => (
            <option key={story.id} value={story.id}>{story.title}</option>
          ))}
        </select>
        <button type="submit" className="primary-button">Add Ticket</button>
      </form>

      <div className="board">
        {statuses.map((status) => (
          <div key={status} className="column">
            <h3 className="column-title">{status.toUpperCase()}</h3>
            {tickets
              .filter((t) => t.status === status)
              .map((ticket) => (
                <div key={ticket.id} className="ticket-card">
                  <div>
                    <strong>{ticket.title}</strong>
                    <p className="story-tag">{getStoryTitle(ticket.storyId)}</p>
                  </div>
                  <div className="ticket-actions">
                    <select
                      value={ticket.status}
                      onChange={(e) => handleMoveTicket(ticket.id, e.target.value)}
                      className="status-select"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => handleDeleteTicket(ticket.id)}
                      className="delete-button"
                    >
                      ✖
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
