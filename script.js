const students = [];

function getGrade(marks) {
  if (marks >= 90 && marks <= 100) return "Grade A";
  if (marks >= 75 && marks <= 89) return "Grade B";
  if (marks >= 50 && marks <= 74) return "Grade C";
  return "Fail";
}

function submitResult() {
  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const marks = parseInt(document.getElementById("marks").value);

  if (!name || !subject || isNaN(marks)) {
    alert("Please fill all fields correctly.");
    return;
  }

  if (marks < 0 || marks > 100) {
    alert("Please enter marks between 0 and 100.");
    return;
  }

  const grade = getGrade(marks);
  const student = { name, subject, marks, grade };
  students.push(student);

  const resultText = `Result for ${name} in ${subject}: ${grade}`;
  const totalText = `Total students entered: ${students.length}`;
  
  alert(`${resultText}\n${totalText}`);


  console.log("Student Names:");
  students.forEach(s => console.log(s.name));

  document.getElementById("name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("marks").value = "";
}

function clearAll() {
  students.length = 0;
  document.getElementById("resultMsg").textContent = "";
  document.getElementById("totalStudents").textContent = "";
  document.getElementById("name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("marks").value = "";
  console.clear();
}
