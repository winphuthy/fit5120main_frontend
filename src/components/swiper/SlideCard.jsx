export const SlideCard = (prop) => {
    let cardImg;
    const input = prop.input;
    if (input.image) {
        const path = require('../../images/' + input.image);
        cardImg = <img style={{width: '50%', height: "auto"}} src={path} alt={'img'}/>;
    } else {
        cardImg = <></>;
    }

    return (
        <div className='cardroot'>
            <p> {input.content} </p>
            {cardImg}
        </div>
    );
}