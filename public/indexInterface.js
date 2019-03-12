$(document).ready(function() {

  $.get("https://chitter-backend-api.herokuapp.com/peeps", function(response) {
    const peeps = $('.peeps');
    response.forEach(function(peep) {
      var postedTime = new Date(Date.parse(peep.created_at))
      var updatedTime = new Date(Date.parse(peep.created_at))
      peeps.append(`<li>
        <div id="user">User: ${peep.user.handle}</div>
        <div id="posted-time">Posted time: ${postedTime.toLocaleString()}</div>
        <h2 id="peep">${peep.body}</h2>
        <input type="submit" name="likes" value="like">
      </li>`);
    })
  }, 'json')


  $("#Sign-up").click(function() {
    window.location.href = './userRegistration.html';
    return false;
  });

  function showUsarName(){
    if (username){
      $('#welcomeUsername').text(`Welcome, ${username}`);
      $('#sign-up').hide();
      $('#log-in').hide();
    } else {
      $('#welcomeUsername').text(`Welcome`);
    }
  }


});
