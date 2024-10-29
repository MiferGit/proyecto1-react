import {useState} from 'react'
import { fon1, fon2, fon3, fon4 } from './assets/images/'
import phrases from './phrases.json'
import Button from './components/Button'
import Gfortune from './components/Gfortune'
import "./App.css"
import Title from './components/Title'


//*********************************** */
const images = [fon1, fon2, fon3, fon4 ]

function randomIndex(max) {
  return Math.floor(Math.random() * max)
}


//*********************************** */
function App() {

const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)])
const [img, setImg] = useState(images[randomIndex(images.length)])

function changePhrase(){
  setPhrase(phrases[randomIndex(phrases.length)])
  setImg(images[randomIndex(images.length)])
}


//************************************ */
  return (
   <div className='container-img' style={{backgroundImage: `url('${img}')`}}>
    {/*header*/}
    <Title />
    {/*content*/}
    <Gfortune data ={phrase} />
    {/*Button*/}
    <Button data = {{changePhrase}} />
   </div>
   
  )
}

//************************************ */

export default App
