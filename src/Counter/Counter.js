import {useState} from 'react';

function Counter () {
    
    const [number, changeNumber] = useState(1);

    return <div>
                <h2 id="counter-box">{number}</h2>
                <div><button onClick={()=> changeNumber(number + 1)} >Increase</button><button onClick={()=> changeNumber(number - 1)}>Decrease</button></div>

            </div>
}

export default Counter;