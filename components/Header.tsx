import SearchInput from "./SearchInput"
import { TiWeatherPartlySunny } from 'react-icons/ti'

const Header = () => {
  return (

    <div className="flex w-full flex-col md:flex-row gap-3 justify-between px-5 md:px-10 py-10">
      <div className="font-bold text-xl flex gap-2 items-center">
        <TiWeatherPartlySunny />
        Weather Snap
      </div>
      <SearchInput />
    </div>

  )
}

export default Header