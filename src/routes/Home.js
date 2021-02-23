import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
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
        const {movies} = this.state;
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
                            genres={movie.genres}
                        />
                    );
                })}
            </div>
        );
    }
    
    render() {
        //매번 그려질때
        const {isLoading} = this.state;
        return (
            <section> 
                {isLoading ? this.loading() : this.render_movies()}
            </section>
        );
    }
}

export default Home;
