import React, { createContext, useState, useEffect } from "react";
import { getUsers, registerUser } from "../library/network/requests/users";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [userSession, setUserSession] = useState();

  async function handleRegister(formValues) {
    const users = await getUsers();
    if (users.data.find((user) => user.username !== formValues.username)) {
      registerUser(formValues);
    } else {
      console.log("error");
    }
  }

  async function handleLogin(formValues) {
    const users = await getUsers();
    const user = users.data.filter(
      (user) => user.username === formValues.username
    );
    if (user.length > 0) {
      await localStorage.setItem("@user", JSON.stringify(user[0]));
    } else {
      console.log("error");
    }
  }

  async function handleLogout() {
    await localStorage.removeItem("@user");
    setUserSession();
  }

  useEffect(() => {
    async function getUser() {
      const user = await localStorage.getItem("@user");
      setUserSession(JSON.parse(user));
      console.log(userSession);
    }
    if (!userSession) {
      getUser();
    }
  }, [userSession]);
  return (
    <AuthContext.Provider
      value={{ userSession, handleRegister, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
