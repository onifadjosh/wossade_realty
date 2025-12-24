import React from 'react'

const StatCard = ({stat, title, subtitle}:{stat:string, title:string, subtitle:string}) => {
  return (
    <div className='border border-white rounded-lg p-8 flex text-center flex-col gap-3 items-center justify-center'>
        <h1 className='text-6xl font-bold text-white'>{stat}</h1>

        <p className='text-2xl font-semibold text-white'>{title}</p>

        <p className='text-2xl font-semibold text-white '>
            {subtitle}
        </p>
    </div>
  )
}

export default StatCard