// Function to add a grocery item to the list
function addItem() {
  const input = document.getElementById('itemInput');         
  const errorMsg = document.getElementById('errorMsg');       // Error message <p>
  const list = document.getElementById('todo');               // <ul> list container
  const newItemText = input.value.trim();                    

  try {
    // Show error if input is empty
    if (!newItemText) {
      throw new Error("Entry is empty");
    }

    // Create new <li> element
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;
    list.appendChild(newItem);

/*Clear input field*/
    input.value = "";
    errorMsg.textContent = ""; // Clear error
  } catch (e) {
    console.log(e); // Log error to console
  } finally {
    // User input error
    if (!newItemText) {
      errorMsg.textContent = "Please enter a valid item before adding.";
    }
  }
}
