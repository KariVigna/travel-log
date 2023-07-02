//Business logic for TravelLog
function TravelLog() {
    this.place = {};
    this.currentId = 0;
}
TravelLog.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};
TravelLog.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.place[place.id] = place;
};

//Business logic for logged places

function Place(name, landmark, date) {
    this.name = name;
    this.landmark = landmark;
    this.date = date;
}

Place.prototype.sentence = function() {
    return "I went to " + this.name + " on " + this.date + " and saw " + this.landmark + "!!!";
};

