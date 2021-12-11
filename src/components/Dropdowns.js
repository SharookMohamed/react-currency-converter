import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css';

function Dropdowns({ labelName, handleChange, value }) {
    return (

        <>
            <label style={{ "width": "325px", "color": "white", "fontSize": "30px" }}>
                {labelName}
                <select
                    className='form-control form-control-lg'
                    value={value}
                    onChange={event => handleChange(event)}
                >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>PHP</option>
                    <option>INR</option>
                    <option>USD</option>
                    <option>GBD</option>
                    <option>AUD</option>
                    <option>INR</option>
                    <option>NZD</option>
                    <option>CAD</option>
                    <option>CHF</option>
                    <option>JPY</option>
                    <option>BGN</option>
                    <option>ILS</option>
                    <option>RUB</option>
                    <option>ZAR</option>
                    <option>TRY</option>
                    <option>HKD</option>
                    <option>MYR</option>
                    <option>THB</option>
                    <option>HRK</option>
                    <option>NOK</option>
                    <option>IDR</option>
                    <option>DKK</option>
                    <option>HUF</option>
                    <option>MXN</option>
                    <option>KRW</option>
                    <option>ISK</option>
                    <option>SGD</option>
                    <option>BRL</option>
                    <option>PLN</option>
                    <option>RON</option>
                    <option>CNY</option>
                    <option>SEK</option>
                </select>

            </label>

        </>
    )
}

export default Dropdowns
