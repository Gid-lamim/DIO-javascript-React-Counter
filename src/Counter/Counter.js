function Counter () {
    let number = 10;

    function addNumber(){
        number = number + 1;
        document.getElementById("counter-box").innerHTML = number;

    }
    function subtractNumber(){
        number = number - 1;
        document.getElementById("counter-box").innerHTML = number;

    }
    return <div>
                <h2 id="counter-box">{number}</h2>
                <div><button onClick={addNumber} ig="a">Increase</button><button onClick={subtractNumber}>Decrease</button></div>

            </div>
}

export default Counter;