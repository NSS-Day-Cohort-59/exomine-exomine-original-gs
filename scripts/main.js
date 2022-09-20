import { Governors } from "./governors.js"
import { renderFacilities } from "./facilities.js"
import { renderCart } from "./cart.js"

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header>
    <h1>Solar System Mining Marketplace</h1>
</header>

<div>
<div><section class="governors">
Select a Governor... ${Governors()}
</section>

<section class="facilities">Select a Facility...
    <select name="facilities" id="facilitiesDropdown" disabled> <option value="0">Select a facility</option> </select>
</section></div>

<center><section class="colonies"></section></center></div>

<section class="facility-minerals">
<h2>Facility Minerals</h2>
<div class="facility-minerals__display">
</section>


<div class="cart__display"><h3>Space Cart</h3>
<center><section class="cart"></section></center>
    <center><button class="button-85" role="button" button id="orderButton">Purchase Mineral</button></center></div>

`

export const render = () => {
    mainContainer.innerHTML = applicationHTML
}

render()
