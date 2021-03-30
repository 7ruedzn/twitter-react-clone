const RightSideTopicsNoPhoto = (props) => {
    return (
        <div className="item">
            <div className="text-container">
                <h2>{props.from}</h2>
                <h1>{props.titleItem}</h1>
                <h2>{props.subtitle}</h2>
            </div>
            <div className="item-img">
                {/* <img src={props.imgURL} alt="item-img"/> */}
            </div>
        </div>
    );
};
  
export default RightSideTopicsNoPhoto;
  