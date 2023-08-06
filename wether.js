async function dailyForecast (Weather Forecast) {

    
    
    try {
    
    
    
    const response = await fetch (Weather Forecast);
    
    
    
    if (!response.ok) { throw new Error("Cannot access data in this location");
    
    }
    
    
    
    let data = await response.json(); console.log(data); displayForecast(data);
    
    

    
    } catch (error) {
    

    
    console.log(error);
    
     }
    
    }
    
    
    

    
 function displayForecast(data) {
    
    
    
    
    
    let currentDate = new Date();
    
     let currentDay = currentDate.getDay();
    
     let currentWeekDay = daysOfTheWeek [currentDay];
    
    
    
     for (const[key, value] of Object.entries(data.list)){
    
     let day = value.dt;
    
    
    
     }
    
     }
    Se