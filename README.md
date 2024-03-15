# Web Development Project 3 - Tennis Flashcards

Submitted by: Lucas Umberger

This web app displays a deck of flashcards of tennis questions and facts to test thier knowledge. The user can flip the card from question to answer, and have the option to restart the cards or go to another random card. The user can also guess the answer using an input field and a streak of correct answer counter is displayed on the left hand side.

Time spent: 11 hours spent in total

## Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**
- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] Cards contains images in addition to or in place of text
- [x] A counter displays the user's current and longest streak of correct responses

The following **additional** features are implemented:

* [x] Button to restart flashcards takes user back to first card and resets current streak
* [x] Counter is displayed at the top to show the number of active flashcards in the deck
* [x] Form and button visibility is changed based on appropriate use cases

## Video Walkthrough

Here's a walkthrough of implemented features:

![](walkthrough2.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Challenges & Things Learned

 - One of the first challenges I experienced was trying to store key/value pairs in an array and accessing them by index. I was not familiar with using dictionaries in js previous to this and was forced to learn for this assignment. I had tried several things including storing them in separate arrays, mapping the dictionary out. However, I decided on creating the initial map and then using the Object.keys()/Object.values() methods to then create a keys and values array and access values with keys[index] and values[index].
 - Another challenge was tring to get the card flip animation to display on the page. I had looked at some resources online and discovered a react import react-card-flip that creates the animation and requries a front and back side of the card. I used this and displayed the key on the front and the value on the back.
 - I also struggled with the animation. Going to the next card, the card would begin flipping and then the new card value was shown automatically. So when clicking the next button from the answer of one card, the next answer would show for a second. I was able to fix this by adding a sleep timer before showing the new card value, so that the card was flipped before the new values were shown.

Update: 3/14/2024

 - Another challenge was with the visibility of the different buttons and form field. I wanted only the applicable features to show, meaning the previous button would not show on the first card, the next button would not show on the last card, and the form would not show on the first or last card. This took time for me to structure the functions in a way that called the same css class names and also check each feature separately on each button call. I was able to create useState variables for each feature's visibility and check each one in a checkVisibility function.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
