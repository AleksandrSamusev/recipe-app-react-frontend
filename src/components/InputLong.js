export const InputLong = (props) => {
    return (
        <div style={{display: 'flex', marginRight: '30px'}}
             className="align-items-center justify-content-end">
            <input type="text"
                   className={props.long ? 'input-with-plus-long' : 'input-with-plus'}
                   placeholder={props.placeholder}
                   style={{
                       marginRight: '15px'
                   }}
                   onChange={props.onChange}
                   onKeyDown={props.onKeyDown}
                   value={props.value}
                   name={props.name} required/>
        </div>
    )
}