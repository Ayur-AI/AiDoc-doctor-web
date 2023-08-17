import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue, } from "firebase/database";
import { db } from './firebase';
export const contextAPI = React.createContext()

function Context({ children }) {
    const [users, setusers] = useState([])
    let getData = () => {
        try {
            const db = getDatabase();
            const Ref = ref(db, `/Patient-details`);
            onValue(Ref, async (snapshot) => {
                try {
                    const data = await snapshot.val()
                    setusers(Object.values(data))
                }
                catch (error) {
                    console.log(error)
                }

            })

        }
        catch (error) {
            console.log(error)
        }
    }
   
    useEffect(() => {

    getData()
    }, [])
    

    return <contextAPI.Provider value={{users}}>
        {children}
    </contextAPI.Provider>
}
export default Context;