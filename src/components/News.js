import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    
    constructor (){
        super()
        this.state = {
            articles : [],
            loading  : false
        }
    }
   async componentDidMount(){
        let url = "https://gnews.io/api/v4/top-headlines?category=general&lang=hi&country=in&max=20&apikey=b73842219062446de118899d3359f40c";
        let data = await fetch(url);
        let response = await data.json();
        // console.log(response);
        this.setState({articles:response.articles})
    }
  render() {
    return (
      <div className='container my-2'>
        <h2>News:- Top Headlines India</h2>
        <div className="row">
            {this.state.articles.map((e)=>{
                return <div className="col-md-4">
                             <NewsItems title={e.title} descraption= {e.descraption} imageUrl={e.image} newsUrl={e.url}/>
                    </div>
            })}
        </div>    
      </div>
    )
  }
}

export default News
