import './About.css';
import AboutContent from '../const/AboutContent.json'
import LineChart from '../components/LineChart';

export const About = () => {

    const content = AboutContent.map(value => (
        <p>{value.p}</p>
    ));

    return (
        <div className='Chart'>
            <h1>About</h1>
            <div>
                {content}
            </div>
            <div style={{height: '400px', width: 'auto'}} >
                <LineChart/>
            </div>
            <div>
                <p>
                    Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
            </div>
        </div>
    )
}