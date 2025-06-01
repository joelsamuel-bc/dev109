// Constructor function for Hotel objects
function Hotel(name, totalRooms, bookedRooms) {
  this.name = name;
  this.totalRooms = totalRooms;
  this.bookedRooms = bookedRooms;
  this.checkAvailability = function () {
    return this.totalRooms - this.bookedRooms;
  };
}

// Create hotel objects
const quayHotel = new Hotel("Quay", 50, 35);
const parkHotel = new Hotel("Park", 120, 77);
const sunsetHotel = new Hotel("Sunset", 86, 10); // NEW object

// Update the page with availability
document.getElementById("hotel1").textContent =
  quayHotel.name + " rooms: " + quayHotel.checkAvailability();

document.getElementById("hotel2").textContent =
  parkHotel.name + " rooms: " + parkHotel.checkAvailability();

document.getElementById("hotel3").textContent =
  sunsetHotel.name + " rooms: " + sunsetHotel.checkAvailability();
