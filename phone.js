// Unlock Screen Logic
document.getElementById('unlockButton').addEventListener('click', unlockScreen);

document.getElementById('password').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    unlockScreen();
  }
});

function unlockScreen() {
  const passwordInput = document.getElementById('password').value;
  const correctPassword = localStorage.getItem("password") || "1111";
  const errorMessageElement = document.getElementById('errorMessage');

  // console.log(localStorage.getItem("password") );

  if (passwordInput === correctPassword) {

    errorMessageElement.textContent = '';
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'block';

    // Clear the password field for security reasons
    document.getElementById('password').value = '';
  } else {
    // Display an error message
    errorMessageElement.textContent = 'Incorrect password. Try again.';
  }
}


function showSettings() {
  const settingsScreen = document.getElementById('settingsScreen');
  const homeScreen = document.getElementById('homeScreen');

  // Hide the home screen
  homeScreen.style.display = 'none';

  settingsScreen.style.display = 'block';
  setTimeout(() => {
    settingsScreen.classList.add('open');
  }, 10);
}

// Function to go back to the home screen
function showHome() {
  const settingsScreen = document.getElementById('settingsScreen');
  const homeScreen = document.getElementById('homeScreen');

  settingsScreen.classList.remove('open');

  setTimeout(() => {
    settingsScreen.style.display = 'none';
    homeScreen.style.display = 'block';
  }, 550);
}
// --------------------------   Cameraa ------------------------------

function showcamera() {
  const cameraScreen = document.getElementById('cameraScreen');
  const homeScreen = document.getElementById('homeScreen');

  // Hide the home screen
  homeScreen.style.display = 'none';

  // Add a delay before applying the 'open' class to trigger the transition
  cameraScreen.style.display = 'block';
  setTimeout(() => {
    cameraScreen.classList.add('open');
  }, 10); // Tiny delay to allow the display change to take effect
}

function showHomecamera() {
  const cameraScreen = document.getElementById('cameraScreen');
  const homeScreen = document.getElementById('homeScreen');

  // Start by removing the 'open' class to trigger the closing animation
  cameraScreen.classList.remove('open');

  // Add a delay to allow the closing animation to complete before hiding the element
  setTimeout(() => {
    cameraScreen.style.display = 'none';
    homeScreen.style.display = 'block';
  }, 550); // Matches the duration of the animation (0.5s)
}


navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    const video = document.getElementById('cameraFeed');
    video.srcObject = stream;
  })
  .catch(function (error) {
    console.error("Error accessing the camera: ", error);
  });

// Handle zoom range slider
document.getElementById('zoomRange').addEventListener('input', function () {
  document.querySelector('.zoom-label').textContent = this.value + 'x';
});

// Switching modes (Optional)
document.querySelectorAll('.modes span').forEach(function (mode) {
  mode.addEventListener('click', function () {
    document.querySelectorAll('.modes span').forEach(function (m) {
      m.classList.remove('active');
    });
    this.classList.add('active');
  });
});

//------------------  Time Updated By Device time -------------


// Function to format time as HH:MM without AM/PM
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return hours + ':' + minutes;
}

// Function to update the time on the UI
function updateTime() {
  const now = new Date();
  const formattedTime = formatTime(now);
  document.getElementById('currentTime').textContent = formattedTime;
  document.getElementById('currtime').textContent = formattedTime;
}

// Call updateTime every second
setInterval(updateTime, 1000);

// Initial call to set the time immediately
updateTime();


// -----------Show PASSCODE --------------------------
const passcode = document.querySelector('#passcode')
passcode.addEventListener('click', () => {
  const PasscodeScreen = document.getElementById('PasscodeScreen');
  const settingsScreen = document.getElementById('settingsScreen');

  // console.log("hello");

  // Hide the home screen
  settingsScreen.style.display = 'none';

  // Add a delay before applying the 'open' class to trigger the transition
  // Passcode_container.style.display = 'block';
  PasscodeScreen.style.display = "block"
  setTimeout(() => {
    PasscodeScreen.classList.add('open');
  }, 10); // Tiny delay to allow the display change to take effect

})


