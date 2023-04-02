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
        </div>
    )
}