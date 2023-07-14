import styles from "./Product.module.css"

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument"
import { useAuthValue } from "../../context/AuthContext";

const Product = () => {
    const { id } = useParams();
    const { document: product} = useFetchDocument("products", id);
    const { user } = useAuthValue();
    console.log(user)
  return (
    <div className={styles.details}>
        {product && (
          <>
            <div className={styles.imageDetail}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.information}>
              <h3>{product.title}</h3>
              <h6>{product.displacement}cc</h6>
              <h5>R$ {product.price}</h5>
              <p className={styles.description}>{product.body}</p>
              {user && <Link to={`/product/${id}/checkout/`} className="btn btn-outline">Comprar</Link>}
              {!user && <Link to={"/register"} className="btn btn-outline">Comprar</Link>}
            </div>
          </>
        )}
    </div>
  )
}

export default Product