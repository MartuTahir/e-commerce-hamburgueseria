const Container = ({container, styleTitle, title, img, imgClass}) => {
    return (
        <div className={container}>
            <h1 className={styleTitle}>
                {title}
            </h1>
            <img src={img} className={imgClass} alt={title}/>
        </div>
    )

}
export default Container;