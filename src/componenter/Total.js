import React, { useState } from 'react'




export const Total = ({ ranta, husLan }) => {
    const [billigare, setBilligare] = useState("")
    const [sparad, setSparad] = useState("")

    const NyttLan = () => {
        return (
            husLan - (husLan * 0.02)
        )
    }
    const SparadSumma = () => {
        return (
            (husLan * 0.02)
        )
    }
    return (
        < div >
            <p>Du kan spara pengar, detta är en fingervisning, vi sänker din månadskostnad med några procnt</p>
            <button onClick={() => setBilligare(NyttLan(), setSparad(SparadSumma()))}>
                Räkna besparingar</button>
            {billigare && <p>Din nya månadskostnad blir{billigare}kr</p>}
            {sparad && <p>Varje månad sparar du{sparad}kr</p>}
        </div >
    )
}
