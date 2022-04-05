import getSessions from "./sessionRepo.js"; // Default Import (getSessions could be called anything we want)
import {sessionTemplate, errorMessage} from "./template.js"; // These names must match template.js because not exported as default
// import * as template from "./template.js"; // Imports all exports from template.js as an object under name "template"

function render() {
  var list = document.querySelector("#sessions");
  if (!list) return;
  list.innerHTML = sessionTemplate(data.listItems);
}

var data = {
  listItems: [],
};

getSessions().then((sessions) => {
  console.log("promises!");
  data.listItems = sessions;
  render();
});
