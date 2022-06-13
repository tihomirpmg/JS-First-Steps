function projCr(input) {
    let name = input[0];
    let needHours = input[1] * 3;
    let numProjects = input[1];
    console.log(`The architect ${name} will need ${needHours} hours to complete ${numProjects} project/s.`);
}

projCr(
    ["George ",
        "4 "]
)