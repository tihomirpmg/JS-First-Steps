function concatenateDate(input) {
    let firstName = input[0];
    let secondName = input[1];
    let years = input[2];
    let city = input[3];
    console.log(`You are ${firstName} ${secondName}, a ${years}-years old person from ${city}.`)
}
concatenateDate(["Tihomir", "Naydenov", 20, "Kazanlak"])