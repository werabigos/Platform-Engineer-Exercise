# Star Archives

A desktop app for looking up Star Wars characters and their vehicles.

## Description

Star Archives loads every character and their vehicles from SWAPI when the app is launched. You are able to search a character by their full name, or browse the full list and click a name. The selected character appears at the top of the page with their facts ( birth year, height, mass, hair color, and eye color) and their vehicles. Built using JavaScript, HTML, CSS, and Electron.

## Getting Started

### Dependencies

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
 
## Future ideas

Additions in likely order of implementation. 

### 1: Expanding the logic and data

* Add the ability to view information on planets and vehicles
* Display more data about the characters like films that they characters appear in
* Cache the data so the app starts faster and works offline
* Partial name search with suggestions, and ability to sort and filter by related information

### 2. Character cards

* Replace the character at the top with a character ID card that shows facts 
* Add images for characters, vehicles, planets

### 3. Bookmarks

* Allow users to use the app as a easy reference library, with the ability to bookmark characters and information to use as reference while watching a movie or show
* Provide bookmark filter

### 4. Visual Enhancements

* Add animated falling stars as a layer separate from the static star background
* Add slow-moving background images, such as ships flying by
* Maintain text readability over animated backgrounds

## Closing Thoughts

I would like to join the Platform Integration & Automation team to keep developing my programming knowledge and apply it in practice. My favorite part of this exercise was combining all the parts to see the final result. I'd like to explore that same process on a larger scale and learn how the systems and tools that people use every day are built and maintained. As a student, I'm excited for the opportunity to gain hands-on experience, learn from more experienced engineers, and contribute to the best of my ability.


## Acknowledgments
* Data: [swapi.dev](https://swapi.dev)
* [Electron](https://www.electronjs.org)
* [Star Jedi](https://www.dafont.com/star-jedi.font) font by Boba Fonts, from dafont.com
* [Aurebesh](https://www.dafont.com/aurebesh.font) font by Pixel Sagas, from dafont.com
  




