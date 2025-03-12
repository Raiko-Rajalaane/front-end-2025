import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="rohenupp">Roheline nupp</button>
      
      {/* <i classname="sinitekst">Sinine tekst kaldkirja</i> */}
      <p className='sinitekst'>Sinine tekst kaldkirja</p>
      
      {/* <b className='rohetekst'>Roheline tekst piirjoonega</b> */}
      <p className='rohetekst'>Roheline tekst piirjoonega</p>

      <img className='lilleke' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg" alt="" />

      <div>
        <h2>HTML Table</h2>
        <table className='tabel'>
          <tr>
            <th>Firma</th>
            <th>Kontaktisik</th>
            <th>Riik</th>
          </tr>
          <tr>
            <td>Torutööd</td>
            <td>Paavel Jakob</td>
            <td>Eesti</td>
          </tr>
          <tr>
            <td>Kebabhouse</td>
            <td>Maiduk Lifecoach</td>
            <td>Türgi</td>
          </tr>
          <tr>
            <td>Thomann Music</td>
            <td>Till Lindemann</td>
            <td>Germany</td>
          </tr>
        </table>
      </div>

      <iframe  width="560" height="315"
      src="https://www.youtube.com/embed/hu-q2zYwEYs?si=bZvAGqzxj8_esLWs" frameborder="0">
      </iframe>  
      




    </>
  )
}

export default App
