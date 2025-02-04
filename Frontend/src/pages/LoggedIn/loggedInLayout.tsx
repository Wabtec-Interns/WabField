import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const loggedInLayout = () => {
  return (
    <>
      <div className='min-h-screen flex bg-gray-900 w-full h-full flex-col'>
        <Navbar />
       
       
       <section className='flex mt-20  min-w-full flex-col flex-grow'>
          <Outlet />
       </section>
      </div>
    </>
  )
}

export default loggedInLayout