import React, { createContext, useState } from 'react';

export const userProfilContext = createContext({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    zipCode: '',
    city: '',
    setUserProfilContext: info => {}
})

const UserProfilContextProvider = ({ children })=> {
    const userProfilState = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        zipCode: '',
        city: '',
        setUserProfilContext: info => 
            setUserProfil(prevState => ({
                ...prevState,
                [Object.keys(info)]: Object.values(info)[0]
            })
        )
    }
    const [userProfil, setUserProfil] = useState(userProfilState);
    return <userProfilContext.Provider value={userProfil}>{ children }</userProfilContext.Provider>
}

export default UserProfilContextProvider;