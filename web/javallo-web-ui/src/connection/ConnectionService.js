import {func} from "prop-types";

export default class ConnectionService {
  get(uri: string, onResponse: func) {
    fetch(uri, {
      method: 'GET',
      mode: 'cors',
    }).then(this.handleResponse(onResponse))
  }

  handleResponse = onResponse => response => {
    if (response.status === 200) {
      response.json().then(onResponse)
    } else {
      console.warn(response.status);
    }
  }
}