import React from "react";
import '../components/sidebar/sidebar.css'

export function DigitalCommunication() {

    const myRef = React.createRef();

    function handleClick() {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div style={{width: '90%', margin: "auto" , display: "flex", justifyContent: "space-between"}}>
            <div style={{width: '20%' , margin: '10px 0px 10px 0px'}}>
                <div className="sidebar">
                    <ul>
                        <hr/>
                        <li onClick={handleClick}>Installing Whatsapp</li>
                        <li>Setting up Skype call</li>
                        <li>How to use FaceTime</li>
                        <hr/>
                    </ul>
                </div>
            </div>
            <div style={{width: '75%'}}>
                <h2>Digital Communication</h2>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p>Fusce scelerisque velit velit, sit amet interdum nibh lacinia id. Fusce et lacus sed lacus efficitur consequat. Nullam diam mauris, finibus aliquam tempus at, ultrices id purus. Suspendisse nulla arcu, sollicitudin ut pulvinar non, consequat in erat. Nam varius justo sed nulla auctor, nec convallis purus aliquet. Sed porttitor leo quis ante suscipit, sit amet consectetur nulla euismod. Sed euismod et nibh id vestibulum. Morbi tincidunt dolor elit, non porttitor ante cursus nec. Phasellus ac elit tincidunt, efficitur arcu sed, congue velit. Maecenas nec magna eu mauris pellentesque tempus et nec nibh. Aenean imperdiet tellus erat, et volutpat felis vulputate sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla varius feugiat libero vitae commodo. Proin nunc erat, ultricies at mauris eget, cursus blandit dui. In in pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <p ref={myRef}></p>
            </div>
        </div>
    )
}