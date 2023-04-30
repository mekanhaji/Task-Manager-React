import PropTypes from 'prop-types'

const Buttton = ({color, text, onClick}) => {
  
  return (
    <button
      onClick={onClick}
      className='btn'
      style={{backgroundColor: color}}>
      {text}
    </button>
  )
}

Buttton.defaultProps = {
  text:'btn-default',
  color:'black',
}

Buttton.prototype ={
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Buttton