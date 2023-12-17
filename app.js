/*

 <div id="parent">
      <div id="child">
        <h1></h1>
      </div>
    </div>

React.createElement creates an object
object then rendered into html

*/
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "headding" }, "hello world"), React.createElement("h2", { id: "headding" }, "hello kulamani")]))
// this is a small progrm right, and it already looks ugly and complex , then you can just imagine how it will look , if we have to make a whole webs apps or mobile apps . right 

const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");
console.log(heading)//object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);//render will replace the html element of root element with parent object by converting into dom type 
