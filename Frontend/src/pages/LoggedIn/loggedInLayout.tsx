import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const loggedInLayout = () => {
  return (
    <>
        <div className="flex h-full w-full flex-col">
            <Navbar />
        </div>

        <Outlet />
    </>
  )
}

export default loggedInLayout