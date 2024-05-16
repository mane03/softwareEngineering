describe("WeatherStation", function() {
  it("should set temperature and notify observers", function() {
    const weatherStation = new WeatherStation();
    const consoleDisplay = new ConsoleDisplay();
    spyOn(consoleDisplay, "update");
    weatherStation.registerObserver(consoleDisplay);
    weatherStation.setTemperature(25);
    expect(consoleDisplay.update).toHaveBeenCalledWith(25);
  });
});

describe("DigitalDisplay", function() {
  const element = document.createElement("div");
  element.id = "digital-display";
  document.body.appendChild(element);

  it("should update the display element with new temperature", function() {
    const digitalDisplay = new DigitalDisplay();
    digitalDisplay.update(20);
    expect(element.innerText).toBe("Current Temp: 20°C");

    document.body.removeChild(element);
  });

  it("should log an error if element is not found", function() {
    const digitalDisplay = new DigitalDisplay();
    spyOn(console, "log");
    digitalDisplay.update(25);
    expect(console.log).toHaveBeenCalledWith("Digital display element not found!");
  });
});
