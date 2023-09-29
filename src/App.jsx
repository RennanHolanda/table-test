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
       <table className='vertical-lines'>
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
            <td id='authorizedPatient'>AUTORIZADO</td>
            <td>24/07/2022-15:53</td>
            <td>24/07/2022-15:53</td>
        </tr>
        <tr>
            <td><CiStreamOn/></td>
            <td>
              <p><RxAvatar/> HELIO AUGUSTO FONSECA MELO</p>
              <p><AiOutlineCreditCard/> 073142059</p>
            </td>
            <td>AMIL</td>
            <td><LuClipboardList/> 310017024</td>
            <td>
              <p><LuClipboardList/> EX2022012306142</p>
              <p id='token'><LiaPaperclipSolid/> Token justificado</p>
            </td>
            <td id='authorizedPatient'>AUTORIZADO</td>
            <td>24/07/2022-13:23</td>
            <td>24/07/2022-13:23</td>
        </tr>
        <tr>
            <td><CiStreamOn/></td>
            <td>
              <p><RxAvatar/> LUIZ FELIPE CARNEIRO LEAO</p>
              <p><AiOutlineCreditCard/> 077953216</p>
            </td>
            <td>AMIL</td>
            <td><LuClipboardList/> 310014887</td>
            <td>
              <p><LuClipboardList/> EX2022012305427</p>
              <p><LiaPaperclipSolid/> Token justificado</p>
            </td>
            <td id='authorizedPatient'>AUTORIZADO</td>
            <td>24/07/2022-11:33</td>
            <td>24/07/2022-13:33</td>
        </tr>
    </table>
    </div>
  )
}

export default App
