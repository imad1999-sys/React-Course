import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import Home from '../src/components/Home.js';
import Products from '../src/components/Products.js';
import Product from '../src/components/Product.js';
import Cart from '../src/components/Cart.js';
import CartIcon from '../src/components/CartIcon.js';
import store from "../src/store/store.js";
import One from "../src/Component/One.js"
import './App.css';
import { Component, useState, useCallback } from 'react';
import ToggleButton from "../src/Component/ToggleButton.js";
import ThemeContext, { ThemeProvider } from "../src/Context/ThemeContext.js";
import { LoginFormClass, LoginFormFunction } from "../src/Forms/LoginForms.js";
import Count from "../src/Count/Count.js";
import Button from "../src/Buttons/Button.js";
import Header from "../src/Context/Header";
import Login from "../src/Context/Login.js";
import ToggleTheme from './Context/ToggleTheme';
import ClassComponent from "../src/Component/ClassComponent.js";
import FunctionComponent from './Component/FunctionComponent';

/*function useCount () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count => count + 1)
  }

  function decrement() {
    setCount(count => count - 1)
  }
  return {
    count  , increment , decrement
  };
}*/
function App() {
  //const {count , increment , decrement} = useCount();
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible ? <>
        <LoginFormFunction></LoginFormFunction>
        <LoginFormClass></LoginFormClass>
      </> : null}
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
    </div>
    /*<div>
      <ThemeProvider>
        <Header></Header>
        <ToggleTheme></ToggleTheme>
        <Login></Login>
      </ThemeProvider>
    </div>*/
  )
}
class AppClass extends Component {
  /* state = {
     theme: 'dark',
   }
   toggleTheme = () => {
     this.setState({
       theme: this.state.theme === 'dark' ? 'black' : 'white'
     })
   }*/
  /*state = {
    count: 0,
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }*/
  render() {
    return (
      <div>

      </div>
      /*<div>
        count = {this.state.count}
        <Button onClick={this.increment}>
          Increment
        </Button>
      </div>*/
      /*<div>
        <LoginFormClass></LoginFormClass>
        <LoginFormFunction></LoginFormFunction>
      </div>*/
      /*<ThemeContext.Provider value={{
        'theme': this.state.theme , 
        'toggleTheme' : this.toggleTheme , 
      }}>
      <div style={{ background: this.state.theme === 'dark' ? 'black' : 'white' }}>
          <h1>Hi From App</h1>
          <One />
          <ToggleButton></ToggleButton>
        </div>
      </ThemeContext.Provider>*/
      /* <Router>
         <div className="container">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <a className="navbar-brand" href="#">CatsStore</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
   
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                 <li className="nav-item active">
                   <Link className="nav-link" to="/">Home</Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/products">Products</Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/cart">Cart</Link>
                 </li>
               </ul>
               <CartIcon></CartIcon>
             </div>
           </nav>
           <Route path="/" exact component={Home}></Route>
           <Route path="/products" exact component={Products}></Route>
           <Route path="/products/:id" exact component={Product}></Route>
           <Route path="/cart" exact component={Cart}></Route>
         </div>
       </Router>*/
    );
  }
}

function appWithStore() {
  return <Provider store={store}>
    <App />
  </Provider>
}
export default appWithStore;
