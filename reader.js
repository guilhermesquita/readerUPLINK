function messageDecripter(uplink) {

    const uplinkTreatment = uplink.replace(/\s/g, '') //Eliminação de todos espaços em brancos

    //TRATAMENTOS DADOS DO CONTADOR DE PULSOS
    const pulseCounterHexadecimal = uplinkTreatment.slice(0, 8)
    const pulseCounter = parseInt(pulseCounterHexadecimal, 16)

    //TRATAMENTOS DADOS DE ALARMES
    const infoHexadecimal = uplinkTreatment.trim().slice(8, 10)
    const binary = parseInt(infoHexadecimal, 16).toString(2)

    const info = []

    for (i in binary) {
        if (binary[i] === '1') {
            if (i == 0) {
                info.push('Alarme de corte de cabo ativo')
            }
            if (i == 2) {
                info.push('Alarme de corte de vazamento ativo')
            }
            if (i == 3) {
                info.push('Alarme de ataque magnético')
            }
        }
    }

    //TRATAMENTOS DADOS DE BATERIA
    const bateryHexadecimal = uplinkTreatment.trim().slice(10, 12)
    const batery = parseInt(bateryHexadecimal, 16)

    //TRATAMENTOS DADOS DE INTERVALOS
    const intervalHexadecimal = uplinkTreatment.trim().slice(12, 16)
    const interval = parseInt(intervalHexadecimal, 16) / 2

    const payload = {
        pulse_counter: pulseCounter,
        info: info.join("; "),
        batery: batery,
        interval: interval
    }

    return payload

}

//teste com dado mockado
let numberPayload = new messageDecripter('00 00 04 AC 09 63 00 78')
console.log(numberPayload)