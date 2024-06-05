const LeaveComment = (props) => {
    return (
        <div>
            <p className="description-title" style={{fontSize: '30px'}}>Leave your
                review</p>

            <div className="mb-4 d-flex">
                                                <textarea id="comment"
                                                          className="new-recipe-textarea"
                                                          value={props.value}
                                                          name="comment"
                                                          rows="5"
                                                          cols={100}
                                                          onChange={props.onChange}
                                                />

            </div>
            <div className="d-flex justify-content-end">
                <button
                    className="main-large-orange-post-button mt-auto mb-auto"
                    style={{marginRight: '20px'}}
                    onClick={props.onClick}
                >Post
                </button>
            </div>
        </div>
    )
}

export {LeaveComment}