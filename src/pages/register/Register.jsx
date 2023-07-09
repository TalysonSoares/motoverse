import styles from "./Register.module.css"

const Register = () => {
  return (
    <div>
        <h1>Cadrastre-se para finalizar compra</h1>
        <p>Crie sua conta</p>
        <form className={styles.register}>
            <label>
                <span>Nome:</span>
                <input type="text" name="displayName" required placeholder="Digite seu nome" />
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" required placeholder="Digite seu e-mail" />
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" required placeholder="Crie sua senha" />
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input type="password" name="confirmPassword" required placeholder="Confirme sua senha" />
            </label>
            <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register