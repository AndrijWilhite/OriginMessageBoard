$(document).ready(function() {



$('#fire').click(function() {
  //  var userName = $('#userName').text();
  //  var userMssg = $('#toSend').text();
  var usrName = $('#usrName').val();
  var userMssg = $('#toSend').val();

//var message = '{username:'+ userName +',message:'+ userMssg +',}'
    var itBeSent = {
    username: usrName,
      message: userMssg,
    };



  /* console.log(itBeSent);
  $.post('http://originmessages.herokuapp.com/messages', itBeSent, function(data) {
    alert('Data sent to server');
  })
  */
  $.ajax({
     type: 'POST',
     url: 'http://originmessages.herokuapp.com/messages',
     contentType: "application/json",
     data: JSON.stringify(itBeSent),
     dataType: "json"
   });
 });


 });
