


function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstElementChild; // Use firstElementChild to ensure an element node is returned
}

function switch_trig(titles) {
  var stage = this.getAttribute("stage");
  switch(stage) {
    case "0":
      this.setAttribute("stage", "1");
      this.className = this.getAttribute("stage_1");
      break;
    case "1":
      this.setAttribute("stage", "2");
      this.className = this.getAttribute("stage_2");
      break;
    case "2":
      this.setAttribute("stage", "0");
      this.className = this.getAttribute("stage_0");
      break;
  }
  var statusIndex = parseInt(this.getAttribute("stage"));
  this.nextElementSibling.innerText = titles[statusIndex];
}

function self_name(name) {
  document.getElementById("self-name").innerText = name;
}

function self_status(status) {
  document.getElementById("self-status").innerText = status;
}

function get_switches() {
  return document.getElementsByClassName("status-switch");
}

function new_switch(title, stages, max_stages, caller) {
  var html = `
    <div class="status-switch flex flex-row items-center mt-3">
      <div class="leading-none mr-1 text-xs font-bold">${title}</div>
      <div class="flex flex-col justify-center h-4 w-8 bg-gray-400 rounded-full cursor-pointer" stage="0" stage_0="bg-gray-400 items-start" stage_1="bg-indigo-500 items-center" stage_2="bg-red-600 items-end">
        <div class="h-3 w-3 bg-white rounded-full mr-1 ml-1"></div>
      </div>
      <div class="leading-none ml-1 text-xs">Invisible</div>
    </div>
  `;
  var element = createElementFromHTML(html);
  element.querySelector('.cursor-pointer').addEventListener('click', function() {
    switch_trig.call(this, ["Invisible", "Online", "Do Not Disturb"]);
  });
  document.getElementById("left-side-list").appendChild(element);
}



document.addEventListener("DOMContentLoaded", function() {
  new_switch("Status", 'stage_0="flex flex-col justify-center h-4 w-8 rounded-full bg-gray-400 items-start" stage_1="flex flex-col justify-center h-4 w-8 rounded-full bg-indigo-500 items-center" stage_2="flex flex-col justify-center h-4 w-8 rounded-full bg-red-600 items-end"', "3", switch_trig);
});
