import React from 'react'

const ChatManagement = () => {
  const chatData = [
    {
      Client: 'Hello',
      AI: 'Hi'
    },
    {
      Client: 'How are you?',
      AI: 'I am good,Thanks for asking, what about you😊?'
    },
    {
      Client: 'I am also good😉',
      AI: 'Tell me,how may i help you'
    },

  ]
  return (

    <>
      {/* Container -main div  that gives height and width*/}
      <div className="flex justify-center  h-full">
        {/* Box div in which all the data is available */}
        <div className="w-[32rem] h-[38rem] bg-[#fff] rounded-xl">
          {/* upper div conatining name and image */}
          <div className="flex bg-[#4E2D79]">
            <span className="bg-black w-9 h-9 rounded-full my-4 mx-8 "></span>
            <p className='text-white py-5 text-lg'>Artifical Intelligent</p>
          </div>
          {/* Bottom div conatining chat  */}

          {
            chatData.map((value) => (
              <>
                <div className='flex justify-end'>
                  <p className="bg-[#D3D3D3] text-right border-2  my-4 mx-4 inline-block rounded-lg py-2 px-2 text-lg">{value.Client}</p>
                </div>
                <div className='flex justify-start'>
                  <p className="bg-[#4E2D79] text-white text-left border-2  mx-4 inline-block rounded-xl  py-2 px-2 text-lg">{value.AI}</p>
                </div>

              </>
            ))
          }






        </div>
      </div>
    </>
  )
}

export default ChatManagement
