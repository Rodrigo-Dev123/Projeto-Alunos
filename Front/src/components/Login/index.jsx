import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "../../services/axios";
import "../../scss/custom.scss";
import { login } from "../../store/auth/authSlice";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const hundleForm = async (e) => {
    e.preventDefault();
    const response = await axios.post('/tokens', {
      email, password,
    });

    dispatch(login(response.data));
    // console.log(console.log(response.data));
  };

  const authStore = useSelector((state) => state.auth);

  console.log(authStore);

  return (
    <form onSubmit={hundleForm} className="login-form">
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="E-mail"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Senha"
      />
      <button type="submit">Logar</button>
    </form>
  );
}

export default Login;
