import styles from "./CreateProduct.module.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState('');
  const [displacement, setDisplacement] = useState("");
  const [formError, setFormError] = useState("");

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
    <div className={styles.createProduct}>
      <h2>Adicionar moto</h2>
      <p>Adicione uma nova moto ao catálogo de vendas</p>
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
        <label>
          <span>Preço:</span>
          <input type="text" name="price" required placeholder="Insira o preço da moto" onChange={(e) => setPrice(e.target.value)} value={price}/>
        </label>
        <label>
          <span>Descrição:</span>
          <textarea name="body" required placeholder="Insira o descrição do produto" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
        </label>
        {!response.loading && <button className="btn">Adicionar</button>}
        {response.loading && <button className="btn" disabled>Aguarde...</button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default CreateProduct