import { useState } from "react";

const DeleteStoreForm = () => {
  const [storeId, setStoreId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Delete Store with ID:", storeId);
    console.log(
      `https://ypwczb4r11.execute-api.us-east-1.amazonaws.com/dev/stores/${storeId}`
    );
    // const result = await getStore(storeId);
    // console.log(result)
    setStoreId("");
  };

  return (
    <div className="p-4 border-2">
      <h2>Delete Store</h2>
      <form action="submit" className="flex justify-between">
        <input
          type="text"
          placeholder="storeID"
          name="storeId"
          value={storeId}
          onChange={(e) => setStoreId(e.target.value)}
        />
        <button
          className="bg-black rounded py-2 px-4 text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Run
        </button>
      </form>
    </div>
  );
};

export default DeleteStoreForm;
