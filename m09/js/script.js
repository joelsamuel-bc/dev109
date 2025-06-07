function addItem() {
  const input = document.getElementById('itemInput');
  const errorMsg = document.getElementById('errorMsg');
  const list = document.getElementById('todo');
  const newItemText = input.value.trim();

  try {
    if (!newItemText) {
      throw new Error("Entry is empty");
    }

    const newItem = document.createElement('li');
    newItem.textContent = newItemText;
    list.appendChild(newItem);

    input.value = ""; // Clear the textbox
    errorMsg.textContent = ""; // Clear any previous error
  } catch (e) {
    console.log(e);
  } finally {
    if (!newItemText) {
      errorMsg.textContent = "Please enter a valid item before adding.";
    }
  }
}

