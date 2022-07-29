import './App.css';
function App() {
  let count = 1;
  function fill(control) {

    if (document.getElementById(control).innerHTML === "") {

      if (count % 2 === 0) {
        count++;
        document.getElementById(control).innerHTML = "o";
        document.getElementById("pa").innerHTML = "Turn first Player X ";
        if (win()) {
          setTimeout(() => {
            alert("Winner Second Player o", reset());

          }, 500);

          document.getElementById("pa").innerHTML = "winner second player O ";

        }
      }
      else {
        count++;
        document.getElementById(control).innerHTML = "x";
        document.getElementById("pa").innerHTML = "Turn second player O ";
        if (win()) {
          document.getElementById("pa").innerHTML = "winner First Player X ";
          setTimeout(() => {
            alert("Winner first Player x", reset());
          }, 500)
        }
      }
    }
  }
  function reset() {
    for (let i = 1; i <= 9; i++) {
      document.getElementById('div' + i).innerHTML = ""
    }
  };

  function win() {

    if (document.getElementById('div1').innerHTML !== "" && document.getElementById('div2').innerHTML !== "" && document.getElementById('div3').innerHTML !== "" &&
      document.getElementById('div1').innerHTML === document.getElementById('div2').innerHTML && document.getElementById('div2').innerHTML === document.getElementById('div3').innerHTML) {
      return true;
    }
    if (document.getElementById('div4').innerHTML !== "" && document.getElementById('div5').innerHTML !== "" && document.getElementById('div6').innerHTML !== "" &&
      document.getElementById('div4').innerHTML === document.getElementById('div5').innerHTML && document.getElementById('div5').innerHTML === document.getElementById('div6').innerHTML) {
      return true;
    }
    if (document.getElementById('div7').innerHTML !== "" && document.getElementById('div8').innerHTML !== "" && document.getElementById('div9').innerHTML !== "" &&
      document.getElementById('div7').innerHTML === document.getElementById('div8').innerHTML && document.getElementById('div8').innerHTML === document.getElementById('div9').innerHTML) {
      return true;
    }
    if (document.getElementById('div1').innerHTML !== "" && document.getElementById('div4').innerHTML !== "" && document.getElementById('div7').innerHTML !== "" &&
      document.getElementById('div1').innerHTML === document.getElementById('div4').innerHTML && document.getElementById('div4').innerHTML === document.getElementById('div7').innerHTML) {
      return true;
    } if (document.getElementById('div2').innerHTML !== "" && document.getElementById('div5').innerHTML !== "" && document.getElementById('div8').innerHTML !== "" &&
      document.getElementById('div2').innerHTML === document.getElementById('div5').innerHTML && document.getElementById('div5').innerHTML === document.getElementById('div8').innerHTML) {
      return true;
    } if (document.getElementById('div3').innerHTML !== "" && document.getElementById('div6').innerHTML !== "" && document.getElementById('div9').innerHTML !== "" &&
      document.getElementById('div3').innerHTML === document.getElementById('div6').innerHTML && document.getElementById('div6').innerHTML === document.getElementById('div9').innerHTML) {
      return true;
    }
    if (document.getElementById('div1').innerHTML !== "" && document.getElementById('div5').innerHTML !== "" && document.getElementById('div9').innerHTML !== "" &&
      document.getElementById('div1').innerHTML === document.getElementById('div5').innerHTML && document.getElementById('div5').innerHTML === document.getElementById('div9').innerHTML) {
      return true;
    } if (document.getElementById('div3').innerHTML !== "" && document.getElementById('div5').innerHTML !== "" && document.getElementById('div7').innerHTML !== "" &&
      document.getElementById('div3').innerHTML === document.getElementById('div5').innerHTML && document.getElementById('div5').innerHTML === document.getElementById('div7').innerHTML) {
      return true;
    }
  };

  return (

    <div className="App">
      <div id="div1" onClick={(e) => fill("div1")}></div><div id="div2" onClick={(e) => fill("div2")}></div><div id="div3" onClick={(e) => fill("div3")}></div>
      <div id="player">
        <button id="bottan" onClick={(e) => reset()}>Reset</button>
        <div>
          <h1>Created by Manish Jangid</h1>
          <h1 id="pa"> Turn first Player X </h1>
        </div>
      </div>
      <div id="div4" onClick={(e) => fill("div4")} ></div><div id="div5" onClick={(e) => fill("div5")}></div><div id="div6" onClick={(e) => fill("div6")}></div>
      <div id="div7" onClick={(e) => fill("div7")}></div><div id="div8" onClick={(e) => fill("div8")}></div><div id="div9" onClick={(e) => fill("div9")}></div>

    </div>
  );
}

export default App;
