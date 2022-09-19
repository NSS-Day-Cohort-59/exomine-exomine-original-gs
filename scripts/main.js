import { Governors } from "./governors.js"
import { renderFacilities } from "./facilities.js"

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header>
    <h1>Solar System Mining Marketplace</h1>
</header>

<section class="governors">
${Governors()}
</section>

<section class="colonies"></section>

<section class="facilities">
    <select name="facilities" id="facilitiesDropdown" disabled> <option value="0">Select a facility</option> </select>
</section>

<section class="facility-minerals">
<h2>Facility Minerals</h2>
<div class="facility-minerals__display"></div>
</section>

<section class="cart">
    <h2>Space Cart</h2>
    <div class="cart__display"></div>
</section>

`

export const render = () => {
    mainContainer.innerHTML = applicationHTML
}

render()
