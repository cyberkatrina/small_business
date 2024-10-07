export const fetchMakes = (string) => {
  const apiKey = process.env.REACT_APP_API_KEY; 
  const url = `https://maps.google.com/maps/api/geocode/json?key=${apiKey}&address=${encodeURIComponent(string)}`; // Ensure the string is properly included

  return (dispatch) => {
    console.log('API Key:', process.env.REACT_APP_API_KEY);
      fetch(url)
          .then(response => response.json()) // Convert response to JSON
          .then(data => {
              // Check if results array exists and has elements
              if (data.results && data.results.length > 0) {
                  const location = data.results[0].geometry.location;
                  const action1 = {
                      type: "FETCH_LAT",
                      value: location.lat // Use parsed data
                  };
                  const action2 = {
                      type: "FETCH_LNG",
                      value: location.lng // Use parsed data
                  };
                  dispatch(action1);
                  dispatch(action2);
              } else {
                  console.error('No results found in API response:', data);
              }
          })
          .catch(error => {
              console.error('Error fetching makes:', error); // Handle errors
          });
  };
};

export const removeItem = (index) => {
  return {
    type: 'REMOVE',
    value: index
  }
}

export const addItem = (business) => {
  return {
    type: 'ADD',
    value: business
  }
}

export const changeUser = (username) => {
  return {
    type: 'USER',
    value: username
  }
}
