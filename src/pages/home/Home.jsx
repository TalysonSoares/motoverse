import ProductDetails from "../../components/productDetails.jsx/ProductDetails";
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import styles from "./Home.module.css"

const Home = () => {
  const {documents: products, loading} = useFetchDocuments("products");
  return (
    <div className={styles.home}>
      
      <h1>Home</h1>
      <div className={styles.products}>
        {products && products.map((product) => <ProductDetails key={product.id} product={product}/>)}
      </div>
    </div>
  )
}

export default Home