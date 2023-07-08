import { Link } from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';

const Item = ({product}) => {
  return (
    <div className="card">
        <img src={product.image} className="img-prod"/>
        <h1 className="p-prod">{product.name}</h1>
        <p className="p-prod">${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn-detail">
          <VisibilityIcon sx={{marginLeft: '0.5rem'}} className="view-btn"/>
          <p className="btn-pdetail">VER MAS</p>
        </Link>
    </div>
  )
}
export default Item