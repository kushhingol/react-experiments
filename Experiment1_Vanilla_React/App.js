/**
 * @desc: The createElement is a method to create the typical react component/element which is an object and not an HTML element.
 * @params: 1st param is the HTML element to be created, 2nd param is the props of the element, 3rd param is the children of the element. (Note: children can be a string or an array of elements)
 * @return type: object
 * @returned object: {type: "h1", props: {id: 'heading'}, ref: null, key: null, _owner: null,
 *            children: "I am React Element, but I am created by createElement() method which returns an object and not an HTML element 🙃" }
 */
const heading = React.createElement(
  "h1", // tags
  { id: "heading" }, // props
  "I am React Element, but I am created by createElement() method which returns an object and not an HTML element 🙃. And I am mounted in root" // children (Note: children can be a string or an array of elements)
);

/**
 * @desc: The createRoot method of reactDOM is used to render the react element to the DOM. It is a new way of rendering the react element to the DOM.
 *        In simple terms, its a way to provide react an entry element where the entire application of react can be mounted
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * @desc: The render method of the root object is used to render the react element to the DOM. It takes the reactElement object and the browsers understand that object to render it as HTML elements in the DOM */
root.render(heading);

/**
 * The above examples are pure examples of react without JSX. I like to call it as vanilla react 😬
 */

/**
 * Below is an example of how we can create nested createElement objects
 * <div id="parent">
 *    <div id="child1">
 *       <h1>Hi child1 h1</h1>
 *       <h2>Hi child1 h2</h2>
 *    </div>
 *    <div id="child2">
 *      <h1>Hi child2 h1</h1>
 *      <h2>Hi child2 h2</h2>
 *    </div>
 * </div>
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child1" }, "I am mounted in root2"),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", null, "Hi child1 h1"),
    React.createElement("h2", null, "Hi child1 h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", null, "Hi child2 h1"),
    React.createElement("h2", null, "Hi child2 h2"),
  ]),
]);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(parent);
