import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import Movie from './Movie';
import './css/App.css';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    
    // constructor(props) {
    //     //생성자
    //     super(props);
    // }

    getMovies = async () => {
        const {
            data: {
                data: {movies},
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({movies: movies, isLoading: false});
    }
    
    componentDidMount() {
        //처음 render 후
        // setTimeout(() => {
        //     this.setState({ isLoading: false });
        // }, 2000);
        this.getMovies();
    }
    
    componentDidUpdate() {
        //매번 render 후
    }

    loading() {
        return (
            <div className="loader">
                <span className="loader__text">Loading...</span>
            </div>
        );
    }

    render_movies() {
        const {isLoading, movies} = this.state;
        return (
            <div className="movies">
                {movies.map((movie) => {
                    return (
                        <Movie
                            key={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                        />
                    );
                })};
            </div>
        );
    }
    
    render() {
        //매번 그려질때
        return (
            <section> 
                {this.state.isLoading ? this.loading() : this.render_movies()}
            </section>
        );
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
