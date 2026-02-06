import { useState } from 'react';
import './App.css';
import { BoardProvider } from './context/BoardContext';
import StoriesPage from './component/StoriesPage';
import TicketsPage from './component/TicketsPage';

const App = () => {
  const [activePage, setActivePage] = useState('stories');

  return (
    <BoardProvider>
      <div className="app">
        <h1 className="app-title">Mini Jira (With useContext)</h1>
        <p className="app-subtitle">
          Notice: NO props passed! Components use useBoard() hook {'\u2713'}
        </p>

        <nav className="app-nav">
          <button
            onClick={() => setActivePage('stories')}
            className={activePage === 'stories' ? 'app-tab is-active' : 'app-tab'}
            type="button"
          >
            Stories
          </button>
          <button
            onClick={() => setActivePage('tickets')}
            className={activePage === 'tickets' ? 'app-tab is-active' : 'app-tab'}
            type="button"
          >
            Tickets
          </button>
        </nav>

        {activePage === 'stories' && <StoriesPage />}
        {activePage === 'tickets' && <TicketsPage />}
      </div>
    </BoardProvider>
  );
};

export default App;
