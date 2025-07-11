'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState(""); const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => { 
      e.preventDefault(); 
      localStorage.setItem("username", username); 
      localStorage.setItem("password", password);
      router.push('/blog');
   };
  return (
    <div className="login-container">
      <div className="login">
        <h1>Login</h1>
        <form className="login-input" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your name" value={username} required onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Enter password" value={password} required onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
