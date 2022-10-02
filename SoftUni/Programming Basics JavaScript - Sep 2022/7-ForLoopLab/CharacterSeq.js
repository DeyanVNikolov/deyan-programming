function CharacterSequence(input) {
    let text = input.shift();
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
}

CharacterSequence(["softuni"]);