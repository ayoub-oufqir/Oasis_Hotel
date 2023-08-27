/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

// initial component
export const Greeting = (props) => {
  return <div>Hello, {props.name}!</div>;
};

// Define the HOC
const withBorder = (WrappedComponent) => {
  return (props) => {
    const borderStyle = { border: "2px solid black", padding: "10px" };

    return (
      <div style={borderStyle}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// Create an enhanced component using the HOC
const GreetingWithBorder = withBorder(Greeting);

export default GreetingWithBorder;
