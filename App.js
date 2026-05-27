// *********  Lecture 1 : STARTS  ******************
//create Element that has 'Hello World'
/* const heading = React.createElement("h1", {id: "heading"}, "Hello World from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);*/

//create a nested structue like below
{/* <div id="parent">
    <div id="child1">
        <h1> I am heading 1 of child 1</h1>
        <h2> I am heading 2 of child 1</h2>
    </div>
    <div id="child2">
        <h1> I am heading 1 of child 2</h1>
        <h2> I am heading 2 of child 2</h2>
    </div>
</div> */}
const parentDiv = React.createElement("div", { id: "parentDiv" }, 
                        [React.createElement("div", { id: "childDiv1" }, 
                            [ React.createElement("h1", {}, "I am heading 1 of child 1"),  React.createElement("h2", {}, "I am heading 2 of child 1")]),
                        React.createElement("div", { id: "childDiv2" }, 
                            [ React.createElement("h1", {}, "I am heading 1 of child 2"),  React.createElement("h2", {}, "I am heading 2 of child 2")])
                        
                        ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv); 
console.log(parentDiv);

// *********  Lecture 1 : ENDS  ******************