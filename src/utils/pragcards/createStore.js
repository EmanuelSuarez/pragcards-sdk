export const createStore = async ({ storeId, name, contactInfo, rewardCriteria }) => {
    try {
      const storeData = {
        storeId,
        name,
        contactInfo,
        rewardCriteria
      };
  
      const response = await fetch("https://ypwczb4r11.execute-api.us-east-1.amazonaws.com/dev/stores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(storeData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error creating store:', error);
    }
  };
  
  // Example usage

//   const storeDetails = {
//     storeId: "12345",
//     name: "The Great Bakery",
//     contactInfo: "123 Bread St, Bakersville",
//     rewardCriteria: "Buy 1 Get 1"
//   };
  
//   createStore(storeDetails);