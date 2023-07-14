import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import styles from "./Home.module.css"

const Home = () => {
  const {documents: products, loading} = useFetchDocuments("products");
  console.log(products)
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      {products && products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
      
    </div>
  )
}

export default Home