import React, {useState , useEffect} from 'react'
import Cart from "./components/Cart/Cart"
import NavBar from './components/NavBar/NavBar';
import {commerce} from './lib/commerce'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import "./style.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,Link

} from "react-router-dom";
import Products from './components/Products/Products'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Scrollspy from 'react-scrollspy'

const App = () => {
    //eslint-disable-next-line
    
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState({})
    
  
      

    const fetchProducts = async () => {
        const {data: products} = await commerce.products.list();
        const { data: categoriesData } = await commerce.categories.list();
        console.log({products})
        const prodottoPerCategoria = await categoriesData.reduce((acc, category) => {
          return[
            ...acc,
            
            {
              ...category,
              productsData: products.filter((product)=>
                product.categories.find((cat)=> cat.id === category.id)
              ),
            },
          ];
        }, []);
        
        console.log({prodottoPerCategoria})
        
        setCategories(prodottoPerCategoria);
      };

      const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };
      //eslint-disable-next-line
    const aggiungiAlCarrello=  async (productId, quantity) =>{
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    const svuotaCarrello = async () => {
        const response = await commerce.cart.empty();    
        setCart(response.cart);
      };

      const aggiornaCarrello = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity});
        setCart(cart);
      };

      const rimuoviElemento = async (productId) =>{
        const {cart} = await commerce.cart.remove(productId);
        setCart(cart);
      }

      

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);


    for(var i=0;i<categories.length;i++){
      console.log(categories[i].name)
    }
    
    


    return(
      <Router>
        
         <NavBar totalItems={cart.total_items}/>

          <Switch>
            <Route exact path="/">
              <Homepage/>
              <h1>Prodotti:</h1>
              <Scrollspy items={categories} currentClassName="is-current">
                <Products  categories={categories} onAddToCart={aggiungiAlCarrello}/>
              </Scrollspy>
            </Route>
           
            <Route exact path="/products">
              <Products  categories={categories} onAddToCart={aggiungiAlCarrello}/>
            </Route>

            <Route exact path="/cart">
            <ArrowBackSharpIcon className="back" component={Link} to="/products"/>
              <Cart cart={cart} empty={svuotaCarrello} update={aggiornaCarrello} remove={rimuoviElemento} />
            </Route>

            <Route exact path="/product-view/:id">
            
              <SingleProduct onAddToCart={aggiungiAlCarrello}/>
            </Route>
            
           </Switch> 
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           
            <Footer id="footer"/>
        
        </Router>
    )
}

export default App;
