let col = [
    "red",
    "green",
    "yellow",
    "pink",
    "blue",
    "orange",
    "black"
]
let index=0;
var IsTriagle=false;
let cColor = document.getElementById("change-color");
let cShape = document.getElementById("change-shape");

cColor.addEventListener("click",changeColor);
cShape.addEventListener("click",changeShape);

function changeColor(){
    if(index==col.length)
    {
        index=0;
    }
    document.getElementById("circle").style.backgroundColor = col[index];
    index++;
}

function changeShape()
{
     if(!IsTriagle)
     {
        let i = document.getElementsByClassName("innershape")[0];
        i.className = "ineershape-triangle";
        IsTriagle = true;
     }
     else{
        let i = document.getElementsByClassName("ineershape-triangle")[0];
        i.className="innershape";
        IsTriagle=false;
     }
}