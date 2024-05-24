function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
}


function introduction(name = Aki) {
    return (`Hi, my name is ${name}.`);
}
  
function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function sayHelloTo (name, language) {
    return (`Hello, ${name}!`);
}

function introductionWithLanguageOptional (name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}