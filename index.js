function WeatherStation() {
  this.observers = [];
  this.temperature = 0;
}

WeatherStation.prototype.setTemperature = function(newTemperature) {
  this.temperature = newTemperature;
  this.notifyObservers();
};

WeatherStation.prototype.registerObserver = function(observer) {
  this.observers.push(observer);
};

WeatherStation.prototype.unregisterObserver = function(observer) {
  const index = this.observers.indexOf(observer);
  if (index > -1) {
    this.observers.splice(index, 1);
  }
};

WeatherStation.prototype.notifyObservers = function() {
  for (const observer of this.observers) {
    observer.update(this.temperature);
  }
};

function ConsoleDisplay() {
  this.update = function(temperature) {
    console.log("Current temperature: " + temperature);
  };
}

function DigitalDisplay() {
  this.element = document.getElementById("digital-display");

  this.update = function(temperature) {
    if (this.element) {
      this.element.innerText = "Current Temp: " + temperature + "°C";
    } else {
      console.log("Digital display element not found!");
    }
  };
}

const weatherStation = new WeatherStation();
const consoleDisplay = new ConsoleDisplay();
const digitalDisplay = new DigitalDisplay();

weatherStation.registerObserver(consoleDisplay);
weatherStation.registerObserver(digitalDisplay);

weatherStation.setTemperature(25);
