# odin-calculator

DEMO:

Odin JS Calculator Project: https://www.theodinproject.com/lessons/foundations-calculator

**Reflection 15/05/2023**

UI - Had some difficulty in getting the button alignment to feel right, but managed to slap together some rough '<divs>' and CSS so that it resembles a dark-themed rectangular calculator with seemingly aligned buttons.

Script - Struggled with the logic to store numbers for calculation, but managed to get it working with multiple variables.

Overall, the App is working.

**Shortcomings with the App**

These are issues that I have noted with the App, and have largely given up solving due to time constraints. I may revisit this in the future, but for now, my objective is to move on with, and eventually complete the course.

1. Calculate Screen/Display - The width of the calculator's screen field expands when there are many numbers (around 13 digits). 

This distorts the UI and breaks immersion. Ideally, the font size of the numbers on screen should minimize to fit into the screen when there are too many digits, and maximize back to the default size when there are too many, similar to Window's inbuilt Calculator App. Attempted different workaround from stockoverflow, but ultimately, was unable to solve this.

*Solution:* 

The solution appears to invole CSS Container Queries (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) where media queries can applied to specific '<divs>' containers. Tried this out as well, but it doesn't seem fully supported by Visual Studio Code at the moment (https://github.com/microsoft/vscode/issues/170589).

2. Calculating Numbers with Decimals (i.e. Floating Point Numbers) - The calculated value may be longer than expected. E.g. `1.3 + 2.3` will equal `3.5999999999999996` instead of `3.6`.

*Solution:*

I have not actively searched for the solution to this, but I'm guessing that it would involve logic to round up depending on the operate values with the most decimal points. E.g. 1.311 + 2.3 will equal 3.611 as the first operate value 1.311 has tgree decimal points. 

3. The Equal button always needs to be clicked to calculate the values to be operated.

In contast, in Window's built-in calculator app, the equal button only needs to be selected for the initial calculation. Subsequent values are automatically calculated when the operator is selected. E.g. Initial calculation is 1 + 1. Selecting the equal button sets the calculate value to 2. Subsequently, selecting any operator and another value will automatically calculate the next value without the need to select the equal button again.

*Solution:*

I have not actively looked into this, but my first hunch would be to reduce the numer of variables used to store numbers down to two or three. Then playaround with the if/else conditions to achieve this.

4. No Keyboard Support / Code is not scalable

The current code basically consists of a single large 'click' event listener function that that does everything from display numbers on screen to its calculation when buttons are clicked. Also, the aforementioned function should be broken down into several smaller functions for easier maintainability.

*Solution:* 

I have attempted several different 'quick-fix' solutions to no avail, and now feel that adding keyboard support would involve a major refactoring of the entire script. 

After some searching, if I were to redo this app, I would likely follow the solution in this stackoverflow topic https://stackoverflow.com/questions/74711305/cant-find-a-way-to-keep-my-keyboard-input-working-on-a-javascript-calculator-wi. Most notably, adding an two event listeners 'keydown' and 'click' to the document to a single init() function that runs when app is loaded. Then, breaking down the existing click function into separate functions for numbers and operator inputs.  