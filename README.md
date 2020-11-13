# Space Age Calculator

#### A program which calculates a person's age and life expectancy on various planets

#### By Eric Endsley

## Description
TODO

## Specs
| Test | Input | Output |
| :----------- | :----------------------| :----------- |
| Spage Age Calculator |||
| should construct a SpaceAge object with property age equal to age parameter | new SpageAge(20) | SpageAge {Age: 20, ...} |
| should construct a SpaceAge object with property mercuryAge equal to age parameter divided by 0.24 rounded to the nearest integer | new SpaceAge(20) | SpaceAge {..., mercuryAge: 83, ...}|
| should construct a SpaceAge object with property venusAge equal to age parameter divided by 0.62 rounded to the nearest integer | new SpaceAge(20) | SpaceAge {..., venusAge: 62, ...}|
| should construct a SpaceAge object with property marsAge equal to age parameter divided by 1.88 rounded to the nearest integer | new SpaceAge(20) | SpaceAge {..., marsAge: 11, ... }|
| should construct a SpaceAge object with property jupiterAge equal to age parameter divided by 11.86 rounded to the nearest integer | new SpaceAge(20) | SpaceAge {..., jupiterAge: 2, ...}|
|Life Expectancy Checker|||
| should return a string which states how many years a person has to live on a given planet, given a life expectancy on Earth | spaceAge = New SpaceAge(20); spaceAge.lifeExpect(75, mars) | "you have 29 mars years left to live" |
||||
||||


## Setup
#### Clone and Open Locally
 1. Open the [programming language quiz github page](https://github.com/eric-endsley/week-5-project.git) by clicking the link or copy/pasting https://github.com/eric-endsley/week-5-project.git in the navigator bar of a web browser application.

 2. Click the green Code button in the upper-right part of the window and then EITHER:

 3. a. Copy the HTTPS URL for the repo and use it in the git clone command in git-bash or another git terminal by inputting: "git clone https://github.com/eric-endsley/week-5-project.git"<br> 
 OR b. Click "Download Zip" and unzip the file to an accessible location on your machine.

 4. Select the index.html file and open it with a web-browser application of your choice.

## Technologies Used
Javascript, JQuery, Node,Jest, Popper, Babel and ESLint

## Known Bugs
None

## Contact Information
To ask questions or report a bug, contact [Eric Endsley](mailto:eric.endsley4@gmail.com)

## Legal
This software is licensed under the MIT license.