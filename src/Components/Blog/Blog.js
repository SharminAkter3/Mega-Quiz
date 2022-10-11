import React from 'react';

const Blog = () => {
    return (
        <div className='text-left m-4 p-4'>
            <h1 className='text-2xl'>1. What is the purpose of react router?</h1>
            <p className='mb-3'> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components. </p>

            <h1 className='text-2xl'>2. How does context api work?</h1>
            <p className='mb-3'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>

            <h1 className='text-2xl'>3. How we can use useref hook in react?</h1>
            <p className='mb-3'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.
            </p>
        </div>
    );
};

export default Blog;