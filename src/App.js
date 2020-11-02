import './App.css';
import Header from './Header.js';
import Title from './Title.js';
import Image from './Image.js';
import Article from './Article.js';
import IngredientList from '.IngredientList.js';
import Footer from './Footer';
import NotepadImage from './NotepadImage.js';

function App() {
  return (
    <div className="App">
        <Header />
        <Title />
        <Image />
        <Article />
<<<<<<< HEAD

        <div className='notepad-image'>
        <NotepadImage />
        <IngredientList 
          className='list-one'
=======
        <NotePadImage />
        <IngredientList />
        {/* <IngredientList 
>>>>>>> 221a151d64e2ba959c539acaefcc64f42ca36714
          name=' milk' 
          amount='1 1/2' />
        <IngredientList 
          name=' marscarpone' 
          amount='1/2 cup' />
        <IngredientList 
          name=' pink salt' 
          amount='1/2 tsp' />
        <IngredientList 
          name='Black Mission figs' 
          amount='1 lb' />
        <IngredientList 
          name=' brown sugar' 
          amount='1/2 cup' />
        <IngredientList 
          name=' water' 
          amount='2-4 tbsp' />
        <IngredientList 
          className='list-two'
          name=' heavy cream' 
          amount='1 1/2 cups' />
        <IngredientList 
          name=' granulated sugar' 
          amount='1/3 cup' />
        <IngredientList 
          name='egg yolks' 
          amount='2' />
        <IngredientList 
          name='lemon, juiced' 
          amount='1' />
        <IngredientList 
          name=' butter' 
          amount='2 tbsp' />
        <IngredientList 
          name='honey roasted pecans, roughly chopped' 
<<<<<<< HEAD
          amount='1 cup' />
        </div>


=======
          amount='1 cup' /> */}
>>>>>>> 221a151d64e2ba959c539acaefcc64f42ca36714
        <Footer />
    </div>
  );
}

export default App;
