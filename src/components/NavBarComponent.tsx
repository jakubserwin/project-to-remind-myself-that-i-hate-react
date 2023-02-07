import { CiSearch } from 'react-icons/ci'

const NavBarComponent = () => (
  <div className="flex justify-between items-center w-full py-4">
    <div className="text-xl font-bold flex flex-col items-center">
      <p>🚀</p>
      <p>Spix</p>
    </div>
    <div className="flex gap-2 items-center bg-gray-100 px-4 py-2 rounded-md w-64">
      <CiSearch className="dark:text-gray-900" />
      <input type="text" className="bg-gray-100 text-sm w-full outline-none" placeholder="Search by name or location" />
    </div>
    <div className="flex items-center gap-8">
      <ul className="text-gray-900 dark:text-white uppercase font-bold text-sm flex gap-4">
        <li className="cursor-pointer">About us</li>
        <li className="cursor-pointer">The perks</li>
        <li className="cursor-pointer">faq</li>
      </ul>
      <button type="button" className="text-sm font-bold uppercase bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2 rounded-full">Join Spix club</button>
    </div>
  </div>
)

export default NavBarComponent
