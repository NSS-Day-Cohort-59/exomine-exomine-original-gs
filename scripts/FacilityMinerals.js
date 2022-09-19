import { getMinerals, getFacilities, getTransientState, setMineral} from "./database.js"

const minerals = getMinerals()
const facilities = getFacilities()
const transientState = getTransientState()

const selectedFacility = transientState.selectedFacility
const selectedMineral = transientState.selectedMineral

document.addEventListener(
    "change",
    (event) => {
        const mineralClicked = event.target

        if (event.target.id === "mineral") {
            setMineral(parseInt(event.target.value))

            //add 1 ton of mineral selected to cart

        }
    }
)