import Calendar from '../Calendar'
import MonthlyEmotion from '../MonthlyEmotion'

const EmotionalCalendar = () => {
  return (
    <div className='flex max-h-screen min-h-screen'>
      <Calendar/>
      
      <MonthlyEmotion/>
    </div>
  )
}

export default EmotionalCalendar
