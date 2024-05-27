const CustomInput = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <input
                        type="text"
                        style={{
                            width: '270px',
                            height: '60px',
                            borderRadius: '10px',
                            border: '1px solid #9C9C9C',
                            marginLeft: '70px',
                        }}
                        className="input-with-plus"
                        onChange={props.onChange}
                        value={props.value}
                        placeholder={props.placeholder}/>
                </div>
            </div>
        </>
    )
}

export {CustomInput}