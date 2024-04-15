// Immediately Invoked Function Expression (IIFE)

(function chai(){
        console.log(`DB CONNECTED`);
})();


(function chaos(){
        console.log(`DB Connected`);
})();

((name) =>  {
     console.log(`DB Connected ${name}`);
})("Abd")