import Header from "@/components/Header"
import TodayWeather from '@/components/TodayWeather'
import HourWiseWeather from '@/components/HourWiseWeather'
import TodayHighLights from '@/components/TodayHighLights'
import CurrentPlace from '@/components/CurrentPlace'
import { WeatherState } from "@/utils/WeatherContext"

export default function Home() {
  return (
    <WeatherState>
      <Header />
      <div className="bg-cover px-5 md:px-10 py-2 flex-col flex gap-4">
        <div className=" flex flex-col gap-3 xl:gap-5 md:flex-row">
          <TodayWeather />
          <TodayHighLights />
        </div>
        <HourWiseWeather />
        <CurrentPlace />
      </div>
    </WeatherState>
  )
}
