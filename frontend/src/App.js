import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import StickyNav from "./components/stickyNav";
import Front from "./pages/front";
import Cart from "./pages/cart";
import Footer from "./components/footer";
import Login from "./pages/login";
import Packages from "./pages/packages";
import TopBar from "./components/topBar";
import Register from "./pages/register";
import Nav from "./components/nav";
class App extends Component {
  componentDidMount = () => {
    if (localStorage.getItem("lang") === null) {
      fetch("https://extreme-ip-lookup.com/json/")
        .then((res) => res.json())
        .then((response) => {
          localStorage.setItem(
            "lang",
            response.countryCode.toLowerCase() === "bd" ? "bd" : "en"
          );
        })
        .then(() =>
          this.setState({
            lang: localStorage.getItem("lang"),
          })
        )
        .catch((data, status) => {});
    } else {
      this.setState({
        lang: localStorage.getItem("lang"),
      });
    }
  };

  handleLangChange = () => {
    this.setState({ lang: this.state.lang === "bd" ? "en" : "bd" }, () =>
      localStorage.setItem("lang", this.state.lang)
    );
    this.resetCart();
  };
  resetCart = () => {
    this.setState({ cart: [] });
  };
  handleBuyProduct = (a) => {
    var cart = this.state.cart;
    cart.push(a);
    this.setState({ cart });
  };
  state = {
    lang: "",
    cart: [],
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <StickyNav
            cartCount={this.state.cart.length}
            onLangChange={this.handleLangChange}
            lang={this.state.lang}
          />
          <Route
            path="/"
            render={(a) => (
              <Nav
                cartCount={this.state.cart.length}
                lang={this.state.lang}
                onLangChange={this.handleLangChange}
                {...a}
              />
            )}
          />

          <Switch>
            <Route
              path="/packages"
              render={(a) => (
                <Packages
                  cartCount={this.state.cart.length}
                  onBuyProduct={(a) => this.handleBuyProduct(a)}
                  lang={this.state.lang}
                  onLangChange={this.handleLangChange}
                  {...a}
                />
              )}
            />
            <Route
              path="/cart"
              render={(a) => (
                <Cart
                  cartCount={this.state.cart.length}
                  onBuyProduct={(a) => this.handleBuyProduct(a)}
                  lang={this.state.lang}
                  cart={this.state.cart}
                  {...a}
                />
              )}
            />
            <Route path="/login" render={(a) => <Login {...a} />} />
            <Route path="/register" render={(a) => <Register {...a} />} />
            <Route
              path="/"
              render={(a) => (
                <Front
                  cartCount={this.state.cart.length}
                  onBuyProduct={(a) => this.handleBuyProduct(a)}
                  onLangChange={this.handleLangChange}
                  lang={this.state.lang}
                  {...a}
                />
              )}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
