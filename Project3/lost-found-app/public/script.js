const BASE_URL = "http://localhost:5000"; // ✅ matches your server

let currentFilter = "All";

// ADD ITEM
async function addItem() {
  const type = document.getElementById('type').value;
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const contact = document.getElementById('contact').value;
  const message = document.getElementById('message');

  if (!type || !name || !description || !contact) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/api/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, name, description, contact })
    });

    if (!res.ok) {
      message.innerText = "Error adding item!";
      return;
    }

    message.innerText = "Item added successfully!!";

    // clear form
    document.getElementById('type').value = "";
    document.getElementById('name').value = "";
    document.getElementById('description').value = "";
    document.getElementById('contact').value = "";

    loadItems();

    // remove message after 3 sec
    setTimeout(() => message.innerText = "", 3000);

  } catch (error) {
    console.error("Error:", error);
    message.innerText = "Server error!";
  }
}

// FILTER
function setFilter(filter) {
  currentFilter = filter;
  loadItems();
}

// DELETE
async function deleteItem(id) {
  await fetch(`${BASE_URL}/api/item/${id}`, {
    method: 'DELETE'
  });
  loadItems();
}

// SEARCH
async function searchItems() {
  const query = document.getElementById('searchInput').value;

  const res = await fetch(`${BASE_URL}/api/search?q=${query}`);
  const data = await res.json();

  displayItems(data);
}

// LOAD ITEMS
async function loadItems() {
  let url = `${BASE_URL}/api/items`;

  if (currentFilter !== "All") {
    url += `?type=${currentFilter}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  console.log("Loaded items:", data); // ✅ debug

  displayItems(data);
}

// DISPLAY
function displayItems(data) {
  const itemsDiv = document.getElementById('items');
  itemsDiv.innerHTML = "";

  if (data.length === 0) {
    itemsDiv.innerHTML = "<p>No items available</p>";
    return;
  }

  data.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('card', item.type.toLowerCase());

    div.innerHTML = `
      <button class="delete-btn" onclick="deleteItem(${item.id})">X</button>
      <h3>${item.type}: ${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>Contact:</strong> ${item.contact}</p>
      <p><small>${item.date}</small></p>
    `;

    itemsDiv.appendChild(div);
  });
}

// INITIAL LOAD
loadItems();