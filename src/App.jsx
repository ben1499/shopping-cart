import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState(null);

  let cart;
  let cartLength;

  if (products) {
    cart = products.filter((item) => item.quantity > 0)
    cartLength = cart.length;
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let filteredList = res.filter(
          (item) => item.category !== "electronics"
        );
        filteredList = filteredList.map((item) => ({ ...item, quantity: 0 }));
        setProducts(filteredList);
      });
  }, []);

  const addToCart = (id) => {
    const alteredList = products.map((item) => {
      if (item.id === id) return { ...item, quantity: ++item.quantity };
      else return item;
    });

    setProducts(alteredList);
  };

  const removeFromCart = (id) => {
    const alteredList = products.map((item) => {
      if (item.id === id) return { ...item, quantity: item.quantity != 0 ? --item.quantity : item.quantity };
      else return item;
    });

    setProducts(alteredList);
  };

  const inputQuantity = (id, value) => {
    const alteredList = products.map((item) => {
      if (item.id === id) return {...item, quantity: value}
      return item;
    })
    setProducts(alteredList);
  }

  return (
    <>
      <Header cartNumber={cartLength} />
      <Outlet context={[products, addToCart, removeFromCart, inputQuantity, cart]} />
      <Footer />
    </>
  );
}

export default App;
