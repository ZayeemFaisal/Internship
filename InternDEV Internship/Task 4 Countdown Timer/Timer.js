function startCountdown() {
    var datetime = document.getElementById('datetime').value;
    var countDownDate = new Date(datetime).getTime();

    // Update the countdown every 1 second
    var countdown = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      // Calculate the days, hours, minutes, and seconds remaining
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown timer
      document.getElementById('timer').innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the countdown is finished, display "Countdown Finished"
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = "Countdown Finished";
      }
    }, 1000);
  }