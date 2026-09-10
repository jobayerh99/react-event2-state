
import './App.css'

function App() {

  // function handleClick (){
  //   alert('Button Clicked')
  // }

  const handleClick = () => {
    alert('click me 3')
  }


  const handleAddToCart = (id: number) => {
    alert('Buying This ' + id)
  }

  return (
    <>

      {/* <button onclick="handleClick()">Click Me</button> */}

      <button onClick={handleClick}>Click Me 2</button>

      <button onClick={handleClick}>Click Me 3</button>

      <button onClick={() => {
        alert('click me 4')
      }}>Click Me 4</button>

      <button onClick={() => handleAddToCart(65)}>Add To Cart</button>
    </>
  )
}

export default App
