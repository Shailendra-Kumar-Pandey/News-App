import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
document.body.style.backgroundColor = " #2b30351f";

export class News extends Component {

  static defaultProps ={
    country : 'in',
    category: 'genral',
    lang :'hi'
  }

  static propTypes ={
    country: PropTypes.string,
    category: PropTypes.string,
    lang :PropTypes.string,
  }

  capitalizerFstLetter= (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    
    constructor (props){
        super(props)
        this.state = {
            articles : [],
            loading  : false,
        }
        document.title = `${this.capitalizerFstLetter(this.props.category)} - News-App`
    }
   async componentDidMount(){
        this.props.setProgress(10);
        let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=${this.props.lang}&country=${this.props.country}&max=10&apikey=${this.props.apiKey}`;
        this.setState({loading : true});
        let data = await fetch(url);
        this.props.setProgress(40);
        let response = await data.json();
        this.props.setProgress(70);
        this.setState({
          articles:response.articles,
          loading : false
        })
        this.props.setProgress(100);
    }
  render() {
    return (
      <div className="container my-2">
        <div className="text-center " style={{margin:'20px 0px'}}>
        <h1>News:- Today Top {this.capitalizerFstLetter(this.props.category)} Headlines India</h1>
        {this.state.loading && <Spinner/>}
        </div>
        <div className="row">
            {!this.state.loading && this.state.articles.map((e)=>{
                return <div className="col-md-4" key={e.url}>
                             <NewsItems title={e.title} descraption= {e.descraption} imageUrl={e.image} newsUrl={e.url} content={e.content} date={e.publishedAt} source={e.source.name}/>
                    </div>
            })}
        </div>
      </div>
    )
  }
}

export default News
