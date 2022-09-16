const database = {
    governors: [
        { id: 1, colonyId: 2, name: "Silver Stallion", active: true },
        { id: 2, colonyId: 1, name: "Blue Dolphin", active: true },
        { id: 3, colonyId: 2, name: "Red Baron", active: true },
        { id: 4, colonyId: 1, name: "Green Bean", active: true },
        { id: 5, colonyId: 3, name: "White Wave", active: false },
        { id: 6, colonyId: 3, name: "Pink Salmon", active: true },
        { id: 7, colonyId: 2, name: "Black Swan", active: true },
        { id: 8, colonyId: 3, name: "Orange Cone", active: false },
        { id: 9, colonyId: 1, name: "Yellow Sunshine", active: true },
        { id: 10, colonyId: 2, name: "Purple Rain", active: true }
    ]
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const getColonies = () => {
    return database.colonies.map(c=>({...c}))
}

export const getGovernors = () => {
    return database.governors.map(g=>({...g}))
}

export const getCart = () => {
    return database.cart.map(c=>({...c}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") ) {
    }

