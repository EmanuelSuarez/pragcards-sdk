
export const getUser = async (customerID, storeID) => {
    
    const apiUrl = `https://ypwczb4r11.execute-api.us-east-1.amazonaws.com/dev/cutomers`;

    // Prepare the URL with query parameters
    const url = new URL(apiUrl);
    url.searchParams.append('customerID', customerID);
    url.searchParams.append('storeID', storeID);

    try {
        // Call the API using Fetch
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Check if the response is successful
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch user data');
        }

        // Parse and return the JSON data
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching user points:', error);
        return null; // or throw the error to be handled by the caller
    }
}