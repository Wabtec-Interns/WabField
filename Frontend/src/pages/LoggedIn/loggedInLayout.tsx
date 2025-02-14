import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const loggedInLayout = () => {
  return (
    <>
      <div className='min-h-screen flex bg-gray-900 w-full h-full flex-col'>
        <div
          className='z-50 flex-1 flex-col flex-shrink-0 bg-gray-900'
        >
          <Navbar />
        </div>
       
       
       <section className='flex mt-20  min-w-full flex-col flex-grow'>
          <Outlet />
       </section>
      </div>
    </>
  )
}

export default loggedInLayout