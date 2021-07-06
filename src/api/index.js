import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-web-app-duplicate.herokuapp.com/',
  timeout: 5000
});

export const api = {
  getLangs: async () => {
    return (await instance.get('/lang')).data;
  },
  getCategories: async () => {
    return (await instance.get('/cat')).data;
  },
  getCategpriesToDisplay: async () => {
    return (await instance.get('/textTocat')).data;
  },
  getCaption: async ({
    Initialisation,
    postCategory, 
    postRequest , 
    postLanguage
    }) => {
    return (await instance.post('caption', {
      Initialisation: JSON.stringify(Initialisation),
      postCategory, 
      postRequest , 
      postLanguage
    })).data
  },
  getDesign: async ({
    postCategory, 
    postRequest , 
    postLanguage
  }) => {
    return (await instance.post('design', {
      postCategory, 
      postRequest, 
      postLanguage
    })).data
  }
}