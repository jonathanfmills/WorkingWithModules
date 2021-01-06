// this is my default import... getSessions. w/a hybrid module template.
import getSessions, * as sessionRepository from './sessionRepository.js';

function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = sessionRepository.sessionTemplate(data.listItems);
};


var data = {
    listItems: []
};

getSessions()
    .then((sessions) => {
        console.log('promises!');
        data.listItems = sessions;
        render();
    });

