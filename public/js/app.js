import getSessions, {sessionTemplate, sessionURL} from './sessionRepository.js'; // this is a default import so it does not really matter what we call this eg could be import jon from....
import * as template from './template.js'; //or sessionTemplate as template 

function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = sessionTemplate(data.listItems);
};


var data = {
    listItems: []
};

getSessions()
    .then((sessions) => {
        console.log('promises!')
        data.listItems = sessions;
        render();
    });

/*
because default can also be like

import jon from './sessionRepository.js';

and then

jon()
    .then((sessions) => {
        console.log('promises!')
        data.listItems = sessions;
        render();
    });
*/