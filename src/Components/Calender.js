
import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


function Calender() {
    const localizer = momentLocalizer(moment);
    const [trainings, setTrainings] = useState([]);
    
    useEffect(() => {
     getTrainings();
    }, []);


const getTrainings = () => {
  fetch('https://customerrest.herokuapp.com/gettrainings')
  .then(response => response.json())
  .then(data => setTrainings(data))
  .catch(err => console.error(err))
}

const event = trainings.map(training => {
    return {
        id: training.id ,
        title: training.activity + " | " + training.customer.firstname + " " + training.customer.lastname,
        start: new Date(training.date),
        end: moment(training.date).add(training.duration, 'minutes').toDate(),
        allDay: false
    }
})

return(
    <div>
        
        <h1>Calendar</h1>
        <Calendar
        localizer={localizer}
        events={event}
        allDayAccessor='allDay'
        titleAccessor='title'
        resourceAccessor='resource'
        startAccessor='start'
        showMultiDayTimes
        endAccessor='end'
        onView={() => { }}
        style={{ height: 500, width: 1000, position: 'absolute', right: 220 }}
      />
    </div>
)

} 
export default Calender; 