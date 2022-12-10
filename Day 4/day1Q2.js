function replace(ename) {
    while (true) {
        if (ename.indexOf("fool") == -1) {
            return ename;
        }
        ename = ename.replace("fool", "good");
    }
}

var sentence = "you are fool ,no biggest fool";

console.log(replace(sentence));