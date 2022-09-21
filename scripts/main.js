import { Governors } from "./governors.js"
import { renderFacilities } from "./facilities.js"
import { renderCart } from "./cart.js"

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header>
    <h1>Solar System Mining Marketplace</h1>
</header>

<center><table>
<tr><td>Select a Governor... ${Governors()}

<div>Select a Facility...
<section class="facilities"><select name="facilities" id="facilitiesDropdown" disabled> <option value="0">Select a facility</option> </select>
</section></div></td>

<center><td><section class="colonies"><h3>Colony Minerals</h3></section></center></td></tr>

<div><td><section class="bottom"><section class="facility-minerals">
<center><h3>Facility Minerals</h3></center>
<center><div class="facility-minerals__display"></center>
</section></div></td>


<td><div><div class="cart__display"><h3>Space Cart</h3>
<center><section class="cart"></section></center>
    <center><button class="button-1" role="button" button id="orderButton">Purchase Minerals</button></center></div></div>
</section></div></td></tr></table></center>
`

export const render = () => {
    mainContainer.innerHTML = applicationHTML
}

render()
