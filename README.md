# Introduction

Welcome to your first real coding challenge! This will give you a chance to review and practice your React skills you've accumulated and see which areas you need to work on.

Let's get started!

## Getting started

Fork and clone this repository to your local machine.

Run `npm install` and when that finishes open with your favorite code editor

To see your progress, use `npm run dev`

### Objectives

If you go `src/App.jsx`, you'll see I have some starter code for you. I've gone ahead and located an API and fetched it for you. Your job is to accomplish the following.

1. Create some state to hold this data from the fetch request. Store the data from `fetch` in this state. [useState docs](https://beta.reactjs.org/apis/usestate)

2. Fix the `useEffect`. You'll notice right now it runs in an infinite loop once you accomplish and causes problems. Remember about the dependency array. [This documentation](https://beta.reactjs.org/learn/synchronizing-with-effects) may be of help. Hint: Read all the steps

3. Using `.map()` to display the data on screen. I want each element of the array to be in a `<Trade/>` element. You can find the `<Trade/>` element in `src/trade.jsx`. I've gone ahead and already imported it into `src/App.jsx` [This page in React Docs](https://beta.reactjs.org/learn/rendering-lists) will be of help if you get stuck on map.

4. (this should be your last focus) If there is no data yet, return `<h1>Loading...</h1>`. [Conditional rendering docs](https://beta.reactjs.org/learn/conditional-rendering)

When all is said and done, you should have some data displayed on screen and a loading message while it is loading.

### If/when you get stuck

**Google and React documentation is your friend**. Google away but make sure you understand what you're copying before you get something from `Stack Overflow`. Here is a [link](https://beta.reactjs.org) to the react docs. You can use search for whatever you need

**If you get stuck and Google doesn't work, LET US KNOW. If you summon us we will break you out into a seperate room and can guide you to the right answer**. Remember we are here to help you succceed! 🙏

## When the challenge is completed

Utilize the ask for help button to notify us that you have completed the challenge. We will bring you into a seperate room to review the results

From there, we have a part II in addition if there is time left
