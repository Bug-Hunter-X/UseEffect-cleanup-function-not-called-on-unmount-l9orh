# React useEffect Cleanup Function Issue

This repository demonstrates a problem with the cleanup function in React's `useEffect` hook not being called when the component unmounts.  The expected behavior is for the cleanup function to execute before the component is removed from the DOM.  This example showcases the issue and provides a solution.

## Problem

The `useEffect` hook is used to perform side effects.  A cleanup function can be returned to perform actions before the component unmounts or before the next effect runs. In this case, the cleanup function's `console.log` is not showing, indicating a potential issue with how the component is unmounting or the `useEffect` hook is being used.

## Solution

The solution demonstrates how to correctly implement the useEffect hook with a cleanup function that executes as expected upon unmount.  Refer to the `bugSolution.js` file for the corrected code.