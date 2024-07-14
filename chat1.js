


function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstElementChild; // Use firstElementChild to ensure an element node is returned
}

function open_profile(id){
  
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

function new_switch(title, stages, max_stages) {
  var html = `
    <div class="status-switch flex flex-row items-center mt-3">
      <div class="leading-none mr-1 text-xs font-bold">${title}</div>
      <div class="flex flex-col justify-center h-4 w-8 bg-gray-400 rounded-full cursor-pointer" stage="0" ${stages}>
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

function receive_new_msg(name, profileurl, msg, id){
  var html = `
                <div profile_id="${id}" class="chat-msg col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      <img src="${profileurl}" alt="${name.charAt(0)}" items-center justify-center>
                    </div>
                    <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>${msg}</div>
                    </div>
                  </div>
                </div>
  `
  var element = createElementFromHTML(html);
  document.getElementById("messages-content").appendChild(element);
}

function send_new_msg(name,profileurl, msg, id){
  var html = `
                <div  profile_id="${id}" class="chat-msg col-start-6 col-end-13 p-3 rounded-lg">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      <img src="${profileurl}" alt="${name.charAt(0)}" items-center justify-center>
                    </div>
                    <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                      <div>${msg}</div>
                      <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"> Not sent yet </div>
                    </div>
                  </div>
                </div>
  `
  var element = createElementFromHTML(html);
  document.getElementById("messages-content").appendChild(element);

  return element
}

function self_msg_status(el, status){
  var st_el = el.children[0].children[1].children[1].innerText = status
}



document.addEventListener("DOMContentLoaded", function() {
  new_switch("Status", 'stage_0="flex flex-col justify-center h-4 w-8 rounded-full bg-gray-400 items-start cursor-pointer" stage_1="flex flex-col justify-center h-4 w-8 rounded-full bg-indigo-500 items-center cursor-pointer" stage_2="flex flex-col justify-center h-4 w-8 rounded-full bg-red-600 items-end cursor-pointer"', "3");

  receive_new_msg("Oki", "x", "Allo", "0")
  
  var mymsg = send_new_msg("Person1", "x", "Hello there!","0")
  self_msg_status(mymsg, "Seen")
});




