import styles from "./Dashboard.module.css"

import { Link } from "react-router-dom";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const {documents: products, loading} = useFetchDocuments("products");

  const {deleteDocument} = useDeleteDocument("products")

  const handleDelete = (productId) => {
    const confirmed = window.confirm("Tem certeza que deseja excluir esta moto?")

    if(confirmed) {
      deleteDocument(productId)
    }
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.dashboard}>
        <h2>Dashboard</h2>
        <p>Gerencie suas motos</p>
        <>
        <div className={styles.productHeader}>
          <span>Título</span>
          <span>Ações</span>
        </div>

        {products && products.map((product) => <div key={product.id} className={styles.productRow}>
           <p>{product.title}</p>
           <div>
              <Link to={`/product/${product.id}`} className="btn btn-outline">Ver</Link>
              <Link to={`/product/edit/${product.id}`} className="btn btn-outline">Editar</Link>
              <button onClick={() => handleDelete(product.id)} className="btn btn-outline btn-danger">Excluir</button>
           </div>
        </div>)}
        </>
    </div>
  )
}

export default Dashboard