import './App.css';
import Header from './Header.js';
import Title from './Title.js';
import Image from './Image.js';
import Article from './Article.js';
import IngredientList from './NotePad.js';
import Footer from './Footer';
import { NotePadImage } from './NotePad.js';

function App() {
  return (
    <div className="App">
        <Header />
        <Title />
        <Image />
        <Article />
        <NotePadImage />
        <IngredientList 
          name=' milk' 
          amount='1 1/2' />
        <IngredientList 
          name=' mascarpone' 
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
          amount='1 cup' />
        <Footer />
    </div>
  );
}

export default App;
