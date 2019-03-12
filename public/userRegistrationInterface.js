$(document).ready(function(){

  $('#sign-up-form').submit(function(event){
    event.preventDefault();

    var username = $.trim($('#Inputusername').val());
    var password = $.trim($('#InputPassword').val());

    if(!username || username=="Enter username") {
      alert('Please enter a valid username');
      return false;
    };
    if(!password || password=='Password') {
      console.log(username)
      alert('Please enter a valid password');
      return false;
    };

    $.post("https://chitter-backend-api.herokuapp.com/users", {"user": {"handle": username, "password":password}})
    return true;
  })

    // window.location.href = './index.html';



});
