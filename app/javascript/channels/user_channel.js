import consumer from "./consumer"



document.addEventListener("turbolinks:load", function(){
  console.log("Cargó la página")


  const userClient = consumer.subscriptions.create("UserChannel", {
    connected() {
      // Called when the subscription is ready for use on the server
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      // Called when there's incoming data on the websocket for this channel
      let message = data.message;
      let user = data.email
      console.log("message", message)
      let html = `
      <p><strong>${user}</strong>: ${message}</p>
      `;

      document.querySelector("#chats").innerHTML = html  + document.querySelector("#chats").innerHTML

    }
  });

  document.querySelector('#chat-form').addEventListener("submit", function(ev){
    //Enviar un mensaje al server de websockets
    ev.preventDefault();
    let message = this.querySelector("[type='text']").value;
    console.log("Enviando mensaje", message);
    userClient.send({
      message
    });
  });
})