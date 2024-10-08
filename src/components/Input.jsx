import React, {userId} from 'react'

const Input = React.forwardRef( function Input({
  label,
  type = 'text',
  className =  "",
  ...props
}, ref) {
  const id = userId() 
  return (
    <div className='w-full'>
      {label && <lable
        className = 'inline-block mb-1 pl-1'
        htmlFor = {id}>
          {label}
        </lable>
      }

      <input
      type = {type}
      className={`px-3 py-2 rounded-lg bg-white
         text-black outline-none focus:bg-gray-50
          duration-200 border border-fray-200 w-full 
          ${className}`}
          ref = {ref}
          />
    </div>
  )
})

export default Input