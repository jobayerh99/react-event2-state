export default function Card() {

    let count = 0;

    const handleAddToCart = () => {
        counter = counter + 1;
    }

    return (

        <div>
            <h3>Shopping Card</h3>
            <p>Iteams In The Cart: {counter}</p>
            <button>Add</button>

        </div>
    )
}