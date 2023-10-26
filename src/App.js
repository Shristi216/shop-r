import "./App.css";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  const products = [
    {
      id: 1,
      productName: "product1",
      image: "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
      price: 229,
    },
    {
      id: 2,
      productName: "product2",
      image: "http://dummyimage.com/126x100.png/5fa2dd/ffffff",
      price: 199,
    },
    {
      id: 3,
      productName: "product3",
      image: "http://dummyimage.com/221x100.png/5fa2dd/ffffff",
      price: 296,
    },
    {
      id: 4,
      productName: "product4",
      image: "http://dummyimage.com/204x100.png/dddddd/000000",
      price: 197,
    },
  ];
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
