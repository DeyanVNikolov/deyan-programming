function OldBooks(input) {
    let book = input.shift();
    let library = input.shift();
    let counter = 0;
    while (library != "No More Books") {
        if (library == book) {
            console.log(`You checked ${counter} books and found it.`);
            break;
        }
        counter++;
        library = input.shift();
    }
    if (library == "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }
}

OldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
