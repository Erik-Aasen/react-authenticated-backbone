import React, {useContext} from 'react'
import { myContext } from './Context'
export default function Homepage() {
    const ctx = useContext(myContext)
    console.log(ctx); 
    return (
        <div>
            <h1>Homepage</h1>
        </div>
    )
}
