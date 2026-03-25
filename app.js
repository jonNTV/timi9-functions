console.log("Hello world")

let running = true;

function getEqual(number){

    for (let i = 1; i <= number; i++ ) {
        if (i % 2 === 0){
            console.log(`even ${i}`);
        } else {
            console.log(`odd ${i}`);
            
        }
    }

    return false;
}

getEqual(22)

