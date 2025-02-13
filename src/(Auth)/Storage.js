export const getUser = () => {
    return JSON.parse(localStorage.getItem("user")) || null;
  };
  
  export const setUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("user");
  };