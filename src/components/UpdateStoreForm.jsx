import { useState } from 'react'
import { updateStore } from '../utils/pragcards'

const UpdateStoreForm = () => {

    const [storeId, setStoreId] = useState('')
    const [name, setName] = useState('')
    const [contactInfo, setContactInfo] = useState('')
    const [rewardCriteria, setRewardCriteria] = useState('')

    const handleUpdateStore = async (e) => {
        e.preventDefault()
        console.log('handleUpdateStore')
        updateStore(storeId, {name, contactInfo, rewardCriteria})

        setStoreId('')
        setName('')
        setContactInfo('')
        setRewardCriteria('')
    }


  return (
    <div className='p-4 border-2'>
        
    <h2>Update Store Function</h2>

    <form action="submit" className='flex justify-between flex-wrap' >

          <input className='boder-2 border-black' type="text" placeholder='storeId' value={storeId} onChange={(e) => setStoreId(e.target.value)} />
          <input className='boder-2 border-gray-500' type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
          <input className='boder-2 border-gray-500' type="text" placeholder='contactInfo' value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
          <input className='boder-2 border-gray-500' type="text" placeholder='rewardCriteria' value={rewardCriteria} onChange={(e) => setRewardCriteria(e.target.value)} />


          <button className='boder-3 bg-black text-white py-2 px-4' onClick={handleUpdateStore} >run</button>
        </form>


</div>
  )
}

export default UpdateStoreForm