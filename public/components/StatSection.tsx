import React from 'react'
import StatCard from './StatCard'

const StatSection = () => {
  return (
    <div className='py-10 px-4 flex flex-col justify-center lg:flex-row gap-6 bg-emerald-900'>
        <StatCard stat="20+" title="Years of Experience" subtitle="Building excellence in since 2005"/>

        <StatCard stat="15+" title="Projects Completed" subtitle="Successful construction projects"/>

        <StatCard stat="100%" title="Trusted by Government" subtitle="Reliable partnerships with agencies"/>
    </div>
  )
}

export default StatSection