import { Link } from "react-router-dom";

import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product }) => {
    return (
        <>
            <div className={styles.card}>
                <img className={styles.image} src={product.image} alt={product.title} />
                <div className={styles.information}>
                    <p>{product.title}</p>
                    <span className={styles.brand}>{product.brand}</span>
                    <span>{product.displacement}cc</span>
                    <span>R$ {product.price}</span>
                    <Link to={`/product/${product.id}`} className={styles.buy}><span>Detalhes</span></Link>
                </div>
            </div>
        </>

    )
}

export default ProductDetails