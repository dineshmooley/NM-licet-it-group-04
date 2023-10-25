function App() {
  let a = 0, b = 0
  let op = ""
  let flag = 0
  let ans = 0
  function calc(val) {
    if(val === "add")  {
      op = "+"
      flag = 1
    }
    else if(val === "sub") {
      op = "-"
      flag = 1
    }
    else if(val === "equ") {
      if(op === "+") {
        ans = a + b
      }
      else{
        ans = a - b
      }
      window.alert(a + op + b + "=" + ans);
    }
    else if(flag === 0) {
      a = a*10 + val;
      console.log(a)
    } 
    else{
      b = b*10 + val;
    }
  }
  return (
    <div>
        <center>
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" id="1" onClick={calc(1)}>1</button>
            <button type="button" class="btn btn-outline-primary" id="2" onClick={calc(2)}>2</button>
            <button type="button" class="btn btn-outline-primary" id="3" onClick={calc(3)}>3</button>
          </div>

          <br />

          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" id="4" onClick={calc(4)}>4</button>
            <button type="button" class="btn btn-outline-primary" id="5" onClick={calc(5)}>5</button>
            <button type="button" class="btn btn-outline-primary" id="6" onClick={calc(6)}>6</button>
          </div>

          <br />

          <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary" id="add" onClick={calc("add")}>+</button>
          <button type="button" class="btn btn-outline-primary" id="sub" onClick={calc("sub")}>-</button>
          <button type="button" class="btn btn-outline-primary" id="equal" onClick={calc("equ")}>=</button>
        </div>

        </center>
    </div>
  );
}

export default App;
