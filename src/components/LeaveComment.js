const LeaveComment = () => {
    return (
        <div>
            <p className="description-title" style={{fontSize: '30px'}}>Leave your
                review</p>

            <div className="mb-4 d-flex">
                                                <textarea id="text-area-2"
                                                          className="new-recipe-textarea"
                                                          name="text-area-2"
                                                          rows="5"
                                                          cols={100}/>
            </div>
            <div className="d-flex justify-content-end">
                <button className="main-large-orange-post-button mt-auto mb-auto" style={{marginRight: '20px'}}>Post
                </button>
            </div>
        </div>
    )
}

export {LeaveComment}