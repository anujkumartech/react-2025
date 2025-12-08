import './App.css'

function App() {

    const books = [
      {id: 10, name: 'Learn React', author: 'XYZ'}, // index 0
      {id: 20, name: 'Learn Python', author: 'ABC'}, // index 1
      {id: 30, name: 'Learn NodeJS', author: 'CDE'}, // index 2
      {id: 40, name: 'Learn Python', author: 'ABC'}, // index 3
    ]

    const addToBook  = () => {
      console.log('add to book called');
      books.push(
        {id: 50, name: 'Learn Java', author: 'EFR'}
      )
      console.log('books array', books);
    }
    // no display of updated book
    return (
      <>
        <h1>My Book Store App</h1>
        {
          books.map((book, index) => <li key={index}>Book Title: {book.name} by Author: {book.author}</li>)
        }
        <br />
        <button onClick={addToBook}> Add Book</button>
      </>
    )
}

export default App


/*

          App
           |
          Greetings
           |
          SubGreeting 
*/
