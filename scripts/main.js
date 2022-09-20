import { Governors } from "./governors.js"
import { renderFacilities } from "./facilities.js"
import { renderCart } from "./cart.js"

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header>
    <h1>Solar System Mining Marketplace</h1>
</header>

<div>
Select a Governor... ${Governors()}

<center><section class="colonies"><h3>Colony Minerals</h3></section></center>

Select a Facility...
<section class="facilities"><select name="facilities" id="facilitiesDropdown" disabled> <option value="0">Select a facility</option> </select>
</section></div>

<div><section class="bottom"><section class="facility-minerals">
<center><h3>Facility Minerals</h3></center>
<center><div class="facility-minerals__display"></center>
</section>


<div class="cart__display"><h3>Space Cart</h3>
<center><section class="cart"></section></center>
    <center><button class="button-1" role="button" button id="orderButton">Purchase Minerals</button></center></div></div>
</section>
`

export const render = () => {
    mainContainer.innerHTML = applicationHTML
}

render()
