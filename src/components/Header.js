import PropTypes from 'prop-types'
import Buttton from './Buttton'

const Header = ({title , onAdd, btnText, btnColor }) => {
  return (
    <header className='header'>
        <h1>Task tracker { title}</h1>
        <Buttton text={btnText} color={btnColor} onClick={ onAdd }/>
    </header>
  )
}

Header.defaultProps = {
    title: ''
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}
export default Header