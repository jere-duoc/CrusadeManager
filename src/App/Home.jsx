import '../assets/style/Noseaun.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='posicion-text'>
                <h1>Gestiona tu ejército y su historia</h1>
                <h3>Digitaliza y organiza tus partidas de Warhammer de forma
                    sencilla. Lleva control de unidades, experiencia, niveles,
                    reliquias y mejoras sin necesidad de papel. Regístrate para
                    comenzar a gestionar tus campañas, registrar resultados y
                    seguir la evolución de tus ejércitos de manera clara y
                    automática.
                </h3>

                <div>
                    <Link to="/login" className='btn btn-primary m-2'>Login </Link>
                    <Link to="/register" className='btn btn-secondary m-2'>Register </Link>
                </div>

            </div>

            <div className='wrapper'>
                <div className="bubble">

                </div>
            </div>

        </>
    )
};

export default Home