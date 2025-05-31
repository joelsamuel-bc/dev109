function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

var hotel1 = new Hotel('Quay', 40, 25);
var hotel2 = new Hotel('Park', 120, 77);
var hotel3 = new Hotel('Sunset', 86, 10);

var el = document.getElementById('hotel3');
el.textContent = hotel3.name + ' rooms available: ' + hotel3.checkAvailability();
