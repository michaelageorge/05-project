![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Bitmap Project - Lab 05 

### Author: Michael George and Brent Woodward
#### Collaberators: Ryan G., Jared P., Heather C., George, Siobhan N.


### Links and Resources
[![Build Status](https://travis-ci.com/michaelageorge/05-project.svg?branch=master)](https://travis-ci.com/michaelageorge/05-project)

* [repo](https://github.com/michaelageorge/05-project)
* [travis](https://travis-ci.com/michaelageorge/05-project)

### Modules
#### `darken.js`
###### `darken(bmp) -> bitmap image`
Changes the hue of the image to be very dark and writes a new bitmap file.


###### `greyscale(bmp) -> bitmap image`
Modifies all colors to a greyscale pallette and writes a new bmp file.

###### `invert(bmp) -> bitmap image`
Inverts all of the colors in the input image and writes a new bmp file.

###### `scramble(bmp) -> bitmap image`
Takes in an image and transforms it to a scramble of the given images, and writes a new bmp file.

### Setup

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.

#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?
Use BDD describe and test methods to define discriptive tests and increase readablity
Each test callback should aim to test a small well defined feature of a function
Write tests to ensure each function behaves correctly with valid and invalud inputs
The CLI should be tested without using child_process or any equivilant third party librarys

Assignment 1: Do this with callbacks
Assignment 2: Modularize the code
Stretch: Refactor to use promises

Minimum Requirements:
The CLI should be architected using best modularization practices
The CLI should require two arguments input-file-path transfrom-name
The CLI should support a minimum of four transforms
The CLI should log useful Error messages if used incorrectly
The CLI should log a success message on completion
