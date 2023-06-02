import axios from "axios";

export const instance = axios.create({
  baseURL: "https://63fe35d1571200b7b7c7604e.mockapi.io/users",
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const ERROR_500_MESSAGE = "Internal server error.";

export const getTweets = async (page) => {
  try {
    const res = await instance.get(`/?page=${page}&limit=3`);
    return res;
  } catch (error) {
    const {
      message: errorMessage,
      response: {
        status,
        data: { message: responseMessage },
      },
    } = error;
    switch (status) {
      case 500:
        throw new Error(ERROR_500_MESSAGE);
      default:
        throw new Error(
          responseMessage || errorMessage || "Failed to get tweets"
        );
    }
  }
};

export const updateFollowing = async (id, isFollowing) => {
  try {
    const res = await instance.put(`/${id}`, isFollowing);
    return res;
  } catch (error) {
    const {
      message: errorMessage,
      response: {
        status,
        data: { message: responseMessage },
      },
    } = error;
    switch (status) {
      case 500:
        throw new Error(ERROR_500_MESSAGE);
      default:
        throw new Error(
          responseMessage || errorMessage || "Failed to update tweet"
        );
    }
  }
};
