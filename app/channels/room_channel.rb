class RoomChannel < ApplicationCable::Channel
  def subscribed
    puts "TENEMOS NUEVO SUSCRIPTOR"
    stream_from "room_channel"
    puts "Se conecto: #{current_user.email}"
    #ActionCable.server.broadcast("room_channel", { message: "Hola"})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(payload)
    puts payload.to_yaml
    ActionCable.server.broadcast("room_channel", payload)
  end
end
