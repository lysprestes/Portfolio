import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import lys from '../../assets/lys.png'
import './Header.css'

const Header = () => {
  // const { homepage, title } = header
  const { homepage } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          // <a href={homepage} className='link'>
          <a href={homepage} target='_blank'>
            <img src={lys} alt='Profile picture'  className='picture'/>
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
