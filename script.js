

// var a = document.createElement('a');
// var linkText = document.createTextNode("my title text");
// a.appendChild(linkText);
// a.title = document.getElementsByName("site_name").values;
// a.href = document.getElementsByName("Link").values;
// document.body.appendChild(a);


let anchor=document.createElement("a");
anchor.href="https://google.com";
console.log(anchor)
let to_add=document.getElementById("ss");
to_add.appendChild(anchor)