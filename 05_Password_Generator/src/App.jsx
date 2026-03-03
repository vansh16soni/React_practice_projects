import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [cha, setChar] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false) // NEW STATE

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (num) str += "0123456789"
    if (cha) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }

    setPassword(pass)
  }, [length, num, cha])

  const copyPasstoClip = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)

    // Show popup
    setCopied(true)

    // Hide after 2 seconds
    setTimeout(() => {
      setCopied(false)
    }, 2000)

  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, num, cha, generatePassword])

  return (
    <>
      <h1 className='text-white text-center my-3 text-2xl font-bold'>
        Password Generator
      </h1>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 text-green-500 bg-gray-800 relative'>

    
        {copied && (
          <div className="absolute -top-10 right-0 bg-green-600 text-white px-3 py-1 rounded shadow-lg animate-bounce">
            Copied!
          </div>
        )}

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-gray-700 text-green-500'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasstoClip}
            className='
              outline-none 
              bg-blue-700 
              text-white 
              px-4 
              py-1 
              shrink-0 
              transition-all 
              duration-300
              hover:bg-blue-500
              hover:scale-105
              active:scale-95
              rounded-r-lg
            '
          >
            COPY
          </button>
        </div>

        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-1'>
            <input
              type="checkbox"
              checked={num}
              id="numberInput"
              onChange={() => setNum(prev => !prev)}
            />
            <label htmlFor="numberInput">NUM</label>
          </div>

          <div className='flex items-center gap-1'>
            <input
              type="checkbox"
              checked={cha}
              id="charInput"
              onChange={() => setChar(prev => !prev)}
            />
            <label htmlFor="charInput">CHAR</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App