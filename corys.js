


//CREATING A CLASS

addEventListener("DOMContentLoaded", function() {
    document.querySelector("#addBtn").addEventListener("click", addClass);
    document.querySelector("#deleteBtn").addEventListener("click", deleteClass);
   //  getAllClasses();
 });
 
 async function addClass() {
    const classes = {
       title: document.querySelector("#title").value,
       id: document.querySelector("#ID").value,
    };
    
    // POST a JSON-encoded class to Classes API (hopefully)
    const response = await fetch("http://localhost:3000/classes", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(classes)
    });
 
    if (response.ok) {
       const results = await response.json();
       alert("Added class with ID " + results._id);
 
       // Reset the form after adding the class
       document.querySelector("form").reset();
    }
    else {
       document.querySelector("#error").innerHTML = "Cannot add class.";
    }     
 }


// //READING CLASSES
// addEventListener("DOMContentLoaded", async function() {
//    const response = await fetch("http://localhost:3000/classes");
//    const classes = await response.json();
    
//    let html = "";
//    for (let classes of classes) {
//       html += `<tr><td>${classes.id}</td><td>${classes.title}</td></tr>`;
//    }

//    document.querySelector("tbody").innerHTML = html;
// }); 


// //UPDATING CLASSES

//  addEventListener("DOMContentLoaded", async function() {
//     document.querySelector("#updateBtn").addEventListener("click", updateClass);
 
//     // Load a class into the web form
//     const classId = "5fe1097caf3b173148985746";
//     const response = await fetch("/classes/" + classId);
//     if (response.ok) {
//        let classes = await response.json();
//        document.querySelector("#classId").value = classes._id;
//        document.querySelector("#title").value = classes.title;
//     }
//  });

//  async function updateClass() {
//     // Create a class object from the form fields
//     const classes = {
//        _id: document.querySelector("#classId").value,
//        title: document.querySelector("#title").value,
//     };
         
//      // Send PUT request 
//     const response = await fetch("/classes", {
//        method: "PUT",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify(classes)
//     });
 
//     if (response.ok) {      
//        alert("Updated class.");
//     }
//     else {
//        document.querySelector("#error").innerHTML = "Cannot update class.";
//     }     
//  }

//DELETING CLASSES

// addEventListener("DOMContentLoaded", async function() {
//     document.querySelector("#deleteBtn").addEventListener("click", deleteClass);
//     getAllClasses();
//  });
 
 // Load all classes into the drop-down list
 async function getAllClasses() {
    const response = await fetch("http://localhost:3000/classes");
    if (response.ok) {
       const classes = await response.json();
       let html = "";
       for (let classes of classes) {
          html += `<option value="${classes._id}">${classes.title}</option>`; 
       }
 
       document.querySelector("#classDropDown").innerHTML = html;
    }
 }
 
 async function deleteClass() {
    // Get the class ID of the selected class
    const classId = document.querySelector(
       "#classDropDown option:checked").value;
 
    const response = await fetch("http://localhost:3000/classes" + classId, {
       method: "DELETE"
    });
 
    if (response.ok) {
       // Successfully deleted class
       getAllClasses();
    }
    else {
       document.querySelector("#error").innerHTML = "Cannot delete class.";
    } 
 }