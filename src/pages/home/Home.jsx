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
        <div className={styles.card}>
          <div className={styles.image}></div>
          <h1>Harley-Davidson</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.image}></div>
          <h1>Harley-Davidson</h1>
        </div>
      </div>
    </div>
  )
}

export default Home