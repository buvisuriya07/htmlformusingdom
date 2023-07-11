document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var food = Array.from(document.getElementById("food").selectedOptions).map(option => option.value);
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    // Create new table row
    var table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);

    // Insert data into the row
    newRow.insertCell(0).innerHTML = fname;
    newRow.insertCell(1).innerHTML = lname;
    newRow.insertCell(2).innerHTML = address;
    newRow.insertCell(3).innerHTML = pincode;
    newRow.insertCell(4).innerHTML = gender;
    newRow.insertCell(5).innerHTML = food.join(", ");
    newRow.insertCell(6).innerHTML = state;
    newRow.insertCell(7).innerHTML = country;

    // Clear form fields
    document.getElementById("myForm").reset();
});
