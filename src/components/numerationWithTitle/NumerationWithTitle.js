const NumerationWithTitle = (props) => {
    return (
        <>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div className="orange-circle text-center" style={{marginRight: '30px', paddingTop: '7px'}}>
                    <span className="numeration-number">{props.number}</span>
                </div>
                <div>
                    <span className="create-recipe-span">{props.title}</span>
                </div>
            </div>
        </>
    )
}
export {NumerationWithTitle}