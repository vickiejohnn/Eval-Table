
function add() {
    disp.innerHTML = ""
    var rowInput = row.value
    var colInput = col.value
    tab = "<table>"
    for(var i=1; i<=rowInput; i++) {
        tab += "<tr>"
        for(var j=1; j<=colInput; j++) {
            tab += `<td>${j} + ${i} = ${j+i}</td>`
        }
        tab += "</tr>"
    }
    tab += "</table>"  
    disp.innerHTML += tab
}
function subtract() {
    disp.innerHTML = ""
    var rowInput = row.value
    var colInput = col.value
    tab = "<table>"
    for(var i=1; i<=rowInput; i++) {
        tab += "<tr>"
        for(var j=1; j<=colInput; j++) {
            tab += `<td>${j} - ${i} = ${j-i}</td>`
        }
        tab += "</tr>"
    }
    tab += "</table>"  
    disp.innerHTML += tab
}
function multiply() {
    disp.innerHTML = ""
    var rowInput = row.value
    var colInput = col.value
    tab = "<table>"
    for(var i=1; i<=rowInput; i++) {
        tab += "<tr>"
        for(var j=1; j<=colInput; j++) {
            tab += `<td>${j} * ${i} = ${j*i}</td>`
        }
        tab += "</tr>"
    }
    tab += "</table>"  
    disp.innerHTML += tab
}
function divide() {
    disp.innerHTML = ""
    var rowInput = row.value
    var colInput = col.value
    tab = "<table>"
    for(var i=1; i<=rowInput; i++) {
        tab += "<tr>"
        for(var j=1; j<=colInput; j++) {
            tab += `<td>${j} ➗ ${i} = ${(j/i).toFixed(2)}</td>`
        }
        tab += "</tr>"
    }
    tab += "</table>"
    disp.innerHTML += tab
}