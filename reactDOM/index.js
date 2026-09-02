const container = document.getElementById('root');
console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{},"Welcome to React");
root.render(h2);