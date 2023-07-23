
import Image from 'next/image'

interface Props {
  src: string,
  label: string,
  data: string
}

const IconWithData = (props: Props) => {
  return (
    <div className="flex-1 flex gap-3 bg-gray-100 dark:bg-black rounded-xl  p-4">
      <Image
        src={props.src}
        width={45}
        height={45}
        alt={props.label}
        className="my-3"
      />
      <div className="">
        <p className="text-sm text-gray-500">{props.label}</p>
        <span>{props.data}</span>
      </div>
    </div>
  )
}

export default IconWithData;