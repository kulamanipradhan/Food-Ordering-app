/*

 <div id="parent">
      <div id="child">
        <h1></h1>
      </div>
    </div>



*/
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", { id: "parent" }, "hello world")))

const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");
console.log(heading)//object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);