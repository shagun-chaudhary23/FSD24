const container = document.getElementById('root');
console.log(container);
const root = ReactDOM.createRoot(container);
// const h2 = React.createElement('h2',{style:{color:'red', backgroundColor:'Yellow'}},"Welcome to React");
// const h1=React.createElement('h1',{style:{color:'blue'}}, "ABES ENGINEERING COLLEGE");
// // root.render(h1,h2); // only one element can be rendered at a time, so h2 will not be displayed. To render both elements, you can wrap them in a parent element like a div or React.Fragment. Here's an example:
// //root.render([h1, h2]); // This will render both h1 and h2 elements.
// const img = React.createElement('img',{src:'https://i.pinimg.com/736x/42/95/05/4295058dc0c4a14750dec6a166d5f4c6.jpg', alt:'React Logo', style:{width:'100px', height:'150px'}}); // Create an img element
// const div=React.createElement('div',{style:{border:'4px solid black'}}, h1, h2, img); // Wrap h1 and h2 in a div
const h21=<h2>Hello World </h2>; //JSX syntax Javascript XML
const h22=<h2>ABES Engineering COllege</h2>
const div=<div>{h21},{h22}</div>
const wrapper=<div style={{border:'2px solid red'}}>
    {div}
    <h2>Hey , Using JSX</h2>
    </div>
root.render(wrapper);