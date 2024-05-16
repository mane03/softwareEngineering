# Observer Pattern in JavaScript

This code demonstrates the Observer pattern in JavaScript for a weather station notifying displays about temperature changes.

## Explanation:

A WeatherStation subject maintains temperature data and a list of registered observers (displays).
Observers (ConsoleDisplay and DigitalDisplay) implement an update method to be notified of temperature changes.

The subject provides methods to register and unregister observers, and notifies them when the temperature is set.
## Benefits:

- Loose coupling: Subjects and observers don't depend on each other's implementation details.

Decoupled communication: A subject can notify multiple observers independently.
Implementation:

- The WeatherStation class manages temperature and has methods to register/unregister observers and notify them on temperature changes.
- ConsoleDisplay logs the temperature to the console.
- DigitalDisplay (example) simulates updating a digital display element (requires an element with id "digital-display").
