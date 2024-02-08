import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <Link to="/alunos">Alunos</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
