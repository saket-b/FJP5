import React, { Component } from 'react'
import { movies } from './getMovies'
import axios from 'axios'

import API_KEY  from "./Secret"

console.log("Hello "+ API_KEY);
export default class List extends Component {

  
  constructor()
  {
     super();

     this.state = {
        hover:"",
        parr :[1],
        currPage:1,
        movies:[],
        favMov :[],
     };
  }

  handleEnter= (id) =>{
    this.setState({
      hover:id,
    })
  }

  handleLeave =()=>{

    this.setState({
      hover:''
    });
  }

  changeMovies = async ()=>{

    console.log("inside change ");
    let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currPage}`);
    console.log(res.data);

    this.setState({
      movies:[...res.data.results]
    })

  }


  handleNext =()=>{

    let temarr= [];

    for( let i=1; i<= this.state.parr.length+1; i++)
    {
      temarr.push(i);
    }

    this.setState({
      parr: [...temarr],
      currPage :this.state.currPage+1
    }, this.changeMovies)
    //this.changeMovies();

  }

    handlePrev =()=>{

      if( this.state.currPage == 1)
      return ;

    this.setState({
      
      currPage :this.state.currPage-1
    }, this.changeMovies)

  }

  handlePageNo =(pageNo)=>{

    this.setState({
      
      currPage :pageNo,
    }, this.changeMovies)

  }

  handleFavourites = ( movieObj)=>{

    let localStorageMovies = JSON.parse(localStorage.getItem("movies")) || [];
  
    if( this.state.favMov.includes(movieObj.id))
    {
       localStorageMovies = localStorageMovies.filter(
         (movie)=> movie.id != movieObj.id
       );
    }
    else localStorageMovies.push(movieObj);
    
    console.log(localStorageMovies);

    localStorage.setItem("movies", JSON.stringify(localStorageMovies));

    let tempData = localStorageMovies.map((movieObj) =>movieObj.id);

    this.setState(
      {
        favMov :[...tempData]
      });

  }



  async componentDidMount(){

    console.log("inside ComponentDid Mount");
    let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currPage}`);
    console.log(res.data);

    this.setState({
      movies:[...res.data.results]
    })
  }

  render() {
    // let movie = movies.results;
   // let movie = this.state.movies;
    return (
      <>
      { this.state.movies.length == 0 ?(<div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>):
          ( 
              <div>
                  <h3 className='text-center'>
                      <strong>Trending</strong>
                  </h3>
                  <div className='movies-list'>
                    {
                        this.state.movies.map((movieobj)=>(
                        <div className='card movie-card'
                         onMouseEnter={()=> this.handleEnter(movieobj.id)}
                         onMouseLeave={()=>this.handleLeave}
                        >

                          
                        <img 
                        src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`}
                        className="card-img-top banner-img"
                        alt="..."
                        style={{ height: "40vh", width: "20vw" }}
                        />

                        <h5 className='card-title movie-title'>
                            {movieobj.original_title}
                        </h5>
                        {
                          // <p className='card-text movie-text' >{movieobj.overview}</p>
                        }

                        <div className='button-wrapper'>
                        {
                            this.state.hover == movieobj.id &&
                          <a  class="btn btn-primary movie-button"
                           onClick={()=> this.handleFavourites(movieobj)}>
                              {this.state.favMov.includes(movieobj.id)?("Remove from Favourites") :
                              ("Add to Favourites")}
                          </a>
                        }
                        </div>
                          
                        </div>
                      ))} 
              </div>
              
              <div className="pagination">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" onClick={this.handlePrev}>
                      Previous
                    </a>
                  </li>
                  
                 {
                   this.state.parr.map( pageNum =>
                    
                    <li class = "page-item">
                      <a class = "page-link" onClick={()=> this.handlePageNo(pageNum)}>
                        {pageNum}
                      </a>
                    </li>

                    )
                 }
                  
                  <li class="page-item">
                    <a class="page-link" onClick={this.handleNext}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          
          



          </div>    
          )
        }
      
      </>
    );
  }
}
