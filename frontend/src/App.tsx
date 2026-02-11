import './App.css'
import { SampleProducts } from './Data'

function App() {
  return (
    <>
      <header>Mern Project</header>
      <main>
        <ul>
          {SampleProducts.map((Product) => (
            <li>
              <img
                src={Product.image}
                alt={Product.name}
                className="product-image"
              />
              <h2>{Product.name}</h2>
            </li>
          ))}
        </ul>
      </main>
      <footer>thank you</footer>
    </>
  )
}

export default App
