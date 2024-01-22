const getItem = localStorage.getItem("user");

const getTokenFromLocalStorage = getItem ? JSON.parse(getItem) : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json"
  }
};
