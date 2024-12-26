import { defer } from "react-router-dom" ;
import apiRequest from "./apiRequest" ;


export const singlePageLoader = async ({ request ,params}) => {
    const res = await apiRequest("/posts/" + params.id) ;
    return res.data ;
};

export const listPageLoader = async ({ request }) => {
  try {
    const query = request.url.split("?")[1]; // Extract query string
    const res = await apiRequest("/posts?" + query); // Await the API response
    return res.data; // Return the resolved data
  } catch (error) {
    console.error("Error in listPageLoader:", error);
    return null; // Return null or a fallback value
  }
};
    
export const profilePageLoader = async () => {
    const postPromise = apiRequest("/users/profilePosts");
    const chatPromise = apiRequest("/chats");
    return defer({
      postResponse: postPromise,
      chatResponse: chatPromise,
    });
  };