import { Outlet } from 'react-router-dom'

const loggedInLayout = () => {
  return (
    <>
        <div className="flex h-full w-full flex-col">
            
        </div>

        <Outlet />
    </>
  )
}

export default loggedInLayout