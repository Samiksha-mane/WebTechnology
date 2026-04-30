// HOME PAGE DATE
let date = document.getElementById("date");
if(date){
  date.innerHTML = new Date().toDateString();
}

// MEMBERS
let allMembers = [];

async function loadMembers(){
  try {
    let res = await fetch('http://localhost:3000/api/members');
    let data = await res.json();
    allMembers = data;
    showMembers(data);
  } catch(err){
    console.log(err);
  }
}

function showMembers(data){
  let div = document.getElementById("memberList");
  if(!div) return;

  div.innerHTML = "";

  data.forEach(m => {
    div.innerHTML += `
      <div class="card">
        <h3>${m.name}</h3>
        <p>${m.role}</p>
      </div>
    `;
  });
}

function searchMember(){
  let text = document.getElementById("search").value.toLowerCase();

  let filtered = allMembers.filter(m =>
    m.name.toLowerCase().includes(text) ||
    m.role.toLowerCase().includes(text)
  );

  showMembers(filtered);
}

loadMembers();


// EVENTS
async function loadEvents(){
  try {
    let res = await fetch('http://localhost:3000/api/events');
    let events = await res.json();

    let up = document.getElementById("upcoming");
    let past = document.getElementById("past");

    if(!up) return;

    up.innerHTML = "";
    past.innerHTML = "";

    let today = new Date();

    events.forEach(e => {
      let card = `
        <div class="card">
          <h3>${e.name}</h3>
          <p>${e.date}</p>
          <p>${e.desc}</p>
        </div>
      `;

      if(new Date(e.date) > today){
        up.innerHTML += card;
      } else {
        past.innerHTML += card;
      }
    });

  } catch(err){
    console.log(err);
  }
}

loadEvents();