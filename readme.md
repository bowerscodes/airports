# Flight Tracker 🛫
### Introduction
This web application was initially made for the purpose of demonstrating the functionality of JavaScript Classes, Objects and modular code, with accompanying unit test suites. The GUI aspect demonstrates how Classes and Objects can be translated into the front-end browser experience, by tying together the three fundamental languages of the Web.

## Languages & Technologies
### Languages
* JavaScript
* HTML
* CSS

### Technologies
* Node.JS
* Jest


## Scope of Functionalities
### JavaScript Classes
At the top level, the project consists of three main JavaScript modules, as well as a controller which uses the output of the program to manipulate the DOM. These modules, along with their purpose, are as follows:

#### Aeroplane:
The Aeroplane class uses a passed-in `flightplan` object to construct an `aeroplane` object which tracks the aeroplane's `currentAirport`, and defines two key functions: `takeOff()` and `land()`. These functions use the index of the `currentAirport` within the `flightplan` object (which is itself an array of `Airport` objects), in order to navigate to the next airport in the flightplan. The `takeOff()` and `land()` functions also trigger the `currentAirport`'s respective `removePlane()` and `addPlane()` functions - which remove / add the `aeroplane` object from the `currentAirport`'s own array of `aeroplanes` upon departure and arrival.

#### Airport:
The Airport class uses a passed-in string, `name`, to construct an `airport` object with two attributes: a `name`, and an an empty array of `aeroplanes`. Airports also have two functions, `addPlane(aeroplane)` and `removePlane(aeroplane)`, which respectively add and remove `aeroplane` objects to the `airport`'s `aeroplanes` array, each time one arrives or departs.

#### Flightplan: 

#### Controller:


### Objects


### Front-End


## Examples of Use
The nature of the simplicity of this application's code means that it has a very broad scope of potential applications.

In this project, the Aeroplane **Class** constructs an aeroplane **Obect** from an *array* of airport **Objects** (grouped together into a *Flightplan* **Object**), which the aeroplane **Object** then cycles through, in sequence, animated by manipulating the DOM in real-time. This means that this code could be adapted for any project which can be broken down in the same way, with even more complex functionality available if APIs are introduced.

*Consider the following:*
* **Courier Tracking** 🚚
> A tracking system for deliveries might use a Delivery Van class to construct Delivery Van objects, from an array of Orders (which might be grocery shops, parcels, or even pizzas! 🍕) which are grouped together into a Delivery Manifest object. The courier then works their way through the Manifest.

* **Train Timetables** 🚆
> Train objects could be created from a Train class, which take in a Route - an array of Stations. The Train then travels through each station, to its destination.

* **Space Tracking** 🛰
>  With interest in Space Travel at its highest in years, there is public interest in operational mission information which previously wouldn't have been available. Consider the James Webb Space Telescope, whose launch was documented in-depth by NASA, and updated in real-time as a webb-app, with a GUI rocket which traveled through different Waypoints - not too dissimilar from this application!


## Project Status
This project is currently Active 👨🏼‍💻

## Sources & Credits
This project is an adapted remake of a ship tracking project made whilst studying with Manchester Codes.