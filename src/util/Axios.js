import axios from "axios";
import { baseUrl } from "../config/config.json";

export const getResponse = async (url, token) => {
  try {
    const data = await axios.get(`${baseUrl}${url}`, {
      headers: token && {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const postRequest = async (url, request, token) => {
  try {
    const data = await axios.post(`${baseUrl}${url}`, request, {
      headers: token && {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const modifyRequest = async (url, request, token) => {
  try {
    const data = await axios.put(`${baseUrl}${url}`, request, {
      headers: token && {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteRequest = async (url, token) => {
  try {
    const data = await axios.delete(`${baseUrl}${url}`, {
      headers: token && {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
