import React from 'react'

interface Props {
  icon: React.ReactNode,
  label: string,
  data: string
}

const IconWithData = (props: Props) => {
  return (
    <div className="flex-1 flex gap-5 bg-gray-100 dark:bg-black rounded-xl  p-5 items-center">
      <span className='text-2xl md:text-5xl'>{props.icon}</span>
      <div className="flex xl:flex-col gap-3 items-center md:items-start">
        <p className="text-sm text-gray-500">{props.label}</p>
        <span>{props.data}</span>
      </div>
    </div>
  )
}

export default IconWithData;