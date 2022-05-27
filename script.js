const _name = document.getElementById("custname");
const _email = document.getElementById("email");
const _mobile = document.getElementById("mobile");
const _connectionType = document.getElementById("connectionType");
const _scheme1 = document.getElementById("scheme1");
const _scheme2 = document.getElementById("scheme2");
const _scheme3 = document.getElementById("scheme3");
const _duration = document.getElementById("duration");
const _result = document.getElementById("result");
const emailPattern = /^.+@.+\..+$/;
const mobilePattern = /^[789]\d{9}$/;

function calculateRent() {
  const name = _name.value;
  const email = _email.value;
  const mobile = _mobile.value;
  const connectionType = _connectionType.value;
  const scheme1 = _scheme1.checked;
  const scheme2 = _scheme2.checked;
  const scheme3 = _scheme3.checked;
  const duration = _duration.value;

  if (
    name &&
    // emailPattern.test(email) &&
    // mobilePattern.test(mobile) &&
    connectionType &&
    (scheme1 || scheme2 || scheme3) &&
    duration
  ) {
    let monthlyRental = 0;
    let costPerMonth = 0;

    if (connectionType === "Pre") {
      monthlyRental = 75;
    } else if (connectionType === "Post") {
      monthlyRental = 150;
    }

    if (scheme1) {
      costPerMonth = 200;
    } else if (scheme2) {
      costPerMonth = 350;
    } else if (scheme3) {
      costPerMonth = 500;
    }

    const totalCost = duration * costPerMonth + monthlyRental;
    console.log(totalCost);
    _result.innerText = "The Total Monthly Rental Cost is Rs. " + totalCost;
  } else {
    console.log("details wrong");
  }
}

function clearForm() {
  _name.value = "";
  _email.value = "";
  _mobile.value = "";
  _connectionType.value = "";
  _scheme1.checked = false;
  _scheme2.checked = false;
  _scheme3.checked = false;
  _duration.value = "";
  _result.innerText = "";
}
