import React from "react"


export const RantaSumma = ({ ranta, setRanta }) => {
    return (
        <label className="hus-lan">
            <input placeholder="SEK"
                type="number"
                value={ranta}
                id={ranta}
                onChange={e => setRanta(e.target.value)}
                required
            />
        </label>
    )
}