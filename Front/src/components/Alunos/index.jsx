import { useEffect } from "react";
import axios from "../../services/axios";

function Alunos() {
    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('/alunos')
                .then(response => response);
            console.log(data);
        }

        fetchData();
    }, []);

   return (
    <div className="App">
        <h1>Alunos</h1>
    </div>
   )
}

export default Alunos;