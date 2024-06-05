const CustomInput = (props) => {
    return (
        <>
            <div style={{display: 'flex', marginRight: '30px'}} className="align-items-center justify-content-end">
                <input
                    type="text"
                    className="input-with-plus"
                    onChange={props.onChange}
                    value={props.value}
                    style={{
                        marginRight: '45px'
                    }}
                    placeholder={props.placeholder}
                />
            </div>
        </>
    )
}

export {CustomInput}