function Login() {
  return (
    <form className="d-flex flex-column container p-5 h-100 badge text-bg-info">
      <label htmlFor="name">Nome:</label>
      <input id="name" type="text" />
      <label htmlFor="email">E-mail:</label>
      <input id="email" type="email" />
    </form>
  );
}

export default Login;
