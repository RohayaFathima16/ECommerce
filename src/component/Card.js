

import './Card.css'

function Card({title,imageUrl,body}) {
    return (
        <div className='card-container'>
          <div className = "image-container">
            <img src = { imageUrl } alt = ''></img>
          </div>  
          <div className = "card-content">
          <div className = "card-title">
               <h2> { title } </h2>
           </div>  
           <div classNAme = "card-body">
                <p> {body }  </p>
          </div> 
          </div> 
          
       </div>
    )
}

export default Card ;
