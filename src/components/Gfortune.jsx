
import './Gfortune.css'

function Gfortune({data}) {
  return (
    <div className='c-phrase'>
        <q className='c-text'>{data.phrase}</q>
        <br />
        <cite className='c-author'>{data.author}</cite>
    </div>
  )
}

export default Gfortune;