function dis(val){
    document.getElementById("result").value+=val;
    console.log(val);
}
function solve(){
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}
function clr(){
    document.getElementById("result").value="";
}
function back(){
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}
/*Function to change the mode*/
const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");

    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  
  toggleSwitch.addEventListener("change", switchTheme, false);