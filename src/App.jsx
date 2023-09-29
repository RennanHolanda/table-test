import './App.css'
import { GiFunnel } from 'react-icons/gi';
import { CiStreamOn } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineCreditCard } from "react-icons/ai";
import { LuClipboardList } from "react-icons/lu";
import { LiaPaperclipSolid } from "react-icons/lia";

const App = () => {
  return (
    <div className='container'>
       <h1>Exemplo de Tabela HTML</h1>
    <table>
        <tr>
            <th></th>
            <th>PACIENTE</th>
            <th>OPERADORA</th>
            <th>PROTOCOLO</th>
            <th>SENHA</th>
            <th>STATUS</th>
            <th><GiFunnel/>ENVIO</th>
            <th><GiFunnel/>ATUALIZAÇÃO</th>
        </tr>
        <tr>
            <td><CiStreamOn/></td>
            <td>
              <p><RxAvatar/> REJANE ALBUQUERQUE DE ARAUJO</p>
              <p><AiOutlineCreditCard/> 083927510</p>
            </td>
            <td>AMIL</td>
            <td><LuClipboardList/> 310019187</td>
            <td>
              <p><LuClipboardList/> EX2022012306689</p>
              <p><LiaPaperclipSolid/> Token justificado</p>
            </td>
            <td>AUTORIZADO</td>
            <td>24/07/2022-15:53</td>
            <td>24/07/2022-15:53</td>
        </tr>
    </table>
    </div>
  )
}

export default App
