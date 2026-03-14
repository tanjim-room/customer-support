## What is JSX, and why is it used?
=> JavaScript XML. Used for writing Javascript in React.

=> Easy to Understand

=> Write Javascript + UI 
=> Make code readable

## What is the difference between State and Props?
=> Both use for storing data
=> Props come from parent
=> state own component
=> state can be change
=> props read-only
=> props for sending data to child component
=> store component data

## What is the useState hook, and how does it work?
useState is a react hook to manage components state
=> const [count, setCount] = useState(0)
Here count is a state. setCount for updating state. 0 is initial value. 

## How can you share state between components in React?
=> Parent to Child to share state, we need props.

## How is event handling done in React?
=> Using camelCase event handling done in React. 
=> Like onClick, onChange, onSubmit. 
=> They call a function. onClick={handleClick}