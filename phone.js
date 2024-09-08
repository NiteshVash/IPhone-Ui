// Unlock Screen Logic
document.getElementById('unlockButton').addEventListener('click', unlockScreen);

// Also listen for Enter key press
document.getElementById('password').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    unlockScreen();
  }
});

function unlockScreen() {
  const passwordInput = document.getElementById('password').value;
  const correctPassword = '1111'; // Set the correct password
  const errorMessageElement = document.getElementById('errorMessage');

  if (passwordInput === correctPassword) {
    // Clear error message
    errorMessageElement.textContent = '';

    // Hide the lock screen and show the home screen
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'block';

    // Clear the password field for security reasons
    document.getElementById('password').value = '';
  } else {
    // Display an error message
    errorMessageElement.textContent = 'Incorrect password. Try again.';
  }
}

// Function to show the settings screen with animation
function showSettings() {
  const settingsScreen = document.getElementById('settingsScreen');
  const homeScreen = document.getElementById('homeScreen');
  
  // Hide the home screen
  homeScreen.style.display = 'none';
  
  // Add a delay before applying the 'open' class to trigger the transition
  settingsScreen.style.display = 'block';
  setTimeout(() => {
    settingsScreen.classList.add('open');
  }, 10); // Tiny delay to allow the display change to take effect
}

// Function to go back to the home screen
function showHome() {
  const settingsScreen = document.getElementById('settingsScreen');
  const homeScreen = document.getElementById('homeScreen');
  
  // Start by removing the 'open' class to trigger the closing animation
  settingsScreen.classList.remove('open');
  
  // Add a delay to allow the closing animation to complete before hiding the element
  setTimeout(() => {
    settingsScreen.style.display = 'none';
    homeScreen.style.display = 'block';
  }, 550); // Matches the duration of the animation (0.5s)
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
    .then(function(stream) {
        const video = document.getElementById('cameraFeed');
        video.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Error accessing the camera: ", error);
    });

// Handle zoom range slider
document.getElementById('zoomRange').addEventListener('input', function() {
    document.querySelector('.zoom-label').textContent = this.value + 'x';
});

// Switching modes (Optional)
document.querySelectorAll('.modes span').forEach(function(mode) {
    mode.addEventListener('click', function() {
        document.querySelectorAll('.modes span').forEach(function(m) {
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

function showPasscode() {
  const Passcode = document.getElementById('Passcode');
  const homeScreen = document.getElementById('homeScreen');
  
  // Hide the home screen
  homeScreen.style.display = 'none';
  
  // Add a delay before applying the 'open' class to trigger the transition
  Passcode.style.display = 'block';
  setTimeout(() => {
    Passcode.classList.add('open');
  }, 10); // Tiny delay to allow the display change to take effect
}

function showHomePasscode() {
  const PasscodeScreen = document.getElementById('PasscodeScreen');
  const homeScreen = document.getElementById('homeScreen');
  
  // Start by removing the 'open' class to trigger the closing animation
  PasscodeScreen.classList.remove('open');
  
  // Add a delay to allow the closing animation to complete before hiding the element
  setTimeout(() => {
    PasscodeScreen.style.display = 'none';
    homeScreen.style.display = 'block';
  }, 550); // Matches the duration of the animation (0.5s)
}