
let ched = document.getElementById("heading");
let bsel = document.getElementsByTagName("body")[0];
window.addEventListener("keydown",(e)=>{
    bsel.innerHTML=`
    <div id="container">
    <div id="heading">
    <h1>You pressed <h1 class="keyhebhai">${e.key===' '?'space':e.key}</h1></h1>
    </div>
    <div id="base">
    <h1 id="code">${e.keyCode}</h1>
    </div>
    </div>`;
});

