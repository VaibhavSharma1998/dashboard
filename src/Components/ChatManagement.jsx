import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineSend } from "react-icons/ai";


// import './chat.css'


const ChatManagement = () => {
  const [messages, setMessages] = useState([
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
    {
      Client: 'I want to build a chatbot,can you help me?',
      AI: 'Sure,tell me in which prefred language you want me to bulid in?'
    },
    {
      Client: 'I want in react js',
      AI: 'Generating response....'
    },

  ])


  const [inputMessage, setInputMessage] = useState('');
  // const [isChatOpen,setIsChatOpen] = useState(false)


  const chatContainerRef = useRef(null);
  const inputRef = useRef(null)



  useEffect(() => {
    // Auto-scroll the chat container to the bottom
    const container = chatContainerRef.current;
  container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });

    // Focus on the input when the component opens
    inputRef.current.focus();



  }, [messages]);




  const handleMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        Client: inputMessage,
      };
      setMessages((previousMessage) => [...previousMessage, newMessage])
      setInputMessage('')

    }
  }

  return (

    <>
      {/* Container -main div  that gives height and width*/}
      <div className="flex justify-center  h-full">
        {/* Box div in which all the data is available */}
        <div className="w-[32rem] h-[38rem] bg-[#fff] rounded-xl"  style={{ transition: 'scroll-behavior 0.5s' }}>
          {/* upper div conatining name and image */}
          <div className="flex bg-[#4E2D79]">
            <span className="bg-black w-9 h-9 rounded-full my-4 mx-8 "></span>
            <p className='text-white py-5 text-lg'>Artifical Intelligent</p>
          </div>


          {/* Bottom div conatining chat  */}

          <div className={`overflow-y-auto h-[28rem] `} ref={chatContainerRef} >
            {messages.map((value, index) => (
              <div key={index}>
                <div className="flex justify-end">
                  <p className="bg-[#D3D3D3] text-right border-2 my-3 mx-4 inline-block rounded-lg py-2 px-2 text-lg">
                    {value.Client}
                  </p>
                </div>
                {value.AI && value.AI.trim() !== '' && (
                  <div className="flex justify-start">
                    <p className="bg-[#4E2D79] text-white text-left border-2 mx-4 inline-block rounded-xl py-2 px-2 text-lg">
                      {value.AI}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* last  send data */}

          <div className='absolute flex items-center'>
            <input type="text" name="text" id="text" placeholder="send a message.." className="border-2 border-[#4E2D79] pl-5 w-[25rem] bg-[#D3D3D3] text-lg py-2 px-2 outline-none rounded-3xl ml-12 mt-5" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} ref={inputRef} />
            {<AiOutlineSend className='relative right-10 cursor-pointer text-[#4E2D79] mt-5' onClick={handleMessage} />}
          </div>
        </div>
      </div>

      
    </>
  )
}

export default ChatManagement
