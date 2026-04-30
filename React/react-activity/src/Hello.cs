/* 1.Components
What is a Component?
A component in React is a reusable piece of UI.
It helps divide the UI into small, manageable parts.
*/

/* Types of Components

1. Functional Component
- Simple JavaScript function
- Returns JSX (UI)
- Easy to write and use
- Uses hooks for state and logic
- Example idea: display text or UI

2. Class Component
- Uses ES6 class
- Has render() method
- Can manage state using this.state
- Older approach (less used now)
*/

/* 2. Activity: understand Props
- Props (Properties) are used in React to pass data from one component to another.
- Data flows from Parent → Child component

- Props are read-only (cannot be changed)
- Used to make components reusable
- Passed like HTML attributes

ex = We can send name and age from parent to child component using props.
*/

/* 3. Activity: understand state concept with 2 examples
- In React, State is used to store data that can change over time.
- When state changes, the UI (screen) updates automatically.
--Key Points
- State is mutable (can change)
- Managed inside the component
- Used for dynamic data (like user input, counter, etc.)

--Example 1: Counter
- A button increases number
- Initial value = 0
- Click button → value increases
- UI updates automatically

--Example 2: Input Field
- User types something
- Input value stored in state
- Display shows typed text
- Updates instantly
*/

/* 4.Activity: understand hooks concept
- Hooks are special functions that allow functional components 
    to use features like state and lifecycle.

--Why Hooks?
- Earlier, only class components could use state and lifecycle methods.
- Hooks allow functional components to use these features.
--Key Points
- Hooks are functions
- Used only in functional components
- Make code simple and reusable
- Start with the word "use" (e.g., useState)
--Common Hooks
1.useState
- Used to manage state (data)
Example: counter, input field
2.useEffect
- Used to perform side effects
- Runs when component loads or updates
--Examples:
- API call
- Timer
- Console message
*/
