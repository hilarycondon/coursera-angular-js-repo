---
author: Hilary Condon
last updated: 2017-09-02
---

# [](#module-2-coding-assignment)Module 2 Coding Assignment

Create a "check off" shopping list application that that allows you to "check off" the items you've already bought, except instead of checking them off, the bought item simply moves to the "Already Bought" list.

The assignment can be viewed [here](https://hilarycondon.github.io/coursera-angular-js-repo/mod2_solution/).

* * *

# [](requirements)Requirements

1. Display 2 lists    
  1a. "To Buy"
  1b. "Already Bought"

2. When an item is bought, it should move from the "To Buy" list to the "Already Bought" list

3. The "To Buy" list should be pre-populated with a list of at least 5 items
(*Hint: Use an array of object literals, where each item will be similar to `{ name: "cookies", quantity: 10 }`*)

4. Each shopping list item should have a name and quantity, displayed to the user as follows:
  4a. 'Buy item_quantity item_name', where `{ name: "cookies", quantity: 10 }` would be listed as `Buy 10 cookies`.

5. Each item in the "To Buy" list should have a button with the label "Bought", which when selected moves the corresponding item from the "To Buy" list to the "Already Bought" list

6. The "Already Bought" list should initially be empty and display a message "Nothing bought yet". This message should only appear when the list is empty.

7. Once something is bought and appears on the "Already Bought" list, the format of each item should be 'Bought item_quantity item_name', where the bought item of 10 cookies would appear as `Bought 10 cookies`

8. Once the user "buys" every item on the "To Buy" list, i.e. clicks on the "Bought" button for every item in the "To Buy" list, instead of the empty "To Buy list", display the message "Everything is bought!"


# [](technical-considerations)Technical Considerations

1. You are not allowed to use regular HTML `onclick` attribute to bind behavior to the button. You **must** use the AngularJS way of binding behavior.

2. At no point should your Javascript code look up *anything* in the DOM of the browser.

3. Your implementation should *not* consist of only 1 controller that does it all: take care of both lists, store the data for both lists, etc.

4. Name your app `ShoppingListCheckOff`

5. Declare two controllers using the 'Controller as' syntax:
  5a. `ToBuyController`
  5b. `AlreadyBoughtController`

6. Create a singleton service called `ShoppingListCheckOffService` using the .service declaration to share data between controllers

7. To display and/or hide the messages when the list(s) are empty, use the `ng-if` directive

8. To loop over the items in either list use the `ng-repeat` directive

9. Make sure all JS code is contained inside an IIFE

10. Make sure all of your dependency injections are protected from minification
