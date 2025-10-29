import CineBackground from "../components/CineBackground"
import TextField from "../components/TextField"


const Login = () => {
  return (
    <CineBackground>
      <div className="bg-card w-96 md:w-[412px] min-h-60 p-4 gap-4 flex flex-col items-start justify-start">
        <TextField
          id="username"
          label="Nome/E-mail"
          placeholder="Digite seu nome/E-mail"
        />
        <TextField
          id="password"
          label="Senha"
          placeholder="Digite sua senha"
        />
        <div className="flex justify-between items-center w-full">
          <a href="#" className="font-normal underline-offset-3">Esqueci minha senha</a>
          <button>Entrar</button>
        </div>
      </div>
    </CineBackground>
  )
}

export default Login