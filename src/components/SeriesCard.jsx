export const SeriesCard = (props) => {
const { id,img_url, name , rating ,description , cast ,genre , watch_url} = props.curElem
    return (
    
        
            <li>
              <div>
                <img
                  src={img_url}
                  alt={name}
                  width="40%"
                  height="40%"
                />
              </div>
              {/* Variable pass */}
              <h2>Name: {name}</h2>
              {/* Expression pass */}
              <h3>Rating: {rating}</h3>
              <p>Summary: {description}</p>
              {/* Function call */}
              <p>Cast: {cast}</p>
              <p>Genre: {genre}</p>
              {/* Conditional pass */}
              <a href={watch_url} target="_blank" rel="noopener noreferrer">
                <button>Watch Now</button>
              </a>
            </li>
          );

}