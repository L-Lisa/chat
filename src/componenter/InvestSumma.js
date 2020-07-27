import React from "react"


export const InvestSumma = ({ valdsumma, setValdSumma, summa }) => {
    return (
        <div>
            {summa.map(kr => (
                <label key={kr} className="radio-summa">
                    <input className="radio-input"
                        type="radio"
                        value={kr}
                        id={kr}
                        onChange={e => setValdSumma(e.target.value)}
                        checked={kr === valdsumma} />
                    {kr}
                </label>
            ))}
        </div>
    )
}