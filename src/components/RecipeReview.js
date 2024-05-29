const RecipeReview = (props) => {

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-10 offset-2">
                        <div className="row p-2" style={{
                                backgroundColor: '#343434',
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px'
                        }}>
                            <div className="col-6 text-start">
                                                        <span className="mb-auto mt-auto"
                                                              style={{color: 'white', fontSize: '18px'}}>December 12, 2024 at 9:47 pm</span>
                            </div>
                            <div className="col-6 text-end" style={{paddingRight: '30px'}}>
                                                        <span className="mt-auto mb-auto" style={{
                                                            color: 'white',
                                                            fontSize: '18px'
                                                        }}>Anonymous user</span>
                            </div>
                        </div>
                        <div className="row shadow-lg" style={{
                            backgroundColor: 'white',
                            borderBottomLeftRadius: '10px',
                            borderBottomRightRadius: '10px',
                            paddingBottom: '10px'
                        }}>
                            <div className="col-10 offset-2 p-4" style={{backgroundColor: 'white', borderBottomRightRadius: '10px'}}>
                                                        <span style={{fontSize: '18px'}}>{props.text}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </>
    )
}

export {RecipeReview}