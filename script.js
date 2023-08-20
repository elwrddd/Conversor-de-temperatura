
function converter(){
    var tempIni = document.getElementById('tempI')
    var temp1 = document.getElementById('temp-selection1')
    var temp2 = document.getElementById('temp-selection2')
    var res = document.getElementById('res')
    if (tempIni.value.length == 0 || temp1.selectedIndex == temp2.selectedIndex){
        window.alert('Verifique os inputs')
    } else{
        let t1 = Number(tempIni.value)

        if (temp1.selectedIndex == 0){

            if (temp2.selectedIndex == 1){
                let t2 = t1 * 9/5 + 32
                res.innerHTML = (`${t2.toFixed(2)}Fº`)
            }

            if (temp2.selectedIndex == 2){
                let t2 = t1 + 273.15
                res.innerHTML = (`${t2.toFixed(2)}K`)
            }
        }

        if (temp1.selectedIndex == 1){

            if (temp2.selectedIndex == 0){
                let t2 = (t1 - 32) * 5/9
                res.innerHTML = (`${t2.toFixed(2)} Cº`)
            }

            if (temp2.selectedIndex == 2){
                let t2 = (t1 - 32) * 5/9 + 273.15
                res.innerHTML = (`${t2.toFixed(2)} K`)
            }
        }

        if (temp1.selectedIndex == 2){

            if (temp2.selectedIndex == 0){
                let t2 = t1 - 273.15
                res.innerHTML = (`${t2.toFixed(2)} Cº`)
            }

            if (temp2.selectedIndex == 1){
                let t2 = (t1 - 273.15) * 9/5 + 32 
                res.innerHTML = (`${t2.toFixed(2)} Fº`)
            }
        }
        }
    }
