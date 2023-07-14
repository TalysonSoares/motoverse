import styles from "./Dashboard.module.css"

import { Link } from "react-router-dom";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const {documents: products, loading} = useFetchDocuments("products");

  const deleteDocument = (id) => {

  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
        <h2>Dashboard</h2>
        <p>Gerencie seus produtos</p>
        <>
        <div>
          <span>Título</span>
          <span>Ações</span>
        </div>

        {products && products.map((product) => <div key={product.id}>
           <p>{product.title}</p>
           <div>
              <Link to={`/product/${product.id}`} className="btn btn-outline">Ver</Link>
              <Link to={`product/edit/${product.id}`} className="btn btn-outline">Editar</Link>
              <button onClick={() => deleteDocument(product.id)} className="btn btn-outline btn-danger">Excluir</button>
           </div>
        </div>)}
        </>
    </div>
  )
}

export default Dashboard