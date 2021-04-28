let recordsBase = [];

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  const records = JSON.parse(xhr.response);
  const tbody = document.querySelector("tbody");

  for (let record of records) {
    recordsBase.push(record);
    tbody.innerHTML += renderRecord(record.id, record.title, record.body);
  }
};

xhr.send();

function renderRecord(id, title, body) {
  return `
    <tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>${body}</td>
        <td>
            <button class="btn-delete" style="background-color: red">delete</button>
        </td>
    </tr>
    `;
}

function reRenderTable() {
  let table = document.querySelector("body table tbody");
  table.innerHTML = "";
  recordsBase.forEach(function (obj) {
    table.innerHTML += `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.title}</td>
            <td>${obj.body}</td>
            <td>
                <button class="btn-delete" style="background-color: red">delete</button>
            </td>
        </tr>
        `;
  });

  table.insertAdjacentHTML(
    "afterbegin",
    '<tr><td>ID</td><td><input id="new_item_title" style="width: 300px;" type="text"/></td><td><input id="new_item_body" style="width: 300px;" type="text"/></td><td><button class="btn-add" style="background-color: blue">add</button></td></tr>'
  );
}

document.addEventListener("click", function (event) {
  const target = event.target;
  let title = document.getElementById("new_item_title").value;
  let body = document.getElementById("new_item_body").value;

  if (target.classList.contains("btn-add")) {
    if (title != "" && body != "") {
      let itemToPush = {
        user_id: 1,
        id: 1,
        title: title,
        body: body,
      };

      recordsBase.forEach(function (obj) {
        obj.id = obj.id + 1;
      });

      recordsBase.unshift(itemToPush);

      reRenderTable();
    }
  }
});

document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("btn-delete")) {
    let id = target.parentNode.parentNode.querySelector("td:nth-child(1)");
    let title = target.parentNode.parentNode.querySelector("td:nth-child(2)");
    let body = target.parentNode.parentNode.querySelector("td:nth-child(3)");
    let button = target.parentNode.parentNode.querySelector("td:nth-child(4)");
    title.innerHTML = "";
    body.innerHTML = "";
    button.innerHTML = `
            <button class="btn-restore" style="background-color: green">restore</button>
        `;
  }
});

document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("btn-restore")) {
    let id = target.parentNode.parentNode.querySelector("td:nth-child(1)");
    let title = target.parentNode.parentNode.querySelector("td:nth-child(2)");
    let body = target.parentNode.parentNode.querySelector("td:nth-child(3)");
    let button = target.parentNode.parentNode.querySelector("td:nth-child(4)");
    softDelete = recordsBase.filter((obj) => {
      return obj.id === parseInt(id.innerHTML);
    });
    title.innerHTML = softDelete[0].title;
    body.innerHTML = softDelete[0].body;
    button.innerHTML = `
            <button class="btn-delete" style="background-color: red">delete</button>
        `;
  }
});
