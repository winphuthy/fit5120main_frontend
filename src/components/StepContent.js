

export const StepContent = (props) => {

    let image;
    const path = require('../images/' + props.image);
    // console.log('path: '+ path)
    console.log(props.image);
    console.log(typeof props.image);
    if(props.image){
        image = <img style={{width: '50%', height: "auto"}} src={path}/>
        // image = <img style={{width: '50%', height: "auto"}} src={imageTest}/>
    }

    return (
        <div style={{display: "flex"}}>
            <p style={{width: '50%'}}>{props.content}</p>
            {image}
        </div>
    );

}