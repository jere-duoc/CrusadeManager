import './assets/style/App.css'
import Datasheet from './assets/components/Datasheet.jsx'
import Navbar_Menu from './assets/components/Navbar_Menu.jsx'
import Navbar_Evento from './assets/components/Navbar_evento.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Emparejamiento from './Emparejamiento.jsx';
import Evento from './evento.jsx';

function App() {

  return (
    <>
      
      <Navbar_Evento/>
      <Evento/>
    </>
  )
}

export default App
