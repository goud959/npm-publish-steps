function hello(name='World') {
    return `Hello, ${name}!`;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function saySomething(input) {
    return `You said : ${input} Nice! Its all about practice.`;
}

module.exports = { hello, add, multiply, saySomething };