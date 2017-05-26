// YOUR CODE HERE:

$(document).ready(function() {
  class Chatterbox {
    constructor () {
      this.server = 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages/';
      //document.addEventListener('click', function() { console.log('HELLO'); });
      
    }

    init() {
      console.log('initializing');
      //$('.username').on('click', function() { console.log('here123'); });
      
      //document.addEventListener('click', this.handleUsernameClick);
    }

    send(message) {
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: this.server,
        type: 'POST',
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function (data) {
          console.log('chatterbox: Message sent', data);
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to send message', data);
        }
      });
    
    }

    fetch() {
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: this.server,
        type: 'GET',
        //data: JSON.stringify(message),
        contentType: 'application/json',
        success: function (data) {
          console.log('chatterbox: Message fetched', data);
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to fetch message', data);
        }
      });
    }

    clearMessages() {
      $('#chats').empty();
    }

    renderMessage(message) {
      console.log('rendering Message');
      let $newMsg = $('<span class="message"></span');
      $newMsg.text(message.text);
      $('#chats').append($newMsg);
    }

    renderRoom(roomname) {
      let $roomSelectDropDown = $('#roomSelect');
      $roomSelectDropDown.append('<option>' + roomname + '</option>');
    }

    handleUsernameClick() {
      console.log('inside username click');
    }

    
    
  
}
  window.app = new Chatterbox();
  var message = {
    username: 'shawndrost',
    text: 'trololo',
    roomname: 'main'
  };
  window.app.send(message);
  window.app.fetch();
  window.app.renderMessage(message);
  $('.username').on('click', function() { console.log('here123'); });
  


}); //End of document.ready



