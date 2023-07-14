import styles from "./Product.module.css"

import { useParams } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument"

const Product = () => {
    const { id } = useParams();
    const { document: product} = useFetchDocument("products", id);
  return (
    <div>
        {product && (
          <>
          <h1>{product.title}</h1>
          <img src={product.image} alt="" />
          
          </>

        )}
    </div>
  )
}

export default Product