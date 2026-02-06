import { useState } from 'react';
import { actions, useBoard } from '../context/BoardContext';

const StoriesPage = () => {
  const { state, dispatch } = useBoard();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddStory = (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: actions.addStory,
      story: {
        id: `story-${Date.now()}`,
        title,
        description,
      },
    });
    setTitle('');
    setDescription('');
  };

  const handleDeleteStory = (storyId) => {
    dispatch({ type: actions.deleteStory, storyId });
  };

  return (
    <div className="page">
      <h2 className="page-title">
        {'\u{1F4DA}'} Stories
      </h2>

      <form onSubmit={handleAddStory} className="page-form">
        <input
          type="text"
          placeholder="Story title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="form-input"
        />
        <button type="submit" className="primary-button">Add Story</button>
      </form>

      <div className="story-list">
        {state.stories.map(story => (
          <div key={story.id} className="story-card">
            <div>
              <strong>{story.title}</strong>
              <p className="story-description">{story.description}</p>
            </div>
            <button
              onClick={() => handleDeleteStory(story.id)}
              className="danger-button"
              type="button"
              aria-label="Delete story"
            >
              {'\u2715'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;
