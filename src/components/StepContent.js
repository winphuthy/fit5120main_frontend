export const StepContent = (props) => {

    /*let image;
    if (props.image) {
        const path = require('../images/' + props.image);
        image = <img style={{width: '50%', height: "auto"}} src={path}/>;
        // image = <img style={{width: '50%', height: "auto"}} src={imageTest}/>
        return (
            <div style={{display: "flex"}}>
                <p style={{width: '50%'}}>{props.content}</p>
                {image}
            </div>
        );
    } else {
        return
        (
            <div style={{display: "flex"}}>
                <p style={{width: '50%'}}>{props.content}</p>
            </div>
        )
    }*/

    const step = props.content.map(
        (object) => {
            let image
            if (object.image) {
                const path = require('../images/' + object.image);
                image = <img style={{width: '50%', height: "auto"}} src={path} alt={'img'}/>;

            } else {
                image = <></>
            }
            return (
                <div style={{display: "flex", justifyContent: "flex-start", margin: "20px auto"}}>
                    <p style={{width: '50%'}}>{object.content}</p>
                    {image}
                </div>
            );
        }
    );


    return (
        <>
            {step}
        </>
    )

}