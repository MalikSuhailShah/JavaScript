function chai() {
  console.log("DB Connected");
}

// chai()

(function chia() { //=> named IIFE
  console.log(`DB CONNECTED`);
})(); // always use semicolon to end the execution call 

//syntax:(function defn)(execution call)

( () => { //=> Un named IIFE
    console.log(`DB CONNECTED TWO`)
})();

( ( name ) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("Malik")