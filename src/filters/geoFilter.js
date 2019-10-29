
export default async function geoFilter(pickedGeo) {

    const apiURL = await
      fetch('http://ip-api.com/json');
      const data = await apiURL.json();

      return (data.countryCode == pickedGeo) ? true : false;
      
  }