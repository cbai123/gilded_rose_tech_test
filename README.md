# Gilded Rose

The starting point for this was taken from https://github.com/emilybache/GildedRose-Refactoring-Kata.git
This is the Gilded Rose kata in JavaScript with Jest


## Getting started

Clone repo

```sh
git clone https://github.com/cbai123/gilded_rose_tech_test.git
```

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```
## Approach

To start with I began writing tests for the existing code to understand how it worked and how it handled the rules. After writing tests for each item and for multiple items I started to think about refactoring the code.

I refactored the existing code to remove all the nested if statements. I did this by seperating each item into its own method, with its set of rules, and choosing which one to use through a switch statement. After this was working I wrote tests for the new 'Conjured' item. I then added the code for the rules of the conjured item by adding a new method and new case in the switch statement.

I refactored again to make each item a class containing an update method, this was to tidy up the Shop class and avoid it becoming long and bloated. When this was passing all the tests I refactored again to remove the switch statement in favour of an object literal to reduce the number of lines in the updateQuality method and make it read better. The method creates an itemTag from the first word of the item, e.g. 'Conjured Mana Cake' gives an itemTag of 'Conjured' this is what is used as the key in the object.

## Code Structure

I split the different items up into classes to reduce the length of the Shop class. It also helped when I created an extra method to calculate part of the rules, such as for the backstage passes item, I could add another method to the backstage passes class and it was clear what the method was for.

The choosing between item rules is handled by an object literal, this reduced the space taken up by the nested ifs, and the switch statement, and made it easier to see what was going on. These combined led to it being easy to add a new item. Simply create a new class for this item with an update method containing the rules for updating quality, then add this to the object in updateQuality.