import './App.css';
import Header from './Header.js';
import Title from './Title.js';
import Image from './Image.js';
import Article from './Article.js';
import IngredientList from './IngredientList.js';
import Footer from './Footer';
import NotepadImage from './NotepadImage.js';

function App() {
  return (
    <div className="App">
        <Header />
        <Title />
        <Image />
        <Article />
      
        <div className='notepad-image'>
        <NotepadImage />
        </div>
        <IngredientList />
        <Footer />
    </div>
  );
}

export default App;
