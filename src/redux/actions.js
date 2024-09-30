const url = `https://maps.google.com/maps/api/geocode/json?key=AIzaSyDludEg1LoGc0K1gPDsHZw4mu7XMfUV6Z4&address=`

export const fetchMakes = (string) => {
  return (dispatch) => {
      fetch(url + string)
          .then(response => response.json()) // Convert response to JSON
          .then(data => {
              console.log(data.results); // Access data.Results after parsing
              const action1 = {
                  type: "FETCH_LAT",
                  value: data.results[0].geometry.location.lat // Use parsed data
              };
              const action2 = {
                type: "FETCH_LNG",
                value: data.results[0].geometry.location.lng // Use parsed data
            };
              dispatch(action1);
              dispatch(action2);
          })
          .catch(error => {
              console.error('Error fetching makes:', error); // Handle errors
          });
  };
};