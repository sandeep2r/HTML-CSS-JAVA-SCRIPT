function nameValidation(ename){
    if(ename.charAt(0) == " "){
        return false;
    }
    if(ename.indexOf("  ") != -1){
        return false;
    }

    var i;
    var ch;
    for(var i = 0; i < ename.length; i++){
        ch = ename.charCodeAt(i);
        if(((ch < 65) || (ch > 123) || (ch > 91 && ch < 97)) && ename.charAt(i) != " "){
            return false;
        }
    }
    return true;
}

var ename = "Popat lal Singha";
    
console.log(nameValidation(ename));