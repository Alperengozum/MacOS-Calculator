let number
let last_number
let last_process
let process_used=0
let fractal_used=0

let last_location
function Clear(){
    document.getElementById("ResultNumber").innerHTML = "0";
    process_used=0
    fractal_used=0
    last_process=0
    number=0
    last_number=0
    document.getElementById("ResultNumber").style.fontSize="40px"

}

function Percent(){
    number = document.getElementById("ResultNumber").innerHTML
    last_process="%"

    process_used+=1
    fractal_used=0
    if (process_used>=2) {
        SendResult()
        process_used=0
    }
    else {
        document.getElementById("ResultNumber").innerHTML = "0"
        document.getElementById("ResultNumber").style.fontSize="40px"

    }

}

function Change() {
    let old_number = document.getElementById("ResultNumber").innerHTML
    document.getElementById("ResultNumber").innerHTML= -old_number;

}

function Divide() {
    number = document.getElementById("ResultNumber").innerHTML
    last_process="/"

    process_used+=1
    fractal_used=0
    if (process_used>=2) {
        SendResult()
        process_used=0
    }
    else {
        document.getElementById("ResultNumber").innerHTML = "0"
        document.getElementById("ResultNumber").style.fontSize="40px"

    }
}

function Multiple() {
    number = document.getElementById("ResultNumber").innerHTML
    last_process="*"

    process_used+=1
    fractal_used=0
    if (process_used>=2) {
        SendResult()
        process_used=0
    }
    else {
        document.getElementById("ResultNumber").innerHTML = "0"
        document.getElementById("ResultNumber").style.fontSize="40px"

    }

}

function Minus() {
    number = document.getElementById("ResultNumber").innerHTML
    last_process="-"

    process_used+=1
    fractal_used=0
    if (process_used>=2) {
        SendResult()
        process_used=0
    }
    else {
        document.getElementById("ResultNumber").innerHTML = "0"
        document.getElementById("ResultNumber").style.fontSize="40px"

    }

}

function Add() {
    number = document.getElementById("ResultNumber").innerHTML
    last_process="+"

    process_used+=1
    fractal_used=0
    if (process_used>=2) {
        SendResult()
        process_used=0
    }
    else {
        document.getElementById("ResultNumber").innerHTML = "0"
        document.getElementById("ResultNumber").style.fontSize="40px"

    }

}

function Fraction() {
    if (fractal_used == 0){
    if (last_number!==",") {
        document.getElementById("ResultNumber").innerHTML +=",";
        last_number=","
        fractal_used=1
    }
    else {
        last_number=","
        fractal_used=1
    }
        }


}

function SendNumber(number) {
    last_number=number
    let old_number = document.getElementById("ResultNumber").innerHTML
    if (old_number.length>=8 && old_number.length<13) {
        old_fontSize=getComputedStyle(document.getElementById("ResultNumber")).fontSize.substr(0,2)
        document.getElementById("ResultNumber").style.fontSize=old_fontSize-3 + "px"
    }
    if (old_number.length>=13) {
        old_fontSize=getComputedStyle(document.getElementById("ResultNumber")).fontSize.substr(0,2)
        document.getElementById("ResultNumber").style.fontSize=old_fontSize-1 + "px"
    }

    if (old_number==0) {
        document.getElementById("ResultNumber").innerHTML =number;
        }
    else {
        document.getElementById("ResultNumber").innerHTML +=number;
    }



}
function SendResult() {
    let result;
    if (process_used >= 1) {
        let old_number = document.getElementById("ResultNumber").innerHTML
        if (last_process == "+") {
            old_number = old_number.replaceAll(",", ".")
            number = number.replaceAll(",", ".")
            old_number = parseFloat(old_number)
            number = parseFloat(number)
            result = old_number + number
            result= String(result)
            result = result.replaceAll(",", ".")

        }
        if (last_process == "-") {
            old_number = old_number.replaceAll(",", ".")
            number = number.replaceAll(",", ".")
            old_number = parseFloat(old_number)
            number = parseFloat(number)
            result = number - old_number
            result= String(result)
            result = result.replaceAll(",", ".")

        }
        if (last_process == "*") {
            old_number = old_number.replaceAll(",", ".")
            number = number.replaceAll(",", ".")
            old_number = parseFloat(old_number)
            number = parseFloat(number)
            result = old_number * number
            result= String(result)
            result = result.replaceAll(",", ".")

        }
        if (last_process == "/") {
            old_number = old_number.replaceAll(",", ".")
            number = number.replaceAll(",", ".")
            old_number = parseFloat(old_number)
            number = parseFloat(number)
            result = number / old_number
            result= String(result)
            result = result.replaceAll(",", ".")

        }
        if (last_process == "%") {
            old_number = old_number.replaceAll(",", ".")
            number = number.replaceAll(",", ".")
            old_number = parseFloat(old_number)
            number = parseFloat(number)
            result = (100 * old_number) / number
            result= String(result)
            result = result.replaceAll(",", ".")

        }
        if (result.length==9) {
            old_fontSize=getComputedStyle(document.getElementById("ResultNumber")).fontSize.substr(0,2)
            document.getElementById("ResultNumber").style.fontSize=old_fontSize-3 + "px"

        }
        if (result.length==10) {
            old_fontSize=getComputedStyle(document.getElementById("ResultNumber")).fontSize.substr(0,2)
            document.getElementById("ResultNumber").style.fontSize=old_fontSize-6 + "px"

        }
        if (result.length==11) {
            old_fontSize=getComputedStyle(document.getElementById("ResultNumber")).fontSize.substr(0,2)
            document.getElementById("ResultNumber").style.fontSize=old_fontSize-9 + "px"

        }
        if (result.length==12) {
            old_fontSize=getComputedStyle(document.getElementById("ResultNumber")).fontSize.substr(0,2)
            document.getElementById("ResultNumber").style.fontSize=old_fontSize-13 + "px"

        }
        let i
        for(i=1;i<19;i++)
        if (result.length==12+i) {
            old_fontSize=getComputedStyle(document.getElementById("ResultNumber")).fontSize.substr(0,2)
            document.getElementById("ResultNumber").style.fontSize=old_fontSize-(14+i) + "px"

        }




        document.getElementById("ResultNumber").innerHTML = result




        process_used = 0
        fractal_used = 0
        last_process = 0
        number = 0
        last_number = 0

        }

     else {
        process_used = 0
        fractal_used = 0
        last_process = 0
        number = 0
        last_number = 0
    }





}

