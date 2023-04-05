import imageTest from '../images/Avoiding.png'


export const StepContent = (props) => {

    let image;
    if(props.image){
        image = <image style={{width: '50%'}} src={props.image}/>
        image = <image style={{width: '50%'}} src={imageTest}/>
    }

    return (
        <div style={{display: "flex"}}>
            <p style={{width: '50%'}}>{props.content}</p>
            {image}
        </div>
    );

}