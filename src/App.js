import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import Delete from './components/Delete';

function App() {
  return (
    <div >
      <AddBook/>
      <SearchBook/>
      <Delete/>
      
    </div>
  );
}

export default App;
