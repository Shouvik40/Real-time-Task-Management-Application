import React, { useEffect, useState } from "react";
import { Auth } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const auth = getAuth();
    try {
      let signIn = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {}
  };
  return (
    <>
      <div>
        <form action="submit">
          <label htmlFor="Email">Email:</label>
          <input type="email" name="Email" id="Email" onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="Password">Password:</label>
          <input type="password" name="Passowrd" id="Password" onChange={(e) => setPassword(e.target.value)} />

          <button onClick={loginHandler}>Login</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
