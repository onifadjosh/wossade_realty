'use client'

const Error = ({error, reset}:{error:Error, reset:()=>void}) => {
    console.log(error)
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
       <h1> This Page is not working or under construction</h1>

       <button onClick={reset} className='py-2 px-5 bg-emerald-900 rounded-md text-light'>Try Again</button>
    </div>
  )
}

export default Error