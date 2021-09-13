# Antstream Test - React App

## Table of Contents

- [Install](#install)
- [Run](#run)
- [Development](#development)
- [Documentation](#documentation)

## Install

- Move to app folder with `cd antstream-test`
- Install dependencies with `npm install`

## Run

- Move to app folder with `cd antstream-test`
- Run React with `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Development

- Prettier runs on pre-commit

## Documentation

The `src/` folder structure is sub-divided as below, with the notable files explained.

```md

```

Input manager Rules:

- If click left/right erase the current Vertical default
- If click top/bottom erase the current Horizontal defaults
- Always go to the next (right left bottom up) regardless of vertical/Horizontal defaults
- If no more things under, go back to the other end (going down -> go to top)
- SelectableComponent -> SubSelectableComponent
- When pressing Enter, run SubSelectableComponent search inside the bounds of the parent
- When clicking Return, go back to SelectableComponent
- If there are 2 direct components on the next move, check which one has "more area" inside the parent area (vertical or horizontal) to decide which to move to
- Popups should have SubSelectableComponents and there should be a function to force the SelectableComponent (while storing the previous SelectableComponent), that runs when a popup or anything uses it and on "close" returns to the previous SelectableComponent
- Move the screen accordingly to the positions

Found bug in gamesparks-es6.js:114 where if the connection is higher than 2000ms to authenticate it will instantly kill the app, so slow connections/throttled) will be stuck in a forever loading screen
