![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Bitmap Project - Lab 05 

### Author: Michael George and Brent Woodward

### Links and Resources
[![Build Status](https://travis-ci.com/michaelageorge/05-project.svg?branch=master)](https://travis-ci.com/michaelageorge/05-project)

* [repo](https://github.com/michaelageorge/05-project)
* [travis](https://travis-ci.com/michaelageorge/05-project)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

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
