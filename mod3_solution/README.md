---
author: Hilary Condon
last updated: 2017-09-03
---

# Module 3 Coding Assignment
## [](#overview)Overview

Create a simplified search of menu item descriptions using Restaurant server REST API. The idea here is for the user to search the descriptions of menu items. Then, given the list of matches of his search, give the user the ability to throw the items they for sure don't want off the list, thus narrowing it down to what they do want.


My solution for this assignment can be viewed [here](https://hilarycondon.github.io/coursera-angular-js-repo/mod1_solution/)

## [](#requirements)Requirements

1. Create a text box and a button with the label "Narrow It Down For Me!"

2. Initial view should contain screen with textbox and button.

3. Once the user clicks on the button, the app will reach out to the server and retrieve the list of menu items for the entire menu.

4. The list of items should then be searched for any items containing the string input by the user - any matches should be placed in a `found` special array.

5. If there are matching items found: display the list of found items: display the short_name, name, and description for each item.
  5a. Additionally, display a "Don't want this one!" button next to each item that removes the item from the list if selected.

6.  If the user selects the button without entering any input OR if there are no matches found for the user's search string, display a message stating "Nothing found."

7. The list of items from the server does not have to be cached. If button is clicked, all data gets wiped out and the whole process starts out all over again. 

## [](#technical-considerations) Technical Considerations

1. Do not use regular HTML `onclick` attribute to bind behavior to the button

2. At no point should the Javascript code look up *anything* in the DOM of the browser.
