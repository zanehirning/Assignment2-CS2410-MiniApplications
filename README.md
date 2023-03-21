# CS2410 Assignment 2 Description

Widgets R' Us is a prestigious meta-verse store front that sells NFTs for web-based widgets. You don't know what any of that actually means but you have heard it is the "next big thing" and you want to get in on that action. You applied for a job at Widgets R' Us and surprisingly, they hired you! They have given you the honor of building their next line of widgets (or mini-applications) that they will trick millions of people into buying because NFTs are just so cool.

The 2 widgets they would like you to build are:

1. A MadLibs generator.

2. A mortgage calculator

Their R&D determine that these mini-applications will be all the rage in the meta-verse and want to jump on them right away.  

Objectives
Build a basic GUI application
Apply the basics of event-driven programming
Interact with elements with JavaScript
Requirements
MadLibs Generator
In MadLibs (TM) the player provides a predetermined combination of nouns, verbs, adjectives, adverbs, etc and the generator fits those words into a predefined story. The result is often humorous as the player does not know the context that their provided words will be used in until after they are provided. Your MadLib generator should prompt the player for at least 5 words. Widgets R' Us doesn't care what the generated story is and have given you (almost)total freedom in what kind of story to generate. They only request that the story be safe for work and that you use each of the words the user provides at least once in the story. The UI should consist of input fields and a button, that when pressed generates the story and puts it on the screen.

Other Technical Requirements

1. If the user fails to provide a word to one of the inputs the program should not crash. You should display a message to the user telling them that they need to provide the missing word.

2. If the user generates a new story then the new story should replace the old story on the screen.

Mortgage Calculator
Since people are going to be buying virtual property in the meta-verse they will need to know how much their mortgage on that property will be. See https://www.bankrate.com/mortgages/mortgage-calculator/Links to an external site. for a working example and the formula for calculating the monthly payment.

The mortgage calculator should include inputs for the loan amount, the yearly interest rate, and the number of years the loan term will be. Widgets R' Us would like the calculation to be updated anytime the user changes one of the fields rather than when the user pushes a button. This means that you will need to pre-populate each of the inputs with good default values and provide an initial calculation for those default values.

Note that because you are asking the user for yearly interest rate and number of years you will need to convert that into a monthly interest rate and number of months for your calculation.

You can use the blur event on the fields to re-perform the calculation. You will need to use the javascript parseFloat function to get the information from the text the user inputs. parseFloat takes a string and returns an number. If the string doesn't contain a number then parseFloat will return the NaN value. The only way to know if something contains the NaN value is to use `Number.isNaN(yourValue)`.

Additionally, the Math object will be your friend. `Math.pow(num, exponent)` is how you do an exponent in JavaScript.

Other Technical Requirements

If the user provides an incorrect value for one of the fields then the calculation should display a message saying that an error occurred but the program should not crash.

If the user deletes the value from one of the fields and blurs the field, rather than display an error you should just re-populate the field with the original default value and perform the calculation.

Instructions
You should put both mini-applications in the same HTML file (see the demo video below). You are welcome to write all of the JavaScript for both applications in one file, but it might be easier to organize if you have one JavaScript file for each application. You can call your HTML file and JavaScript files whatever you would like.

You are welcome to use any of the built-in JavaScript functions in your program (other than prompt, alert, or confirm) and can add what ever functions you think you need.
