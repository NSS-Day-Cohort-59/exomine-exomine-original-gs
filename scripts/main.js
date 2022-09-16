import { Governors } from "./governors.js"
import { Facilities } from "./facilities.js"

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${Governors()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${Facilities()}
    </section>
</article>

<article class="orders">
<section class="detail--column list details__orders">
    <h2>Orders</h2>
    ${Orders()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML