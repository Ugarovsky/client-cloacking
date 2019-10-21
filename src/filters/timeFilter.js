function timeFilter(geoTime){ 

  function getLocalTime(){

        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const localTime = (hours * 3600) + (minutes * 60);
    
        return localTime;
    
    }
    
   function CountryTime() {
    
        const newcurrentTime = new Date();
        const currentOffset = newcurrentTime.getTimezoneOffset();
        const timeZone = new Date(newcurrentTime.getTime() + (geoTime + currentOffset) * 60000);
        const CountryTime = (timeZone.getHours() * 3600) + (timeZone.getMinutes() * 60);
    
        return CountryTime;
    
    }

    const roundTime = getLocalTime() - CountryTime();
    return roundTime > -3600 && roundTime < 3600 ? true :false;

}

export default timeFilter;





