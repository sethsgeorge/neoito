const f = require("./calcfunc.js");


let args = process.argv;


if (args.length != 5) {
    console.log("Give proper command line arguments");
    process.exit(1);
}
else if (args[2] == "+")
    result = f.add(+args[3], +args[4]);

else if (args[2] == '-')
    result = f.sub(args[3], args[4]);

else if (args[2] == '*')
    result = f.mul(args[3], args[4]);

else if (args[2] == '/')
    result = f.div(args[3], args[4]);

else if (args[2] == '%')
    result = f.mod(args[3], args[4]);

else if (args[2] == '**')
    result = f.pow(args[3], args[4]);

else {
    console.log("Give proper command line arguments");
    process.exit(1);
}

console.log(`Result of ${args[3]} ${args[2]} ${args[4]} = ${result}`)


