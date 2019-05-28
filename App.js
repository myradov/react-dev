class App extends React.Component{
    handleTitleClick(){
        alert('you clicked the title');
    }
    render(){
        return React.createElement('div', {}, [
            React.createElement('h1', { onClick:this.handleTitleClick }, 'Adopt me!'),
            React.createElement('h2', {}, 'Adopt me!Please'),
            React.createElement(Pet,{
                name: 'Luna',
                animal: 'dog',
                breed: 'Havanese'
            }),
            React.createElement(Pet,{
                name: 'Birdy',
                animal: 'bird',
                breed:'Cockatail'
            }),
            React.createElement(Pet,{
                name: 'Doink',
                animal: 'cat',
                breed: 'Mixed'
            })
        ]);
    }
}
        
        
        
const Pet = (props) =>{
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed)
    ]);
}



ReactDOM.render(React.createElement(App), document.getElementById("root")) 