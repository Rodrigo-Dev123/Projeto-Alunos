import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <Link to='/alunos'>
        Alunos
      </Link>
    </div>
  );
}

export default Home;
