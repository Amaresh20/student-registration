document.querySelector("form").addEventListener("submit", myToDo);
const dataArr = JSON.parse(localStorage.getItem("dataObj")) || [];
displayData(dataArr);
if (dataArr.length > 10) {
  document.querySelector(".right-side").style.overflow = "auto";
}
function myToDo(event) {
  event.preventDefault();
  const studentName = document.querySelector("#student-name").value;
  const studentId = document.querySelector("#student-id").value;
  const email = document.querySelector("#email").value;
  const contact = document.querySelector("#contact-no").value;
  console.log(studentName, studentId, email, contact);
  const dataObj = {
    studentName: studentName,
    studentId: studentId,
    email: email,
    contact: contact,
  };
  if (
    !dataObj.studentName ||
    !dataObj.studentId ||
    !dataObj.email ||
    !dataObj.contact
  ) {
    alert("please give the information");
    return;
  }
  dataArr.push(dataObj);
  localStorage.setItem("dataObj", JSON.stringify(dataArr));
  displayData(dataArr);
  document.querySelector("form").reset();
}

function displayData(data) {
  document.querySelector("tbody").innerHTML = "";
  data.map(function (elem, index) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = elem.studentName;
    const td2 = document.createElement("td");
    td2.innerText = elem.studentId;
    const td3 = document.createElement("td");
    td3.innerText = elem.email;
    const td4 = document.createElement("td");
    td4.innerText = elem.contact;
    const td5 = document.createElement("td");
    td5.innerText = "Edit";
    td5.addEventListener("click", function () {
      editData(elem, index);
    });
    td5.style.backgroundColor = "mediumspringgreen";
    const td6 = document.createElement("td");
    td6.innerText = "Delete";
    td6.style.backgroundColor = "red";
    td6.addEventListener("click", function () {
      deleteToDo(index);
    });

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });
}

function deleteToDo(index) {
  dataArr.splice(index, 1);
  displayData(dataArr);
  localStorage.setItem("dataObj", JSON.stringify(dataArr));
}

function editData(elem, index) {
  const { studentName, studentId, email, contact } = elem;
  document.querySelector("#student-name").value = studentName;
  document.querySelector("#student-id").value = studentId;
  document.querySelector("#email").value = email;
  document.querySelector("#contact-no").value = contact;
  document.querySelector("#submit").style.display = "none";
  let updateBtn = document.querySelector("#update");
  if (!updateBtn) {
    updateBtn = document.createElement("button");
    updateBtn.id = "update";
    updateBtn.innerText = "Update";
    document.querySelector("form").append(updateBtn);
  }
  updateBtn.style.display = "block";
  updateBtn.onclick = function (event) {
    event.preventDefault();
    const updatedObj = {
      studentName: document.querySelector("#student-name").value,
      studentId: document.querySelector("#student-id").value,
      email: document.querySelector("#email").value,
      contact: document.querySelector("#contact-no").value,
    };
    dataArr[index] = updatedObj;
    localStorage.setItem("dataObj", JSON.stringify(dataArr));
    displayData(dataArr);
    document.querySelector("form").reset();
    updateBtn.style.display = "none";
    document.querySelector("#submit").style.display = "block";
  };
}
