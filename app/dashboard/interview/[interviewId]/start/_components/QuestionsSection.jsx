import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {

  const textToSpeach=(text)=>{
    if('speechSynthesis' in window){
      const speech=new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }
    else{
      alert('Sorry, Your browser does not support text to speech')
    }
  }
  return mockInterviewQuestion&&(
    <div className='p-5 border rounded-lg my-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQuestion&&mockInterviewQuestion.map((question,index)=>(
            <h2 className={`p-2 bg-secondary rounded-full
            text-xs md:text-sm text-center cursor-pointer
            ${activeQuestionIndex==index&&'bg-blue-700 text-purple-500'}`}>Question #{index+1}</h2>
        ))}

      </div>
      <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
      <Volume2 className='cursor-pointer' onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)}/>


        <div className='border rounded-lg p-5 bg-blue-100 mt-10'>
            <h2 className='flex gap-2 items-center text-red-700'>
                <Lightbulb/>
                <strong>Note:</strong>
            </h2>
            <h2 className='text-sm text-red-700 my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
            <h2 className='text-sm mt-3 flex gap-2 items-center text-red-700'><strong>Disclaimer</strong></h2>
            <p className='text-sm flex gap-2 items-center text-red-700'>Please make sure to enable the audio before answering the question.</p>
        </div>
    </div>
  )
}

export default QuestionsSection
