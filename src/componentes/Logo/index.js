import logo from '../../imagens/logo.svg'
import './estilo.css'

function Logo() {
    return (
        <div className='logo'>
            <img scr={logo} alt='logo' className='logoImg'/>
            <p><strong>Alura Books</strong></p>
      </div>
    )
}

export default Logo