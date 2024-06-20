const nome = document.querySelector("#nome");
const telefone = document.querySelector("#telefone");
const form = document.querySelector("#form");
const tbody = document.querySelector("#tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  tbody.innerHTML += `
    <tr>
            <td>${nome.value}</td>
            <td>${telefone.value}</td>
          </tr>`;
});
