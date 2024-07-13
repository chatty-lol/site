function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

function switch_trig(titles) {
  var stage = this.getAttribute("stage");
  
  alert(stage);
  
  switch(stage) {
    case "0":
      // Add logic for case 0
      break;
    case "1":
      // Add logic for case 1
      break;
    case "2":
      // Add logic for case 2
      break;
  }
}

function self_name(name) {
  document.getElementById("self-name").innerText = name;
}

function self_status(status) {
  document.getElementById("self-status").innerText = status;  // Changed 'name' to 'status'
}

function get_switches() {
  return document.getElementsByClassName("status-switch");
}

function new_switch(title, stages, max_stages, caller) {
  var html = `
    <div class="status-switch flex flex-row items-center mt-3">
      <div class="leading-none mr-1 text-xs font-bold">${title}</div>
      <div class="flex flex-col justify-center h-4 w-8 bg-gray-400 rounded-full cursor-pointer" stage="0" max_stages="${max_stages}" ${stages} onclick="${caller}">
        <div class="h-3 w-3 bg-white rounded-full mr-1 ml-1"></div>
      </div>
      <div class="leading-none ml-1 text-xs">Invisible</div>
    </div>
  `;
  document.getElementById("left-side-list").appendChild(createElementFromHTML(html));
}

new_switch("Status", 'stage_0="bg-gray-400 items-start" stage_1="bg-indigo-500 items-center" stage_2="bg-red-600 items-end"', "3", 'switch_trig(["Invisible", "Online", "Do Not Disturb"])');
