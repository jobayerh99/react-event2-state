
import { Suspense } from 'react'
import './App.css'
import Users from './Users';
import Todos from './ToDo';

// import Batter from './Batter'
// import Card from './Card'
// import Counter from './Counter'

// const usersDataPromise = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json();
//   return data;
// }

const usersDataPromise = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return data;
}


const practiceDataPromise = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json();
  return data;
}


function App() {

  // function handleClick (){
  //   alert('Button Clicked')
  // }

  // const handleClick = () => {
  //   alert('click me 3')
  // }


  // const handleAddToCart = (id: number) => {
  //   alert('Buying This ' + id)
  // }

  return (
    <>

      <Suspense fallback={<P>Data Loading...</P>}>
        <Todos practiceDataPromise={practiceDataPromise()}></Todos>
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <Users usersDataPromise={usersDataPromise()}></Users>
      </Suspense>
      

      

      

      {/* <Batter></Batter>

      <Counter></Counter> */}

      {/* <Card></Card> */}

      {/* <button onclick="handleClick()">Click Me</button> */}

      {/* <button onClick={handleClick}>Click Me 2</button>

      <button onClick={handleClick}>Click Me 3</button>

      <button onClick={() => {
        alert('click me 4')
      }}>Click Me 4</button>

      <button onClick={() => handleAddToCart(65)}>Add To Cart</button> */}
    </>
  )
}

export default App
