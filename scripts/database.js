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
    ],
    colonies: [
        {id: 1, name: "Europa"}
    ],
    colonyResources: [
        {id: 1, mineralId: 1, colonyId: 1, quantity: 10},
        {id: 2, mineralId: 2, colonyId: 1, quantity: 20}
    ],
    facilities: [
        {id: 1, name: "Io Facility", active: true}
    ],
    facilityResources: [
        {id: 1, facilityId: 1, mineralId: 1, quantity: 100},
        {id: 2, facilityId: 1, mineralId: 2, quantity: 20}
    ],
    minerals: [
        {id: 1, name: "Iron"},
        {id: 2, name: "Platinum"}
    ],
    
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

//export const setGovernor = (governorId) => {
 //   database.transientState.selectedGovernor = governorId
 //   document.dispatchEvent( new CustomEvent("stateChanged"))
//}

export const getfacilityResources = () => {
    return database.facilityResources.map(f=>({...f}))
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}
export const getMinerals = () => {
    return database.minerals.map(m => ({...m}))
}
export const getColonies = () => {
    return database.colonies.map(c=>({...c}))
}

export const getGovernors = () => {
    return database.governors.map(g=>({...g}))
}

export const getCart = () => {
    return database.transientState.map(c=>({...c}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") ) ;{
    }
}
