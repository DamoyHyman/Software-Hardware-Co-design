function display()
{
    var current = document.getElementById("current").value;
    var voltage = document.getElementById("voltage").value;
    var resistance = document.getElementById("resistance").value;
    
    document.getElementById("currentDisplay").innerHTML = current;
    document.getElementById("voltageDisplay").innerHTML = voltage;
    document.getElementById("resistanceDisplay").innerHTML = resistance;
    
    document.style.background = black;
}