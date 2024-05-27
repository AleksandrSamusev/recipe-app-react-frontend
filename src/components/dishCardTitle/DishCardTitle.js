const DishCardTitle = (props) => {
    return (
        <>
            <div className="page-div">
                <img src={props.lineImage} className="line" alt=""/>
                <span className="page-title">{props.sectionTitle}</span>
                <img src={props.lineImage} className="line" alt=""/>
            </div>
        </>
    )
}

export {DishCardTitle}