function Close() {
    let elem = document.getElementById("Calculator");
    elem.parentNode.removeChild(elem);



}

function Minimize() {
    let elem = document.getElementById("Calculator");
    elem.style.transitionDuration="1s"
    last_location=elem.style.left
    let monitor=screen.width-80
    monitor=+monitor+"px"
    elem.style.left=monitor;
    elem.innerHTML="<img src=\"Images/Calculator-icon.png\" alt=\"calculator\" style=\"width:70px;height:70px;\"" +
        " id=\"minimized-calculator\" onclick='Maximize()'>"


}

function Maximize() {
    let elem = document.getElementById("Calculator");
    elem.style.transitionDuration="1s"
    elem.style.left=last_location;
    elem.innerHTML="<p id=\"Buttons\">\n" +
        "        <button class=\"CloseButton\"   onmouseover=\"MouseInThere()\" onmouseout=\"MouseIsEscaped()\"\n" +
        "                style=\"background: #ff321f\"  onclick=\"Close()\"><div id=\"Close\"></div></button>\n" +
        "        <button class=\"CloseButton\"   onmouseover=\"MouseInThere()\" onmouseout=\"MouseIsEscaped()\"\n" +
        "                style=\"background: #efce51\" onclick=\"Minimize()\"><div id=\"Minimize\"></div></button>\n" +
        "        <button class=\"CloseButton\"  onmouseover=\"MouseInThere()\" onmouseout=\"MouseIsEscaped()\"\n" +
        "                style=\"background: #53C21F\" ><div id=\"Expand\" ></div></button>\n" +
        "    </p>\n" +
        "    <h1 id=\"Result\"><div id=\"ResultNumber\" >0</div></h1>\n" +
        "    <table>\n" +
        "        <tr>\n" +
        "            <th><button id=\"DarkGray\"  onclick=\"Clear()\">C</button></th>\n" +
        "            <th><button id=\"DarkGray\" onclick=\"Percent()\">%</button> </th>\n" +
        "            <th><button id=\"DarkGray\" onclick=\"Change()\">+/-</button></th>\n" +
        "            <th><button id=\"Orange\" onclick=\"Divide()\">/</button></th>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <th><button onclick=\"SendNumber(7)\">7</button></th>\n" +
        "            <th><button onclick=\"SendNumber(8)\">8</button> </th>\n" +
        "            <th><button onclick=\"SendNumber(9)\">9</button></th>\n" +
        "            <th><button id=\"Orange\" onclick=\"Multiple()\">x</button></th>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <th><button onclick=\"SendNumber(4)\">4</button></th>\n" +
        "            <th><button onclick=\"SendNumber(5)\">5</button> </th>\n" +
        "            <th><button onclick=\"SendNumber(6)\">6</button></th>\n" +
        "            <th><button id=\"Orange\" onclick=\"Minus()\">—</button></th>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <th><button onclick=\"SendNumber(1)\">1</button></th>\n" +
        "            <th><button onclick=\"SendNumber(2)\">2</button> </th>\n" +
        "            <th><button onclick=\"SendNumber(3)\">3</button></th>\n" +
        "            <th><button id=\"Orange\" onclick=\"Add()\">+</button></th>\n" +
        "        </tr>\n" +
        "    </table>\n" +
        "\n" +
        "    <table id=\"Table-bottom\">\n" +
        "        <tr>\n" +
        "            <th id=\"Zero\" ><button id=\"Zero\"  onclick=\"SendNumber(0)\">0</button></th>\n" +
        "\n" +
        "            <th><button onclick=\"Fraction()\">,</button></th>\n" +
        "            <th ><button id=\"Orange\" style= \"border-bottom-right-radius: 5px\" onclick=\"SendResult()\">=</button></th>\n" +
        "        </tr>"
    elem.style.transitionDuration="0s"


}

function MouseInThere() {
    document.getElementById("Close").innerHTML = "X";
    document.getElementById("Minimize").innerHTML= "—";
    document.getElementById("Expand").innerHTML = "+";
}


function MouseIsEscaped() {
    document.getElementById("Close").innerHTML = "";
    document.getElementById("Minimize").innerHTML= "";
    document.getElementById("Expand").innerHTML = "";


    }






    // Make the DIV element draggable:
dragElement(document.getElementById("Calculator"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        let elem = document.getElementById("Calculator");
        elem.style.transitionDuration="0s"
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}