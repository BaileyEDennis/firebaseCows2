import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// STUDENTS: Refactor this to use new Promise syntax
const getCows = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/Cows.json`)
    .then((response) => {
      const demCows = response.data;
      const cows = [];
      if (demCows) {
        Object.keys(demCows).forEach((cowID) => {
          cows.push(demCows[cowID]);
        });
      }
      resolve(cows);
    })
    .catch((error) => reject(error));
});

const addCow = (data) => axios
  .post(`${baseUrl}/Cows.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/Cows/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const deleteCow = (firebaseKey) => axios.delete(`${baseUrl}/Cows/${firebaseKey}.json`);

const getFarmerCows = (farmerUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Cows.json?orderBy="farmerUid"&equalTo="${farmerUid}}`)
    .then((response) => {
      const farmerCows = response.data;
      const cows = [];
      if (farmerCows) {
        Object.keys(farmerCows).forEach((cowID) => {
          cows.push(farmerCows[cowID]);
        });
      }
      resolve(cows);
    }).catch((error) => reject(error));
});

const getSingleCow = (cowFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Cows/${cowFirebaseKey}.json`).then((response) => {
    const thisCow = response.data;
    resolve((thisCow));
  }).catch((error) => reject(error));
});

const updateCow = (firebaseKey, cowObject) => axios.patch(`${baseUrl}/Cows/${firebaseKey}.json`, cowObject);

export default {
  getCows,
  deleteCow,
  addCow,
  getFarmerCows,
  getSingleCow,
  updateCow
};
