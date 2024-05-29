import {FaStar} from "react-icons/fa";
import {useState} from "react";

const SetRating = (props) => {

    const styleGray = {color: "#CBCBCB", pointerEvents: 'none'}
    const styleGold = {color: "#FFAF30", pointerEvents: 'none'}
    const [isFirstHovered, setFirstHovered] = useState(false);
    const [isSecondHovered, setSecondHovered] = useState(false);
    const [isThirdHovered, setThirdHovered] = useState(false);
    const [isFourthHovered, setFoursHovered] = useState(false);
    const [isFifthHovered, setFifthHovered] = useState(false);

    return (
        <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
            <span className="card-title mt-auto mb-auto"
                  style={{fontSize: '30px'}}>How would you rate this recipe?</span>
            </div>
            <div style={{marginLeft: '40px'}}>
                {props.newRating === '' ?
                    <div className="d-flex align-items-center">
                        <div id="1"
                             onClick={props.onClick}
                             onMouseEnter={() => setFirstHovered(true)}
                             onMouseOut={() => setFirstHovered(false)}
                        ><FaStar size={35} style={isFirstHovered ? styleGold : styleGray}/>
                        </div>
                        <div id="2"
                             onClick={props.onClick}
                             onMouseEnter={() => {
                                 setFirstHovered(true);
                                 setSecondHovered(true)
                             }}
                             onMouseOut={() => {
                                 setFirstHovered(false)
                                 setSecondHovered(false)
                             }}
                        ><FaStar size={35} style={isSecondHovered ? styleGold : styleGray}/></div>
                        <div id="3"
                             onClick={props.onClick}
                             onMouseEnter={() => {
                                 setFirstHovered(true);
                                 setSecondHovered(true)
                                 setThirdHovered(true)
                             }}
                             onMouseOut={() => {
                                 setFirstHovered(false)
                                 setSecondHovered(false)
                                 setThirdHovered(false)
                             }}
                        ><FaStar size={35} style={isThirdHovered ? styleGold : styleGray}/></div>
                        <div id="4"
                             onClick={props.onClick}
                             onMouseEnter={() => {
                                 setFirstHovered(true);
                                 setSecondHovered(true)
                                 setThirdHovered(true)
                                 setFoursHovered(true)
                             }}
                             onMouseOut={() => {
                                 setFirstHovered(false)
                                 setSecondHovered(false)
                                 setThirdHovered(false)
                                 setFoursHovered(false)
                             }}
                        ><FaStar size={35} style={isFourthHovered ? styleGold : styleGray}/></div>
                        <div id="5"
                             onClick={props.onClick}
                             onMouseEnter={() => {
                                 setFirstHovered(true);
                                 setSecondHovered(true)
                                 setThirdHovered(true)
                                 setFoursHovered(true)
                                 setFifthHovered(true)
                             }}
                             onMouseOut={() => {
                                 setFirstHovered(false)
                                 setSecondHovered(false)
                                 setThirdHovered(false)
                                 setFoursHovered(false)
                                 setFifthHovered(false)
                             }}
                        ><FaStar size={35} style={isFifthHovered ? styleGold : styleGray}/></div>
                    </div>
                    :
                    <span style={{
                        fontSize: '20px',
                        fontFamily: 'Roboto',
                        fontWeight: '500',
                        color: '#373737',
                        padding: '10px',
                        marginLeft: '20px',
                        backgroundColor: '#FFAF30',
                        borderRadius: '5px'

                    }}>Thank you for your Rate!</span>
                }
            </div>
        </div>
    )
}


export {SetRating}