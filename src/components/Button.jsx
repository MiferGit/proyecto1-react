import './Button.css'

function Button({data}) {
  return (
    
    <button onClick={data.changePhrase} className='c-button'>Cambiar frase</button>
  )
}

export default Button