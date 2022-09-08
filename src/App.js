import React from 'react';

function App() {
  return (
    <div
      className="w-full h-screen grid content-center
                justify-center bg-background"
    >
      <div
        className='bg-backgroundSection border-0 
                  rounded-3xl px-8 py-16 sm:px-10 sm:py-20'>
        <div>
          <h1 className='text-white font-semibold 
                        text-4xl font-Sans-Pro mb-10
                        sm:text-6xl'
          >
            Password generator
          </h1>
          <input
            type="text" 
            placeholder='Password' 
            id='password'
            readOnly
            className='
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border-2 border-solid border-gray-300
              rounded
              transition
              duration-500
              ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-btnGrad3 focus:outline-none
            '
          />
          <a
            className='text-transparent bg-clip-text bg-gradient-to-r
                      from-btnGrad via-btnGrad2 to-btnGrad3
                      font-Sans-Pro text-xs font-bold'
            href="https://password.kaspersky.com/"
            target="_blank"
            rel="noreferrer"
          >
            Check security level.
            </a>
        </div>
        <div className='flex justify-around mt-5'>
          <button 
            type="button"
            className='bg-gradient-to-r from-btnGrad via-btnGrad2 to-btnGrad3
            text-white font-Sans-Pro border-0 rounded-lg py-1 px-2 sm:px-6 focus:outline-none
            hover:bg-white hover:text-black text-sm sm:text-lg transition ease-in-out duration-500'
          >
            Generate password
          </button>
          <button 
            type="button"
            className='bg-gradient-to-r from-btnGrad via-btnGrad2 to-btnGrad3
            text-white font-Sans-Pro border-0 rounded-lg py-1 px-5 sm:px-10 focus:outline-none
            hover:bg-white hover:text-black text-sm sm:text-lg transition ease-in-out duration-500'
          >
            Copy password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
