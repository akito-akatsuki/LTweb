const showAlert = () => {
  alert("hello");
};

const showPrompt = () => {
  const name = prompt("your name?");
  alert(`Hello ${name}`);
};

const showConfirm = () => {
  const isConfirmed = confirm("Are you sure?");
  alert(`You chose: ${isConfirmed}`);
};
