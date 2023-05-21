const ItemListContainer = (props) => {
    return (
        <div className={props.container}>
            <h1 className={props.styleTitle}>
                {props.title}
            </h1>
            <img src={props.img} className={props.imgClass}/>
        </div>
    )

}
export default ItemListContainer;