import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  // getRandomDog: function () {
  //   return axios.get("https://randomuser.me/api/?results=200&nat=us");
  // },
  // getDogsOfBreed: function (breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  getEmployeeList: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
    // return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
