import axios from "axios";

export const instance = axios.create({
  baseURL: "https://63fe35d1571200b7b7c7604e.mockapi.io/users",
});

const ERROR_500_MESSAGE = "Internal server error.";

export const getTweets = async () => {
  try {
    const { data } = await instance.get("/");
    return data;
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
