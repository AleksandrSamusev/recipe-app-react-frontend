const TextAreaWithPlus = (props) => {
    return (
        <>
            <div style={{display: 'flex'}} className="align-items-center">
                <textarea id="text-area-1"
                          className="new-recipe-textarea"
                          name="text-area-1"
                          rows="5"
                          cols={88}
                          onChange={props.onChange}/>
            </div>
        </>
    )
}
export {TextAreaWithPlus}