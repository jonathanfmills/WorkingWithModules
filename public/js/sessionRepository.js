const sessionURL = 'sessions.json';

let sessionList = [];

export default function getSessions() {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionList = e.target.response
            resolve(sessionList);
        };
        oReq.open('GET', sessionURL, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

// Deafault exports
export {getSessions as default , sessionURL };


// default as it is not important to understand what is happening in these files -- just give it..

// Aggregating Modules
export { sessionTemplate } from './template.js';

// allows what get's imported into app.js very minimum. Will just have to import one thing into app.js 

  //export {getSessions};


  // export {getSessions as sessions}; would then use: import {sessions} from ' ./sessionsRepository.js';