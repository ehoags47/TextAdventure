function Location(name, description) {
  this.name = name;
  this.description = description;
  this.items = [];
};

var map = {};
map.locations = [];
map.locations.push(new Location("Room 1", "Bathroom"));
map.locations.push(new Location("Room 2", "Bedroom"));
map.locations.push(new Location("Room 3", "Hallway"));


map.connections = [];
map.connections.push([0, 1, 1]);
map.connections.push([1, 0, 1]);
map.connections.push([1, 1, 0]);

function test() {
  var room = map.connections[0];
  for (i = 0; i < map.connections.length; i++) {
    if (room[i] === 1) {
      console.log(map.locations[i]);
    }
  }
};

test();