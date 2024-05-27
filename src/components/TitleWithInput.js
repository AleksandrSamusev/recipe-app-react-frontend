const TitleWithInput = (props) => {
    return (
        <>
            <div className="col-3 offset-1 align-items-center justify-content-start create-recipe-span"
                 style={{
                     display: 'flex',
                     paddingLeft: '200px'
                 }}>
                <span>{props.name}</span>
            </div>
            <div className="col-3">
                <input type={props.type} style={{
                    width: '440px',
                    height: '55px',
                    borderRadius: '5px',
                    border: props.error ? '1px solid red' :'1px solid #9C9C9C'
                }} className="input-with-plus" onChange={props.onChange} value={props.value}/>
            </div>
        </>
    )
}

export {TitleWithInput}