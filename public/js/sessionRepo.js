const sessionURL = 'sessions.json';

let sessionList = [];

const getSessions = () => {
  return new Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function (e) {
        sessionList = e.target.response;
        resolve(sessionList);
    };
    oReq.open("GET", sessionURL, true);
    oReq.responseType = "json";
    oReq.send();
  });
};

// export {getSessions};
export {getSessions as default, sessionURL}; // From other file: 'import "sessions" from "js/modules/sessionRepo.js"' (can call imported method whatever you want)
// "OR" export default getSessions; // From other file: 'import'
