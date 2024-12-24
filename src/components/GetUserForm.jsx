import React, { useState } from 'react'
import { getUser } from '../utils/pragcards'

const GetUserForm = () => {

    const [ uid, setUid ] = useState('')
    const [ storeID, setStoreID ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Get User with ID:', uid)
        console.log(`https://ypwczb4r11.execute-api.us-east-1.amazonaws.com/dev/users/${uid}`)
        const result = await getUser(uid, storeID);
        console.log(result)
        setUid('')
        setStoreID('')
    }


  return (
    <div className='p-4 border-2' >

        <h2>Get User Data </h2>
        <form action='submit' className='flex justify-between' >
            <input type="text" placeholder='uid' name="uid" value={uid} onChange={(e) => setUid(e.target.value)} /> 
            <input type="text" placeholder='storeID' name="storeID" value={storeID} onChange={(e) => setStoreID(e.target.value)} />
            <button className='bg-black rounded py-2 px-4 text-white' type='submit' onClick={handleSubmit}>Run</button>
        </form>

    </div>
  )
}

export default GetUserForm