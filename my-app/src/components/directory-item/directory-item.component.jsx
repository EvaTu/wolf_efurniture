import "./directory-item.styles.scss";
import {Link} from "react-router-dom"

const DirectoryItem = ({category}) => {

    return(
       <div className="directory-item-container">
       <div className="background-image" style={{ backgroundImage: `url(${category.url})`}}/>
        <div className="body">
        <Link to={`shop/${category.title.toLowerCase()}`}>
          <h2>{category.title}</h2>
          <p>SHOP NOW</p>
        </Link>
        </div>
     </div>
    )
}

export default DirectoryItem