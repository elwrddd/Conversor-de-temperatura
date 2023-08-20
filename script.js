
function converter(){
    var tempIni = document.getElementById('tempI')
    var temp1 = document.getElementById('temp-selection1')
    var temp2 = document.getElementById('temp-selection2')
    var res = document.getElementById('res')
    if (tempIni.value.length == 0 || temp1.selectedIndex == temp2.selectedIndex){
        window.alert('Verifique os inputs')
    } else{
        let t1 = Number(tempIni.value)
        /* Caso o primeiro select for Celsius */
        if (temp1.selectedIndex == 0){
            /* Caso o segundo select for Fahrenheit */
            if (temp2.selectedIndex == 1){
                let t2 = t1 * 9/5 + 32
                res.innerHTML = (`${t2.toFixed(2)}Fº`)
            }
            /* Caso o segundo select for Kelvin */
            if (temp2.selectedIndex == 2){
                let t2 = t1 + 273.15
                res.innerHTML = (`${t2.toFixed(2)}K`)
            }
        }
        /* Caso o primeiro select for Fahrenheit */
        if (temp1.selectedIndex == 1){
            /* Caso o segundo select for Celsius */
            if (temp2.selectedIndex == 0){
                let t2 = (t1 - 32) * 5/9
                res.innerHTML = (`${t2.toFixed(2)} Cº`)
            }
            /* Caso o segundo select for Kelvin */
            if (temp2.selectedIndex == 2){
                let t2 = (t1 - 32) * 5/9 + 273.15
                res.innerHTML = (`${t2.toFixed(2)} K`)
            }
        }
        /* Caso o primeiro select for Kelvin */
        if (temp1.selectedIndex == 2){
            /* Caso o segundo select for Celsius */
            if (temp2.selectedIndex == 0){
                let t2 = t1 - 273.15
                res.innerHTML = (`${t2.toFixed(2)} Cº`)
            }
            /* Caso o segundo select for Fahrenheit */
            if (temp2.selectedIndex == 1){
                let t2 = (t1 - 273.15) * 9/5 + 32 
                res.innerHTML = (`${t2.toFixed(2)} Fº`)
            }
        }
        }
    }
