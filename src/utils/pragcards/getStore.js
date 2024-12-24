export const getStore = async (storeId) => {
    try { 

      const response = await fetch(`https://ypwczb4r11.execute-api.us-east-1.amazonaws.com/dev/stores/${storeId}`, {
        method: 'GET', // Ensure this matches your API method
        headers: {
          'Content-Type': 'application/json', // Ensure this matches your API's expected headers
        }
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch store details: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      return { success: true, data: data.data }; 
    } catch (error) {
      return { success: false, error: error.message };
    }
  };