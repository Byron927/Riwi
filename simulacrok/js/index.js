//selectores
const news = document.getElementById("contenedor-news");
const URLBase = "http://localhost:3000";
console.log("object");

document.addEventListener("DOMContentLoaded", () => {
  getNotices();
});
async function getNotices() {
  const response = await fetch(`${URLBase}/news?_embed=user&_embed=category`);
  const data = await response.json();
  // pantalla del home
  pintarNews(data);
  console.log(data);
}

function pintarNews(data) {
  cleanHTML();
  data.forEach((notice) => {
    const div = document.createElement("div");
    div.classList.add("d-flex");
    div.classList.add("col-6");
    div.classList.add("g-0");
    div.innerHTML += `
    <div class="col-md-4 imagen">
      <img
        src="${notice.url}"
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${notice.name}</h5>  
      <p class="card-text">
        ${notice.description}
      </p>
      <p class="card-text">
      <small class="text-body-secondary">${notice.date}</small>
      </p>
    </div>
    </div>
    `;

    news.appendChild(div);
  });
}

function cleanHTML() {
  while (news.firstChild) {
    news.removeChild(news.firstChild);
  }
}
