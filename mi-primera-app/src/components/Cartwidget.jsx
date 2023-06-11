import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cartwidget = () => {
    return (
        
        <IconButton sx={{mx:'50px'}} aria-label="cart">
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon sx={{color:"#fafafa"}} />
            </Badge>
        </IconButton> 
    )
}
export default Cartwidget;