import styles from "./Register.module.css"

import { useState, useEffect } from "react"

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais");
            return
        }

        console.log(user)
    }

  return (
    <div className={styles.register}>
        <h1>Registre-se agora para aproveitar todos os benefícios</h1>
        <p>Crie uma conta e finalize sua compra</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name="displayName" required placeholder="Digite seu nome" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" required placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" required placeholder="Crie sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input type="password" name="confirmPassword" required placeholder="Confirme sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            { error && <p className="error">{error}</p> }
            <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register