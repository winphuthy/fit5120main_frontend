import './SlideCard.css'


export const SlideCard = (prop) => {
    let cardImg;
    const input = prop.input;
    if (input.image) {
        const path = require('../../images/' + input.image);
        cardImg = <img src={path} alt={'img'} id={prop.index}/>;
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