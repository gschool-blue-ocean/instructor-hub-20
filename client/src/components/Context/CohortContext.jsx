import React, { useState, createContext } from 'react'

const CohortContext = createContext();

export const CohortProvider = ({children}) => {
    const [cohort, setCohort] = useState("19")
    const [bodyDisplay, setBodyDisplay] = useState('')
    

    return <CohortContext.Provider value={{
        cohort,
        setCohort,
        bodyDisplay,
        setBodyDisplay
    }}>
        {children}
    </CohortContext.Provider>
}

export default CohortContext;