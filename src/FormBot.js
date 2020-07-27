import React, { useState } from 'react'
import { InvestSumma } from "./componenter/InvestSumma"
import { LanSumma } from "./componenter/LanSumma"
import { RantaSumma } from "./componenter/RantaSumma"
import { Total } from "./componenter/Total"


export const FormBot = () => {
    const [section, setSection] = useState("start")
    const summa = ["100.000", "200.000", "300.000", "400.000+"]
    const [valdSumma, setValdSumma] = useState("")
    const [husLan, setHusLan] = useState("")
    const [ranta, setRanta] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
    };


    return (
        <div>
            <form onSubmit={handleSubmit} >
                {section === "start" && (
                    <section className="section-div">
                        <p>Hejsan! Har du en villatomt i Stockholm?</p>
                        <button className="ja-knapp" type="submit" onClick={e => setSection("harTomt")}>Ja</button>
                        <button className="nej-knapp" type="submit" onClick={e => setSection("ingenTomt")}>Nej</button>
                    </section>
                )}
                {section === "ingenTomt" && (
                    <div>
                        <p>Du behöver vara ägare av en tomt i Stockholm för att kunna bygga med oss</p>
                    </div>
                )}
                {section === "harTomt" && (
                    <div>
                        <p>
                            Fantastiskt! Då kan du tjäna 40.000kr per år!
                            </p>
                        <div>
                            <p>Kan du tänka dig investera lite själv?</p>
                            <button className="ja-knapp" type="submit" onClick={e => setSection("villInvestera")}>ja</button>
                            <button className="nej-knapp" type="submit" onClick={e => setSection("villInteInvestera")}>Nej</button>
                        </div>
                    </div>
                )}
                {section === "villInteInvestera" && (
                    <div>
                        <p>Inga problem, vi fixar kapital!</p>
                        <p>Förutom inkomsten kan vi sänka din månadskostnad på huslånet, tryck för att se mer</p>
                        <button className="ja-knapp" type="submit" onClick={e => setSection("huslan")}>Räkna</button>
                    </div>
                )}
                {section === "villInvestera" && (
                    <div>
                        <p>Toppen, ungfär hur mycket?</p>
                        <fieldset>
                            <button className="order-knapp" type="submit" disabled={valdSumma === ""} onClick={e => setSection("huslan")} >Välj summa</button>
                            <InvestSumma valdsumma={valdSumma} setValdSumma={setValdSumma} summa={summa} />
                        </fieldset>
                    </div>
                )}
                {section === "huslan" && (
                    <>
                        <div>
                            <p>Då kan du faktiskt tjäna så mycket som 80.000 kr per år med ett attefallshus från oss. Bra va!</p>
                        </div>
                        <div>
                            <p>Hur mycket kostar dina huslån idag per månad? </p>
                            <fieldset>
                                <legend>fyll i en summa</legend>
                                <LanSumma husLan={husLan} setHusLan={setHusLan} />
                                <button className="order-knapp" type="submit" disabled={husLan === ""} onClick={e => setSection("ranta")}>Välj summa</button>
                            </fieldset>
                        </div>
                    </>
                )}
                {section === "ranta" && (
                    <div>
                        <p>Okej! Vad har du för ränta? </p>
                        <fieldset id="submit">
                            <legend>fyll i % form. ex: 1.75</legend>
                            <RantaSumma ranta={ranta} setRanta={setRanta} />
                            <button className="order-knapp" type="submit" disabled={ranta === ""} onClick={e => setSection("samanfatta")}>Välj & räkna ut!</button>
                        </fieldset>
                    </div>
                )}
            </form>
            {section === "samanfatta" && (
                <article className="sammanfatta">
                    <Total ranta={ranta} husLan={husLan} />
                </article>
            )}
        </div>
    )
}

