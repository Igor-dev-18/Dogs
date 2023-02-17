import { createContext, useState } from "react";
import { TOKEN_POST,USER_GET } from "./api";

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // função para recuperar os dados do usuário
  async function getUser(token){
    const {url,options} = USER_GET(token);
    const response = await fetch(url,options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);

  }
  // função para logar o usuário
  async function userLogin(username,password){
      const {url,options} = TOKEN_POST({username,password});
      console.log(url,options);
    const tokenResponse = await fetch(url,options);
    const {token} = await tokenResponse.json();
    window.localStorage.setItem('token',token);
    getUser(token);
  }


  return (
    <UserContext.Provider value={{ userLogin,data }}>
      {children}
    </UserContext.Provider>
  );
}
