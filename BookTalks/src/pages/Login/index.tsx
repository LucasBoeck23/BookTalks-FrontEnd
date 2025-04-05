import "./index.css";
import logo from "/logo.png";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import ModalRegister from "../../components/ModalRegister";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [modalRegister,setModalRegister] = useState<boolean>(false);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };
  const handleshowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleModalRegister = () => {
    setModalRegister(!modalRegister);
  };
  return (
    <div className="container">
      <div className="backgroung" />
      <div className="backgroundAux" />
      <div className="loginContent">
        <img className="Logo" src={logo} alt="Logo Booktaks" />
        <form className="InputContent" autoComplete="off">
          <input
            className="inputLogin"
            inputMode="text"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <div className="senhaContainer">
            <input
              className="inputSenha"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={senha}
              onChange={handlePassword}
            />
            <button
              className="btnVision"
              type="button"
              onClick={handleshowPassword}
            >
              {showPassword ? (
                <IoEyeSharp size={24} color="white" />
              ) : (
                <BsEyeSlashFill size={24} color="white" />
              )}
            </button>
          </div>
        </form>
        <div className="linkRegister">
          <a className="linkStyle" href="#">
          Esqueceu sua senha?
          </a>

          <div className="linkRegisterHendler">
            <p>Primeira vez no Booktalks?</p>{" "}
            <a className="linkStyle" href="#" onClick={handleModalRegister}>
              Registre-se
            </a>
          </div>
        </div>
        <div className="btnSubmitContainer">
          <button className="btnSubmit" type="submit">
            ENTRAR
          </button>
        </div>
      </div>
        <footer className="footerContent">
          ₢ 2024 <a href="">Termos do Booktalks</a><a href="">Política de Privacidade</a><a href="">Política de Cookies</a><a href="">Relatar um problema</a>
        </footer>
        {modalRegister? < ModalRegister
                          modalRegister={modalRegister}
                          setModalRegister={setModalRegister}
                        />
                        :null}
    </div>
  );
};

export default Login;
