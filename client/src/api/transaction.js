import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/",
  timeout: 1000,
});

const findByDate = async (date) => {
  return new Promise((resolve, reject) => {
    api.get(`transaction?period=${date}`).then((data) => {
      resolve(data.data);
    }).catch(() => {
      reject();
    });
  });
};

export { findByDate };
