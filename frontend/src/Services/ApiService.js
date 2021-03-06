import axios from "axios";
const ROOT_URL = process.env.REACT_APP_SERVICE_AUTH_URL;

const ApiService = {

      get(resource, slug="") {
            return axios.get(`${ROOT_URL}/${resource}/${slug}`).catch(error => {
                  throw new Error(`ApiService GET ${error}`);
            });
      },

      getOne(resource, slug) {
            return axios.get(`${ROOT_URL}/${resource}/${slug}`).catch(error => {
                  throw new Error(`ApiService GET ${error}`);
            });
      },

      post(resource, params) {
            return axios.post(`${ROOT_URL}/${resource}`, params).catch(error => {
                  throw new Error(`ApiService POST ${error}`);
            });
      },

      put(resource, slug, params) {
            return axios.put(`${ROOT_URL}/${resource}/${slug}`, params).catch(error => {
                  throw new Error(`ApiService UPDATE ${error}`);
            })
      },

      delete(resource, slug) {
            return axios.delete(`${ROOT_URL}/${resource}/${slug}`).catch(error => {
                  throw new Error(`ApiService DELETE ${error}`);
            });
      },

      filter(resource, params) {
            return axios.post(`${ROOT_URL}/${resource}`, params).catch(error => {
                  throw new Error(`ApiService GET ${error}`);
            });
      },


};

export default ApiService;