import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, content, date, source} =this.props;
    return (
      <div>
        <div className="container mx-2">
        <div className="card " style={{backgroundColor:'#dcdce540',border:'2.5px solid transparent'}} >
              <span className="position-absolute top-0 start-2 badge rounded-pill bg-danger">{source}</span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body" >
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{content.slice(0, 200)}...</p>
                <p className="card-text">{new Date(date).toGMTString()}</p>
                  <div className="text-center">
                    <a href={newsUrl} target="/blank" className="btn btn-dark">Read More...</a>
                  </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
