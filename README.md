# Space Age Calculator

#### A program which calculates a person's age and life expectancy on various planets, 11/13/20

#### By Eric Endsley

## Description
TODO

## Specs
| Test | Input | Output |
| :----------- | :----------------------| :----------- |
| Space Age Constructor |||
| should construct a SpaceAge object with property mercuryConst equal to 0.24, venusConst equal to 0.62, marsConst equal to 1.88, & jupiterConst equal to 11.86 | new SpaceAge() | SpaceAge {mercuryConst: 0.24, venusConst: 0.62, marsConst: 1.88, jupiterConst: 11.86}|
| Space Age Calculator |||
| should return a string stating the relative age of a user on a given planet, rounded to the nearest integer, given their age on Earth | 20, "mars" | "Since you are 20 on Earth, you would be 32 on Mars."
|Life Expectancy Checker|||
| should return a string which states how many years an average person should have left to live on a given planet, rounded to the nearest integer, given an age & life expectancy on Earth | 20, 75, mars | "You should have 29 years left to live on Mars" |
|  should return a string which states how many years a person has lived beyond their average life expectancy on a given planet if they have done so, rounded to the nearest integer | 80, 75, mars | "You should have 3 years left to live on Mars" |
| should return "You are at the end of your rope" if a person's age is equal to their live expectancy | 75, 75, mars | "You're at the end of your rope" |

## Setup
#### Get Node
This project requires Node.js to run. If you don't have Node installed on your machine already, go to the [Node download page](https://nodejs.org/en/download/) and follow their instructions to install.

#### Clone and Open Locally
 1. Open the [programming language quiz github page](https://github.com/eric-endsley/week-5-project.git) by clicking the link or copy/pasting https://github.com/eric-endsley/week-5-project.git in the navigator bar of a web browser application.

 2. Click the green Code button in the upper-right part of the window and then EITHER:

 3. a. Copy the HTTPS URL for the repo and use it in the git clone command in git-bash or another git terminal by inputting: "git clone https://github.com/eric-endsley/week-5-project.git"<br> 
 OR b. Click "Download Zip" and unzip the file to an accessible location on your machine.

 4. Right click on the project directory and open it with VS Code or another code editor. 

 5. Run a terminal (e.g. GitBash) in the project directory and enter the terminal command "npm install".

## Technologies Used
Javascript, JQuery, Node, Jest, Popper, Babel and ESLint

## Known Bugs
None

## Contact Information
To ask questions or report a bug, contact [Eric Endsley](mailto:eric.endsley4@gmail.com)

## Legal
This software is licensed under the MIT license.