import './App.css';
import Header from './Header.js';
import Title from './Title.js';
import Image from './Image.js';
import Article from './Article.js';
import NotePad from './NotePad.js';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Title />
        <Image />
        <Article />
        <NotePad />
        <Footer />
    </div>
  );
}

export default App;
