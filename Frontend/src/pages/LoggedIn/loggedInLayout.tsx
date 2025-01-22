import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const loggedInLayout = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-900 flex flex-col'>
        <Navbar />
       
       
       <section className='flex mt-20 min-w-full flex-col'>
          <Outlet />
       </section>
      </div>
    </>
  )
}

export default loggedInLayout