function showHomePasscode() {// Function to show the passcode screen
  function showPasscode() {
    const passcodeScreen = document.getElementById('PasscodeScreen');
    const settingsScreen = document.getElementById('settingsScreen');

    // Hide the settings screen
    settingsScreen.style.display = 'none';

    // Show the passcode screen and trigger the animation
    passcodeScreen.style.display = 'block';
    setTimeout(() => {
      passcodeScreen.classList.add('open');
    }, 10); // Tiny delay to allow the display change to take effect
  }

  // Function to go back to the settings screen from the passcode screen
  function showSettingsFromPasscode() {
    const passcodeScreen = document.getElementById('PasscodeScreen');
    const settingsScreen = document.getElementById('settingsScreen');

    // Start by removing the 'open' class to trigger the closing animation
    passcodeScreen.classList.remove('open');

    // Add a delay to allow the closing animation to complete before hiding the element
    setTimeout(() => {
      passcodeScreen.style.display = 'none';
      settingsScreen.style.display = 'block';
    }, 400); // Matches the duration of the animation (0.4s)
  }


  // Event listener for the passcode button
  document.querySelector('#passcode').addEventListener('click', showPasscode);

  // Event listener for going back to settings from passcode screen
  document.querySelector('.back-buttonPasscode').addEventListener('click', showSettingsFromPasscode);

  const PasscodeScreen = document.getElementById('PasscodeScreen');
  const settingsScreen = document.getElementById('settingsScreen');

  settingsScreen.style.display = 'block';

  // const homeScreen = document.getElementById('homeScreen');
  // console.log("hello");

  // Start by removing the 'open' class to trigger the closing animation
  PasscodeScreen.style.display = "none"

  // Add a delay to allow the closing animation to complete before hiding the element
  // setTimeout(() => {
  //   PasscodeScreen.style.display = 'none';
  //   homeScreen.style.display = 'block';
  // }, 550); // Matches the duration of the animation (0.5s)
}


const password = document.querySelector('.Passcode-container .inputpasscode')
const ChangeaPassword = document.querySelector(".ChangeaPassword")

ChangeaPassword.addEventListener("click", () => {

  localStorage.setItem("password", password.value)
  alert("Password change Succesfully")
  // console.log(password.value);
})

//----------------- DISPLAY & BRIGHTNESS -----------------------------

const Display = document.querySelector('#Display')
Display.addEventListener('click', () => {
  const DisplayScreen = document.getElementById('DisplayScreen');
  const settingsScreen = document.getElementById('settingsScreen');

  console.log("hello");

  // Hide the home screen
  settingsScreen.style.display = 'none';

  // Add a delay before applying the 'open' class to trigger the transition
  // Passcode_container.style.display = 'block';
  DisplayScreen.style.display = "block"
  setTimeout(() => {
    DisplayScreen.classList.add('open');
  }, 10); // Tiny delay to allow the display change to take effect

})

function showsetting() {
  const DisplayScreen = document.getElementById('DisplayScreen');
  const settingsScreen = document.getElementById('settingsScreen');

  // Start by removing the 'open' class to trigger the closing animation
  DisplayScreen.classList.remove('open');

  // Add a delay to allow the closing animation to complete before hiding the element
  setTimeout(() => {
    DisplayScreen.style.display = 'none';
    settingsScreen.style.display = 'block';
  }, 550); // Matches the duration of the animation (0.5s)
}


// DARK THEME & LIGHT THEME 


// Brightness Slider

const brightnessRange = document.getElementById('brightness');

brightnessRange.addEventListener('input', (event) => {
  document.body.style.filter = `brightness(${event.target.value}%)`;
});

// TEXT SIZE

const textSizeRange = document.getElementById('text-size');

textSizeRange.addEventListener('input', (event) => {
  document.body.style.fontSize = `${event.target.value}px`;
});
