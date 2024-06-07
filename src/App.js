import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div >
      <AddBook/>
      <SearchBook/>
      <Delete/>
      <ViewAll/>
      
      
    </div>
  );
}

export default App;
