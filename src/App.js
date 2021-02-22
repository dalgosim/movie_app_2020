import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    
    constructor(props) {
        //생성자
        super(props);
    }
    
    componentDidMount() {
        //처음 render 후
        axios.get('https://yts-proxy.now.sh/list_movies.json');
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2000);
    }
    
    componentDidUpdate() {
        //매번 render 후
    }
    
    render() {
        //매번 그려질때
        const {isLoading} = this.state;
        return <div> {isLoading ? 'Loading...' : 'We are ready'} </div>;
    }
}



// function Food({name, picture, rating}){
//     return (
//         <div>
//             <h3>I like {name}</h3>
//             <h4>{rating}/5.0</h4>
//             <img src={picture} alt={name}/>
//         </div>
//     )
// }

// function App() {
//     return (
//         <div>
//             <h1>Hello</h1>
//             {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
//         </div>
//     );
// }

// Food.propTypes = {
//     name: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
// };


export default App;
