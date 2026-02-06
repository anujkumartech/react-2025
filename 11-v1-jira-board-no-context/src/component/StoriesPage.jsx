import { useState } from 'react';

const StoriesPage = ({ stories, dispatch, actions }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddStory = (e) => {
    e.preventDefault();
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
      <h2 className="page-title">📚 Stories</h2>

      <form onSubmit={handleAddStory} className="form">
        <input
          type="text"
          placeholder="Story title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-input"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-input"
        />
        <button type="submit" className="primary-button">Add Story</button>
      </form>

      <div className="list">
        {stories.map((story) => (
          <div key={story.id} className="card">
            <div>
              <strong>{story.title}</strong>
              <p className="description">{story.description}</p>
            </div>
            <button
              onClick={() => handleDeleteStory(story.id)}
              className="delete-button"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;
