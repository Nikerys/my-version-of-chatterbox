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
    test(testMsg) {
      console.log('inside test: ', testMsg );
    }
    fetch() {
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: this.server,
        type: 'GET',
        //data: JSON.stringify(message),
        contentType: 'application/json',
        success: function (data) {
          window.app.renderAllMessages(data.results);
          console.log('chatterbox: Fetching all messafges', data);
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to fetch all messages', data);
        }
      });
    }

    clearMessages() {
      $('#chats').empty();
    }

    renderMessage(message) {
      console.log('rendering Message');
      let $messageDiv = $('<div class="chat"></div>');

      let $newMsg = $('<span class="message"></span');
      $newMsg.text(message.text);

      let $nameSpan = $('<span class="username"></span>');
      $nameSpan.text(message.username);

       
      $($messageDiv).append($nameSpan);
      $($messageDiv).append($('<br>'));
      $($messageDiv).append($newMsg);
      $('#chats').append($messageDiv);
    }

    renderAllMessages(messages) {
      console.log('rendering all Messages', messages);
      messages.forEach( message => {
        window.app.renderMessage(message);
      });
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
    username: 'Marcus Philips',
    text: 'trololo',
    roomname: 'main'
  };
  window.app.send(message);
  window.app.fetch();
  window.app.renderMessage(message);
  


}); //End of document.ready




