const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  roomcode: {
    type: String,
    required: true,
   
  },
  auth_token: {
    type: String,
   
  },
  roomtype: {
    type: String,
  },
  status: {
    type: String,
  
  },
  ownername: {
    type: String,
  
  },
  ownerid: {
    type: String, // Assuming ownerid is a unique identifier
    
  },
  ownerstatus: {
    type: String,
    default: 'waiting',
  },
  ownerip: {
    type: String,
    default: '127.0.0.1',
  },
  
  players: [
    {
      playername: { type: String },
      playerid: { type: String },
      playerstatus: { type: String },
      TotalChips: { type: String },
      TotalGems: { type: String },
   

    },
  ],
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// Update the `updated_at` field on each save
RoomSchema.pre('save', function (next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model('RoomCode', RoomSchema);
