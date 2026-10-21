# Star Archives

A desktop app for looking up Star Wars characters and their vehicles.

## Description

Star Archives loads every character and their vehicles from SWAPI when the app is launched. You are able to search a character by their full name, or browse the full list and click a name. The selected character appears at the top of the page with their facts ( birth year, height, mass, hair color, and eye color) and their vehicles. Built using JavaScript, HTML, CSS, and Electron.

## Getting Started

* [Node.js](https://nodejs.org)
* Internet connection to access the data from SWAPI

### Installing 

* Download or clone this project and open a terminal in its folder
* Install the dependencies (this downloads Electron)

```
npm install
```

### Executing program

* Start the app:
```
npm start
```
* Wait for the character list to fully load
* Type a full name of a character, such as `Luke Skywalker`, in the search bar and press Enter or click **Search**
* You can also click any name to see the character appear at the top
* Characters with no vehicles will display "Vehicles: none"

## Help

If you have problems loading the data check your internet connection and restart the app. 
Search requires full name exactly (case insensitive), so `Luke` won't work, however `Luke Skywalker` will.

## Author

Weronika Bigos

## Version

* 1.0.0
 * Initial release

## Acknowledgments
* Data: [swapi.dev](https://swapi.dev)
* Fonts: StarJedi (Boba Fonts), Aurebesh (Pixel Sagas), from dafont.com
* [Electron](https://www.electronjs.org)
* [Star Jedi](https://www.dafont.com/star-jedi.font) font by Boba Fonts, from dafont.com
* [Aurebesh](https://www.dafont.com/aurebesh.font) font by Pixel Sagas, from dafont.com
  




