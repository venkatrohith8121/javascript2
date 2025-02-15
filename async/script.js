function outerFunction() {
    let outerVariable = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVariable);  // innerFunction can access outerVariable
    }
  
    return innerFunction;
  }
  
  let closureFunction = outerFunction(); // outerFunction is executed, returning innerFunction
  closureFunction(); // This will log "I am from the outer function"
  