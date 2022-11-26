const header = document.getElementById('header');
const node = header.cloneNode(true);

//console.log(node , 'asdasd')
document.getElementById('navigation').after(node);
setTimeout(function()  {
    header.style.textAlign="right";
    node.style.textAlign="left"; 
}, 2000);


//node.after(header);