const btn = document.getElementById("btn");

btn.addEventListener("mouseover" ,() => {
    btn.classList.toggle("active");
});

btn.addEventListener("mouseout" , () => {
    btn.classList.toggle("active");
});

btn.addEventListener("click" , () => {
    document.getElementById("o").style.visibility = "visible";
    document.getElementById("o").innerHTML= null;
    const text = document.getElementById("t").value;
    const pattern = document.getElementById("p").value;
    if(text == "" || pattern == ""){
        document.getElementById("o").innerHTML += `Invalid Input.<br>Enter both a text and a pattern.`;
    }
    else{
        stringMatch(text,pattern);
    }
});

function stringMatch(text , pattern){
    n = text.length;
    m = pattern.length;

    if(m > n){
        document.getElementById("o").innerHTML += `Invalid Input.<br>The pattern must be shorter than the text.`;
        return;
    }

    for(var i=0;i<=(n-m);i++){
        var j=0;
        while(j<m && (pattern.charAt(j) == text.charAt(i+j))){
            document.getElementById("o").innerHTML +=  `'${pattern.charAt(j)}' matches '${text.charAt(i+j)}'<br>`;
            j++;
        }
        if (j === m){
            document.getElementById("o").innerHTML += `The string "${pattern}" was found in the given text at index: ${i}.`;
            return;
        }
        else{
            document.getElementById("o").innerHTML += `'${pattern.charAt(j)}' does not match '${text.charAt(i+j)}'<br>`;
        }
    }
    document.getElementById("o").innerHTML += "The string \"" + pattern + "\" was not found in the given text."
    return;
}
