import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title , onAdd, btnText}) => {
  return (
    <header className='header'>
        <h1>Task tracker { title}</h1>
        <Button text={btnText} onClick={ onAdd }/>
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