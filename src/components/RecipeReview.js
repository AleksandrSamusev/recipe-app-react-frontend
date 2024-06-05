const RecipeReview = (props) => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="offset-1 col-10">
                        <div className="row p-2">
                            <div className="col-12 text-start mb-3">
                                                        <span className="mb-auto mt-auto"
                                                              style={{
                                                                  fontSize: '16px',
                                                                  fontWeight: '500',
                                                                  fontFamily: 'Roboto',
                                                                  color: 'firebrick'
                                                              }}>{props.author} - {props.date}</span>
                            </div>
                            <div className="col-12 text-start mb-2">
                                <span
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: '500',
                                        fontFamily: 'Roboto',
                                        fontStyle: 'italic'
                                    }}>{props.text}</span>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            <br/>
        </>
    )
}

export {RecipeReview}