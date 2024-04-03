// import logo from './logo.svg';
// export default function App()

import './App.css';
import './components/Card/Card'
import Card from './components/Card/Card';
import img1 from './img/spider-man.jpg'
import img2 from './img/dr-strange.jpg'
import img3 from './img/suicide-squad.jpg'

function App() {
  return (
    <div className="App">
      <Card descr='описание1' time='1 час 20 минут'  img={img1} alt='картинка1'/>
      <Card descr='описание2' time='1 час 22 минуты' img={img2} alt='картинка2'/>
      <Card descr='описание3' time='1 час 24 минуты' img={img3} alt='картинка3'/>
    </div>
  );
}

export default App;


// function step1(x){
//     step2(x)
// }

// function step2(x){
//     console.log(x);
// }

// step1('привет')