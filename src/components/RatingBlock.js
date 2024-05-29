import {FaStar} from "react-icons/fa";

const RatingBlock = (props) => {

    const rat = props.rating;

    const style = {color: "#FFBA54"}
    const styleGray = {color: "#CBCBCB"}


    function handleRating(value) {
        value= value?.toString();
        if (value === '1') {
            return (<div><FaStar size={35} style={style}/><FaStar size={35} style={styleGray}/>
                <FaStar size={35} style={styleGray}/><FaStar size={35} style={styleGray}/><FaStar size={35}
                                                                                                  style={styleGray}/>
            </div>)
        } else if (value === '2') {

            return (<div><FaStar size={35} style={style}/><FaStar size={35} style={style}/>
                <FaStar size={35} style={styleGray}/><FaStar size={35} style={styleGray}/><FaStar size={35}
                                                                                                  style={styleGray}/>
            </div>)
        } else if (value === '3') {

            return (<div><FaStar size={35} style={style}/><FaStar size={35} style={style}/>
                <FaStar size={35} style={style}/><FaStar size={35} style={styleGray}/><FaStar size={35}
                                                                                              style={styleGray}/></div>)
        } else if (value === '4') {

            return (<div><FaStar size={35} style={style}/><FaStar size={35} style={style}/>
                <FaStar size={35} style={style}/><FaStar size={35} style={style}/><FaStar size={35} style={styleGray}/>
            </div>)
        } else if (value === '5') {

            return (<div><FaStar size={35} style={style}/><FaStar size={35} style={style}/>
                <FaStar size={35} style={style}/><FaStar size={35} style={style}/><FaStar size={35} style={style}/>
            </div>)
        } else {
            return (<div><FaStar size={35} style={styleGray}/><FaStar size={35} style={styleGray}/><FaStar size={35}
                                                                                                           style={styleGray}/>
                <FaStar size={35} style={styleGray}/><FaStar size={35} style={styleGray}/></div>)
        }
    }

    return (
        <div className="row"
             style={{ borderRadius: '10px', backgroundColor: '#343434', paddingBottom: '15px'}}>
            <div className="col-9">
                <div className="row d-inline-flex mb-2">
                    <span className="description-title"
                          style={{marginLeft: '15px', color: '#EFEFEF', fontWeight: '400'}}>Recipe Rating</span>
                </div>
                <div className="row d-inline-flex">
                    <div style={{marginLeft: '15px'}}>
                        {handleRating(props.rating)}
                    </div>
                </div>
            </div>
            <div className="col-3 d-flex justify-content-start align-items-center">
                <span className="rating-span" style={{color: '#EFEFEF'}}>{rat}.0</span>
            </div>
        </div>
    )
}

export {RatingBlock}