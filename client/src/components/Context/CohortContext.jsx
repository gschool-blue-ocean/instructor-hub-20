import React, { useState, createContext } from 'react'

const CohortContext = createContext();

export const CohortProvider = ({children}) => {
    const [cohort, setCohort] = useState("19")
    

    return <CohortContext.Provider value={{
        cohort,
        setCohort
    }}>
        {children}
    </CohortContext.Provider>
}

export default CohortContext;