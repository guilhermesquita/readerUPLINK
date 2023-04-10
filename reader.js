function messageDecripter(uplink) {
   
    const pulseCounterHexadecimal = uplink.slice(0,8)
    console.log(pulseCounterHexadecimal)
    const pulseCounter = parseInt(pulseCounterHexadecimal, 16)

    const infoHexadecimal = uplink.slice(8,10)
    const info = parseInt(infoHexadecimal, 16).toString(2)
    console.log(infoHexadecimal)

    const bateryHexadecimal = uplink.slice(10,12)
    const batery = parseInt(bateryHexadecimal, 16)

    const intervalHexadecimal = uplink.slice(12,16)
    const interval = parseInt(intervalHexadecimal, 16)/2

    const payload = {
        pulse_counter: pulseCounter,
        info: info,
        batery: batery+"%",
        interval: interval+'min'
    }

    return payload

  }

//teste com dado mockado
let teste = new messageDecripter('000004AC09630078')
console.log(teste)

//  function messageDecripter(uplink) {
//     const message = parseInt(uplink, 16)

//     const payload = {
//         pulse_counter: message
//     }

//     return payload

//   }

//  let teste = new messageDecripter('000004AC')
//  console.log(teste)