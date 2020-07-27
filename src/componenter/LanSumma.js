import React from "react"


export const LanSumma = ({ husLan, setHusLan }) => {
    return (
        <label className="hus-lan">

            <input placeholder="SEK"
                type="number"
                value={husLan}
                id={husLan}
                onChange={e => setHusLan(e.target.value)}
                required
            />
        </label>
    )
}