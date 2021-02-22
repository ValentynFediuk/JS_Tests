function theLargest() {
    let x = 1;
    let y = 2;
    let z = 3;

    
    if (x > y) {
        if (x > z) {
            console.log(x)
        } 
    } else if (y > z) {
        console.log(y)
    } else {
        console.log(z)
    }
}

theLargest()