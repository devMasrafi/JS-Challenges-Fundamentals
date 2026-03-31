const fetchDataBtn = document.querySelector(".fetchBtn");
const userList = document.querySelector(".userList");
const toggleTheme = document.querySelector(".themeBtn");

let apiDataArr = [];
// console.log(userList)
fetchDataBtn.addEventListener("click", function () {
  getApiData();
});

toggleTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    toggleTheme.textContent = `Toggel Theme: Light`
  } else {
    toggleTheme.textContent = `toggle Theme: Dark`

  }
});

async function getApiData() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);
    // console.log(response);

    if (!response.ok) {
      console.log(`server error`);
    }

    const data = await response.json();
    apiDataArr = data;
    // console.log(data)
    displayUser(apiDataArr);
  } catch (error) {
    console.log(error.message);
  }
}

function displayUser(apiData) {
  userList.innerHTML = "";

  // ✅ recreate header
  const header = document.createElement("li");
  header.classList.add("header");

  header.innerHTML = `
    <span>Name</span>
    <span>Username</span>
    <span>Website</span>
    <span>Email</span>
    <span>Action</span>
  `;

  userList.appendChild(header);

  apiData.forEach((user, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    const name = document.createElement("span");
    const userName = document.createElement("span");
    const email = document.createElement("span");
    const website = document.createElement("span");

    name.textContent = user.name;
    userName.textContent = user.username;
    email.textContent = user.email;
    website.textContent = user.website;

    btn.textContent = "Delete";

    btn.addEventListener("click", function () {
      apiDataArr.splice(index, 1);
      displayUser(apiDataArr);
    });

    li.append(name, userName, website, email, btn);
    userList.appendChild(li);
  });
}
