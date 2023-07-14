import styles from "./EditProduct.module.css"

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditProduct = () => {
  const {id} = useParams();
  console.log(id)
  const { document: product} = useFetchDocument("products", id)  

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState('');
  const [displacement, setDisplacement] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {

    if(product) {
        setTitle(product.title);
        setBody(product.body);
        setImage(product.image);
        setBrand(product.brand);
        setPrice(product.price);
        setDisplacement(product.displacement);
        
    }
    
  }, [product])

  const {insertDocument, response} = useInsertDocument("products");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

    if(!title || !image || !body || !brand || !price || !displacement) {
      setFormError("Por favor, preencha todos os campos!x'")
    }

    if(formError) return;

    insertDocument({
      title,
      image,
      body,
      brand,
      price,
      displacement
    })

    navigate("/")
  }

  return (
    <div className={styles.editProduct}>
      {product && (
        <>
            <h2>Editando moto: {product.title}</h2>
            <p>Altere as informações da moto</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input type="text" name="title" required placeholder="Adicione o título do anúncio" onChange={(e) => setTitle(e.target.value)} value={title}/>
                </label>
                <label>
                    <span>Marca:</span>
                    <input type="text" name="brand" required  placeholder="Insira a marca da moto" onChange={(e) => setBrand(e.target.value)} value={brand}/>
                </label>
                <label>
                    <span>Cilindrada:</span>
                    <input type="text" name="displacement" required placeholder="Informe a cilindrada da moto" onChange={(e) => setDisplacement(e.target.value)} value={displacement}/>
                </label>
                <label>
                    <span>URL da imagem:</span>
                    <input type="text" name="image" required placeholder="Insira a url da imagem" onChange={(e) => setImage(e.target.value)} value={image}/>
                </label>
                <p className={styles.previewTitle}>Preview da imagem atual</p>
                <img className={styles.imagePreview} src={product.image} alt={product.title} />
                <label>
                    <span>Preço:</span>
                    <input type="text" name="price" required placeholder="Insira o preço da moto" onChange={(e) => setPrice(e.target.value)} value={price}/>
                </label>
                <label>
                    <span>Descrição:</span>
                    <textarea name="body" required placeholder="Insira o descrição do produto" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                </label>
                {!response.loading && <button className="btn">Editar</button>}
                {response.loading && <button className="btn" disabled>Aguarde...</button>}
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}
            </form>
        </>
      )}
    </div>
  )
}

export default EditProduct