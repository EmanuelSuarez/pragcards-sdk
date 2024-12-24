export const updateStore = async (storeId, storeData) => {
    const apiUrl = `https://ypwczb4r11.execute-api.us-east-1.amazonaws.com/dev/stores/${storeId}`;

    const requestData = {
        name: storeData.name,
        contactInfo: storeData.contactInfo,
        rewardCriteria: storeData.rewardCriteria,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${yourJwtToken}`,  // Add your JWT token here if authentication is used
            },
            body: JSON.stringify(requestData),
        });

        if (!response.ok) {
            // Handle error responses
            const errorData = await response.json();
            console.error("Error updating store:", errorData);
            throw new Error(`Update failed: ${errorData.message}`);
        }

        const responseData = await response.json();
        console.log("Store updated successfully:", responseData);
        return responseData; // Contains updated store information

    } catch (error) {
        console.error("Failed to update store:", error.message);
    }
};



// Example usage

// const storeId = "12345"; // Replace with actual store ID
// const storeData = {
//     name: "Updated Store Name",
//     contactInfo: "updated.email@example.com",
//     rewardCriteria: "Earn 2 points for every $1 spent",
// };

// updateStore(storeId, storeData);