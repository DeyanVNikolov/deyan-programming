function invalidnumber(input) {
    number = Number(input[0]);
    if (number >= 100 && number <= 200 || number == 0) {
        // do nothing
    }
    else {
        console.log("invalid");

    }
}

invalidnumber(["100"]);