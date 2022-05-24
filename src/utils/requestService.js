import customAxios from "./axiosInterceptor";

export const callApi = ( _url, _method, _headers, _body) => {
    console.log( _url, _method, _headers, _body)
  let headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let options = {};
  options.url = _url;
  options.method = _method;

  //Combining headers
  options.headers = {
    ...headers,
    ..._headers,
  };

  // Attaching body
  if (includes(["POST", "PUT", "PATCH"], _method)) {
    if (_headers["Content-Type"] === "multipart/form-data")
      options.data = _body;
    else options.data = JSON.stringify(_body);
  }
  else{
    options.params = _body?.params || {};
  }

  return customAxios(options)
    .then((data) => {
      return data;
    })
    .catch((err) => err);
};
export const request = async (_url, _method, _headers, _body) => {
  return callApi( _url, _method, _headers, _body);
};