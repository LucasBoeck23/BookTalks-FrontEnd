import React, { useState } from 'react';
import style from './index.module.css';
import { IoMdArrowRoundBack } from "react-icons/io";

interface ModalRegisterProps {
  modalRegister: boolean;
  setModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRegister:React.FC<ModalRegisterProps>=({ modalRegister, setModalRegister }) => {
    const [date, setDate] = useState<string>("");
    const [dateFormated, setDateFormated] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [correctPassword, setCorrectPassword] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [name, setName] = useState<string>("");

    const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/[^0-9]/g, "");
        if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
        if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5);
        setDate(value.slice(0, 10));
      };
    
      const handleBlur = () => {
        const parts = date.split("/");
        if (parts.length === 3) {
          const [day, month, year] = parts;
          if (day.length === 2 && month.length === 2 && year.length === 4) {
              setDateFormated(`${year}-${month}-${day}`);
              console.log(dateFormated);
          } else {
            setDateFormated("");
          }
        }
      };

      const handleModalRegister = () => {
        setModalRegister(!modalRegister);
      };

      const handleName = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value);
      }
      const handleNickname = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setNickname(event.target.value);
      }
      const handleEmail = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value);
      }
      const handlePassword = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value);
      }
      const handleCorrectPassword = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setCorrectPassword(event.target.value);
      }


    return(
    <div className={style.container}>
      <header className={style.header}>
        <button onClick={handleModalRegister}>
          <IoMdArrowRoundBack size={30} color='white' />
        </button>
        <h1>Registre-se</h1>
      </header>
        <form action="" className={style.form}>
        <input type="text"
        placeholder='Apelido'
        value={nickname}
        onChange={handleNickname}
        className={style.input}
        />
        <input type="text"
        placeholder='Nome'
        value={name}
        onChange={handleName}
        className={style.input}
        />
        <input type="text"
        placeholder='Data de Nascimento (dd/mm/aaaa)'
        value={date}
        onChange={handleDate}
        onBlur={handleBlur}
        className={style.input}
        />
      
        <input type="text"
        placeholder='Email'
        value={email}
        onChange={handleEmail}
        className={style.input}
        />
      
        <input type="password"
        placeholder='Senha'
        value={password}
        onChange={handlePassword}
        className={style.input}
        />

        <input type="password"
        placeholder='Confirmar senha'
        value={correctPassword}
        onChange={handleCorrectPassword}
        className={style.input}
        />
         <div className="btnSubmitContainer">
          <button className="btnSubmit" type="submit">
            REGISTRAR
          </button>
        </div>
        </form>
    </div>
    );
}

export default ModalRegister;