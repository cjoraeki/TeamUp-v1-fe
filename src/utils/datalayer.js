import axios from "axios";
export const baseUrl = "http://localhost:8080/api/v1";
const Authorization = localStorage.getItem("token");
const config = {
  headers: {
    // Authorization: Authorization,
    "Content-Type": "application/json",
  },

  baseURL: baseUrl,
};

export const getData = async (path) => {
  try {
    const res = await axios.get(`${path}`, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendData = async (path, content) => {
  try {
    const res = await axios.post(path, content, config);

    const { status, data, message } = res;
    console.log(status, data, message);
    return { status: status, error: null, data, message };
  } catch (error) {
    console.log(error);
    return {
      status: error.response.data.status,
      error: error.message,
      data: null,
    };
  }
};

export const updateAData = async (path, data) => {
  try {
    const res = await axios.patch(path, data, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAllData = async (path, data) => {
  try {
    const res = await axios.patch(path, data, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (path) => {
  try {
    const res = await axios.patch(path, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
