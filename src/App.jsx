import './App.css'
import CreateStoreForm from './components/createStoreForm'
import DeleteStoreForm from './components/DeleteStoreForm'
import GetStoreForm from './components/GetStoreForm'
import GetUserForm from './components/GetUserForm'
import UpdateStoreForm from './components/UpdateStoreForm'

function App() {


  return (
    <>
        <h1 className='text-4xl mb-4 '>pragcards-api-test-app</h1>
      <div className='space-y-2 mb-4' >
        <p className='text-xl' >Stores</p>
        <CreateStoreForm/>
        <GetStoreForm/>
        <UpdateStoreForm/>
        <DeleteStoreForm/>

      </div>

      <div className='space-y-2 my-4' >
        <p className='text-xl' >Cards</p>

        <GetUserForm/>

      </div>



    </>
  )
}

export default App
