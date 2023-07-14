import styles from "./Checkout.module.css"

import { useParams, Link } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useAuthValue } from "../../context/AuthContext";
import { useState } from "react";

const Checkout = () => {
    const { id } = useParams();
    const { document: product} = useFetchDocument("products", id);
    const { user } = useAuthValue();

    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email)

  return (
    <div className={styles.checkout}>
        <div className={styles.form}>
                <div>
                    <h3>Informações Pessoais</h3>
                    <label>
                        <span>Nome:</span>
                        <input type="text" value={name}/>
                    </label>
                    <label>
                        <span>CPF:</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>E-mail:</span>
                        <input type="email"  value={email}/>
                    </label>
                    <label>
                        <span>Celular:</span>
                        <input type="text"   />
                    </label>
                </div>
                 <div>
                    <h3>Informações de pagamentos</h3>
                    <label>
                        <span>Nome do Cartão:</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Número do Cartão:</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Data de Validade:</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>CVV:</span>
                        <input type="text" />
                    </label>
                </div>
                    <h3>Finalizar Compra</h3>
                    <h3>Total: R$ {product && product.price}</h3>
                    <Link to={"/"} className="btn btn-outline">Finalizar</Link>
                </div>
                <div className={styles.summary}>
                    <h3>Resumo:</h3>
                    <span>
                        <img src={product &&product.image} alt="" />
                        {product && product.title}
                    </span>
                    <Link to={"/"} className="btn btn-outline">Finalizar</Link>
                </div>
    </div>
  )
}

export default Checkout