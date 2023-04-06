import React from "react";
import '../components/sidebar/sidebar.css'
import image42 from '../images/image42.jpg'
import image32 from '../images/image32.jpg'
import image31 from '../images/image31.jpg'
import image22 from '../images/image22.jpg'
import image2 from '../images/image2.jpg'
import image8 from '../images/image8.jpg'
import image55 from '../images/image55.jpg'
import image49 from '../images/image49.jpg'
import image14 from '../images/image14.jpg'
import image40 from '../images/image40.png'
import image57 from '../images/image57.png'
import image19 from '../images/image19.png'
import image15 from '../images/image15.png'
import image6 from '../images/image6.png'
import image51 from '../images/image51.png'
import image53 from '../images/image53.png'
import image20 from '../images/image20.png'
import image28 from '../images/image28.png'
import image26 from '../images/image26.png'
import image4 from '../images/image4.png'
import image30 from '../images/image30.png'
import image1 from '../images/image1.png'
import image29 from '../images/image29.png'
import image25 from '../images/image25.png'
import image54 from '../images/image54.png'
import image46 from '../images/image46.png'
import image35 from '../images/image35.png'
import image52 from '../images/image52.png'
import image21 from '../images/image21.png'
import image3 from '../images/image3.png'
import image47 from '../images/image47.png'
import image7 from '../images/image7.png'
import image11 from '../images/image11.png'
import image12 from '../images/image12.png'
import image45 from '../images/image45.png'
import image10 from '../images/image10.png'
import image38 from '../images/image38.png'
import image9 from '../images/image9.png'
import image39 from '../images/image39.png'
import image50 from '../images/image50.png'
import image56 from '../images/image56.png'
import image36 from '../images/image36.png'
import image18 from '../images/image18.png'
import image44 from '../images/image44.png'
import image48 from '../images/image48.png'
import image17 from '../images/image17.png'
import image37 from '../images/image37.png'
import image27 from '../images/image27.png'
import image43 from '../images/image43.png'
import image33 from '../images/image33.png'
import image41 from '../images/image41.png'
import image13 from '../images/image13.png'
import image24 from '../images/image24.png'

export function DigitalCommunication() {

    const whatsappRef = React.createRef();
    // const skypeRef = React.createRef();
    const zoomRef = React.createRef();
    const facebookRef = React.createRef();
    const facetimeRef = React.createRef();

    function whatsappHandleClick() {
        whatsappRef.current.scrollIntoView({behavior: 'smooth'});
    }

   /* function skypeHandleClick() {
        skypeRef.current.scrollIntoView({behavior: 'smooth'});
    }*/

    function zoomHandleClick() {
        zoomRef.current.scrollIntoView({behavior: 'smooth'});
    }


    function facebookHandleClick() {
        facebookRef.current.scrollIntoView({behavior: 'smooth'});
    }

    function facetimeHandleClick() {
        facetimeRef.current.scrollIntoView({behavior: 'smooth'});
    }


    return (
        <div style={{width: '90%', margin: "auto", display: "flex", justifyContent: "space-between"}}>
            <div style={{width: '20%', margin: '10px 0px 10px 0px'}}>
                <div className="sidebar">
                    <ul>
                        <hr/>
                        <li onClick={whatsappHandleClick}>Installing Whatsapp</li>
                        {/*<li onClick={skypeHandleClick}>Setting up Skype call</li>*/}
                        <li onClick={zoomHandleClick}>Setting up Zoom</li>
                        <li onClick={facebookHandleClick}>Setting up Facebook</li>
                        <li onClick={facetimeHandleClick}>How to use FaceTime</li>
                        <hr/>
                    </ul>
                </div>
            </div>


            <div style={{width: '75%', textAlign: 'left'}}>
                <h2>Digital Communication</h2>
                <h3 ref={whatsappRef}>Info on what digital communication applications can do:</h3>
                <p>In this page, we’ll be going through the steps you might need to take to install and begin utilising
                    digital communications applications. Before you start looking for the application you’d like to
                    learn about, here’s some examples on what a digital communications application can do.</p>
                <p>1. Messaging platforms</p>
                <p>2. Audio calling </p>
                <p>3. Video calling</p>
                <p>4. Group audio calling</p>
                <p>5. Group video calling</p>
                <p>6. Sharing of photos/videos</p>
                <p>Using a digital communications application will enable all the above mentioned features so long as
                    you are connected to a working internet connection. If you’re interested in getting started with a
                    digital application, have a look down below to see which may best suit your needs, and let’s get
                    learning!</p>
                <h3>Short description of what WhatsApp is, and what it can be used for:</h3>
                <p>WhatsApp is a messaging app that allows users to send text messages, voice messages, photos, videos,
                    and documents, as well as make voice and video calls, to other users who have the app installed on
                    their smartphones. WhatsApp can be used for personal and business communication, as well as for
                    group chats and broadcasting messages to multiple users.</p>
                <h3>Step-by-step instructions on how to install whatsapp + images on how to do so:</h3>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>1. Select a different app store (here is the Apple
                        Store as an example)</p>
                    <img src={image42} style={{width: '10%'}}/>
                </div>
                <p></p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>2. Search for the keyword "WhatsApp" in the app store
                        and click on the Download button.</p>
                    <img src={image32} style={{width: '20%'}}/>
                </div>
                <h3>Step-by-step instructions on how to use whatsapp:</h3>
                <h4>Register an account for first-time users</h4>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>Enter your phone number as an account</p>
                    <img src={image31} style={{width: '20%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>Enter the verification code from the phone
                        number.</p>
                    <img src={image22} style={{width: '20%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>Enter some profile information.</p>
                    <img src={image2} style={{width: '20%'}}/>
                </div>
                <h4>Introduce some basic functions</h4>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <h5 style={{width: '100%', marginRight: 'auto'}}>Calls: It allows users to make voice or video calls
                        to other users.</h5>
                    <img src={image8} style={{width: '15%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>When the user clicks on the phone icon in the upper
                        right corner, the user can send a video or voice link to other users in his phonebook.</p>
                    <img src={image55} style={{width: '10%'}}/>
                </div>

                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <h5 style={{width: '100%', marginRight: 'auto'}}>Chats: It allows users to chat with other users or
                        create chat groups to chat with multiple users.</h5>
                    <img src={image49} style={{width: '15%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>By clicking on New Group in the upper right corner,
                        users can create a new chat group by selecting the members they want to invite from the WhatsApp
                        contact book.</p>
                    <img src={image14} style={{width: '15%'}}/>
                </div>
                <h3>Short description of what Zoom is, and what it can be used for:</h3>
                <h4 ref={zoomRef}>What is Zoom ?</h4>
                <p>Zoom is a video conferencing platform that enables users to hold group calling sessions. It can be
                    used for video and audio meetings, screen sharing, recording, and just simply chatting. Zoom is most
                    commonly used for conference calls, but is also oftentimes used for large family calls, especially
                    for including overseas family members.</p>
                <h4>Installing Zoom</h4>
                <p>1. On your Web browser, navigate to the top of it, and click the “+”icon to open a new tab</p>
                <p>2. Within the empty address bar at the top of the tab, enter the following link:
                    “https://www.zoom.us/DOWNLOAD ”. </p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>3. You should now be in the download centre of the
                        zoom web page, it will look as shown below:</p>
                    <img src={image40} style={{width: '25%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>4. Under the section titled “Zoom Desktop Client”,
                        click the blue “Download” button. The section will look like this:</p>
                    <img src={image57} style={{width: '25%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>5. Once you’ve clicked the button, a file explorer
                        will pop-up, this is where you’ll be saving the Zoom installer to, please click “Save” on the
                        bottom right of the pop-up</p>
                    <img src={image19} style={{width: '25%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>6. Once done, this will save the file, to run the
                        file, simply click on the file titled “ZoomInstallerFull.exe” at the bottom left of your
                        browser. It will look like this:</p>
                    <img src={image15} style={{width: '20%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>7. Once you’ve clicked on the installer, a Window
                        shown below will appear, showing you that you are now successfully installing the Zoom
                        application</p>
                    <img src={image6} style={{width: '20%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>8. You would have now successfully installed zoom,
                        and should be brought to the following screen:</p>
                    <img src={image51} style={{width: '20%'}}/>
                </div>
                <h4>Creating/Signing-in to Zoom</h4>
                <p>1. You can sign in via your gmail, if you have not already created a gmail, please refer to our guide
                    on creating a gmail account within the Digital Services page of this website.</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>2. To do so, please click on the following icon on
                        the sign-in page:</p>
                    <img src={image53} style={{width: '15%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>3. Once you’ve done so, it will navigate you to a
                        gmail page, in which you’ll be able to choose from a few gmail accounts. Please choose your
                        gmail account here.</p>
                    <img src={image20} style={{width: '20%'}}/>
                </div>

                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>4. Once you’ve selected your account, the following
                        page will open within your browser:</p>
                    <img src={image28} style={{width: '25%'}}/>
                </div>
                <p>5. Clicking on “Open Zoom Meetings” to connect your gmail account with Zoom.</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>6. You can tell your account has been successfully
                        connected as the Zoom application will now have you email’s profile picture within the top right
                        corner of the app.</p>
                    <img src={image26} style={{width: '25%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>7. In here, the “E” within the pink box, was the used
                        emails display picture</p>
                    <img src={image4} style={{width: '20%'}}/>
                </div>
                <h4>Joining a Zoom meeting</h4>
                <p>1. Have whoever created the zoom link send you an “invite” link. They could send it to you via email,
                    or whatsapp. If you need a guide on setting either of those applications/services up, please refer
                    to the digital services and digital communications page respectively. The link should look something
                    like this: https://monash.zoom.us/j/89313398309?pwd=ais0Yk5mWUhkU3Z4Tm50SHV1ZGlBZz09</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>2. Simply click on the link, and this will open up a
                        new page on your browser that will look as below:</p>
                    <img src={image28} style={{width: '25%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>3. Click on the “Open Zoom Meetings” Button:</p>
                    <img src={image30} style={{width: '25%'}}/>
                </div>
                <p>4. You will now be in the zoom meeting.</p>
                <h4>Hosting a Zoom meeting:</h4>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>1. Hit the Windows key on your keyboard, it will look
                        like this:</p>
                    <img src={image1} style={{width: '10%'}}/>
                </div>
                <p>2. Type in “Zoom” into the search bar and hit the “Enter” key. This will launch the Zoom
                    application</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>3. You can tell the application is open, if you see
                        the following window:</p>
                    <img src={image29} style={{width: '20%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>4. Within the Zoom software, click the following
                        button:</p>
                    <img src={image25} style={{width: '10%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>5. Click on the little arrow on the top right of the
                        “Paritcipants” tab within the navigation bar at the bottom of the meeting you’ve just
                        started</p>
                    <img src={image54} style={{width: '20%'}}/>
                </div>
                <p>6. Click on “Copy Invite Link”. This automatically copies the invite link to the meeting you are
                    currently in. </p>
                <p>7. To paste the invite link into an email or whatsapp message to the person you’d like to send it to,
                    simply search for the recipient’s details within the respective tool, and hit both the “Ctrl” and
                    “v” keys together at the same time into the chat/email with them </p>
                <p>8. Send the message/email, and they would now be able to enter your Zoom meeting through the link
                    you’ve provided them!</p>
                <h4>Camera + Microphone settings</h4>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>You can tell if your microphone/camera is on based on
                        the icons:</p>
                    <img src={image46} style={{width: '20%'}}/>
                </div>
                <p>1. In the above image, the “Mute” box, does not have a “red striking line” through it, this means
                    that you are not muted</p>
                <p>2. The “Start Video” box, has a “red striking line” through it, this means that your camera is turned
                    off</p>
                <p>3. To turn these options either on/off, simply click on the chosen one you’d like to adjust </p>
                <h3 ref={facebookRef}>What is Facebook?</h3>
                <p>Facebook is a social media platform that allows you to create your own personal profile. It will
                    allow you to connect with your families and friends, allowing you to share photos and videos, and
                    view photos and videos by other users. It helps people keep one another updated with what’s going on
                    in their lives. Facebook can also be used as a messaging service to communicate with your facebook
                    friends.</p>
                <h4>Creating your account</h4>
                <p>1. On your Web browser, navigate to the top of it, and click the “+”icon to open a new tab</p>
                <p>2. Within the empty address bar at the top of the tab, enter the following link:
                    “www.facebook.com”. </p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>3. You should now see the following on the top right
                        of the page:</p>
                    <img src={image35} style={{width: '20%'}}/>
                </div>
                <p>4. Please click on the green rectangle that says: “Create new account”</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>5. Clicking on this, should produce the following
                        prompt:</p>
                    <img src={image52} style={{width: '20%'}}/>
                </div>
                <p>6. Fill in the respective fields based on your personal information. If you do not have an email
                    address, please navigate here: “LINK TO CREATING EMAIL” to set-up your email</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>7. Once that is done, your account has been created.
                        You will then be navigated to the following page:</p>
                    <img src={image21} style={{width: '20%'}}/>
                </div>
                <p>8. During this point, you will need to navigate to your email, and find an email from facebook, that
                    email should contain a code starting with the following characters: “FB-”, please only enter in the
                    5 digit code that appears after “FB-” into the field, and hit continue.</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>9. This will verify your email address with facebook,
                        and will bring you to your facebook page, which will look as shown below.</p>
                    <img src={image3} style={{width: '30%'}}/>
                </div>
                <p>10. You are now on your facebook page to learn more about how to utilise facebook, simply scroll down
                    and have a look at some of our other instructions on this page.</p>
                <h3>Step-by-step instructions on how to use facebook:</h3>
                <h4>Setting up your profile: </h4>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>1. On the top right of your facebook page, click on
                        the icon displayed below, and click on your name</p>
                    <img src={image47} style={{width: '10%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>2. This will open the following pop-up right below
                        the icon:</p>
                    <img src={image7} style={{width: '20%'}}/>
                </div>
                <p></p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>3. Click on “Your Name”, this will navigate you to
                        your profile page, it should look like below</p>
                    <img src={image11} style={{width: '30%'}}/>
                </div>
                <h4>Intro:</h4>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>If you would people to be familiar with you, your
                        details, your hobbies, or would simply like specific pictures to be featured on yoru profile,
                        you can do so over here in the “Intro” box</p>
                    <img src={image12} style={{width: '20%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>To access any of these features, simply click on
                        them, and the website will prompt you to either enter in some details about yourself, select
                        from some hobbies, or to choose from a set of photos to be featured for others to see. </p>
                    <img src={image45} style={{width: '20%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>Some examples of what they might look like are
                        below:</p>
                    <img src={image10} style={{width: '30%'}}/>
                </div>
                <p>This information will be publicly available, and people who view your facebook profile will be able
                    to see things added on your profile</p>
                <h4>Adding Photos onto facebook</h4>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>Either In the Navigation Bar below “Your Name”, or in
                        the “Photos” box</p>
                    <img src={image38} style={{width: '25%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>Click on “Photos”. This will navigate you to the
                        photos page of your account, which should look as shown below.</p>
                    <img src={image9} style={{width: '25%'}}/>
                </div>
                <p>To start uploading photos, you can simply click “Add photos/video”, on the top right of the “Photos”
                    box. </p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>This will open a folder on your computer, it will
                        normally open the “Pictures” folder on your computer. Simply click on the photo you would like
                        to upload, and select “Open”</p>
                    <img src={image39} style={{width: '25%'}}/>
                </div>
                <p></p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>Next, select who you would like to see your photos.
                        Make sure you have a read of who can view your photos, based on the message below each option.
                        This will look as such: </p>
                    <img src={image50} style={{width: '25%'}}/>
                </div>
                <p>Once done, this will open the following window: </p>
                <p>If you would like to post this photo with a message attached to it, simply click on “What’s on your
                    mind?” and proceed to enter in your message.</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>If you have completed typing your message, or if you
                        did not wish to type in any message, simply click “Post” </p>
                    <img src={image56} style={{width: '25%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>You have now successfully uploaded your first photo,
                        and should now be able to see your uploaded photo under the “Photos” box. </p>
                    <img src={image36} style={{width: '25%'}}/>
                </div>
                <h4>Connecting with Friends & Family</h4>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>On the top left of any facebook page, there will be a
                        “Search Facebook” that looks as below: </p>
                    <img src={image18} style={{width: '25%'}}/>
                </div>
                <p>Type in the name of the person you would like to add as a “facebook friend”, and hit “Enter” on your
                    keyboard </p>
                <p>This will bring you to a new page, in which under “People”, there will be some suggestions of other
                    facebook users who have your entered name. </p>
                <p>Once you see your friend within the list, please click the “Add Friend” icon on the right of their
                    name</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>You may be able to tell it is them from the photo
                        they have showing which will be on the left of their name </p>
                    <img src={image44} style={{width: '25%'}}/>
                </div>
                <p>Once you’ve clicked “Add Friend”, it will send them a friend request. Once they’ve accepted your
                    friend request, they will now be your “facebook friend”</p>
                <h4>Messaging your Facebook friends:</h4>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>In the bottom right of any facebook page, click the
                        following icon: </p>
                    <img src={image48} style={{width: '10%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>This will open up the following window on the left of
                        the icon: </p>
                    <img src={image17} style={{width: '20%'}}/>
                </div>
                <p>Within the “To:” Field, simply enter in the name of the person you would like to message, this will
                    output some suggestions automatically.</p>
                <p>Click on the person you would like to message, you can utilise both name and the profile image to
                    determine you are messaging the correct person</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>This will then change into a conversation box, which
                        would contain your past messages with the user, and will be shown below</p>
                    <img src={image37} style={{width: '20%'}}/>
                </div>
                <p>To message them, simply type in your message in the chat box and hit “Enter” on your keyboard.</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>If you receive a message, and have not yet looked at
                        it, there will be a prompt at the top right of your facebook web page. Additionally, the chat
                        box on the bottom right, which will be next to the previously shown icon, will automatically
                        pop-up.</p>
                    <img src={image27} style={{width: '20%'}}/>
                </div>
                <h3>Short description of what facetime is, and what it can be used for:</h3>
                <h4 ref={facetimeRef}>What is Facetime:</h4>
                <p>Facetime is a video and audio calling platform. It also allows for group calls and group video calls,
                    meaning that multiple people can be connected to the same call at the same time. It is only
                    available on apple devices (e.g. iPhones, iPads, Macbooks). For an alternative if you are not using
                    an Apple device, please reference our “WhatsApp” section for details regarding a similar tool. </p>
                <h3>Step-by-step instructions on how to access facetime + images on how to do so:</h3>
                <h4>Opening Facetime (iPhones/iPads)</h4>
                <p>The easiest way to open up and access facetime, would be through the search bar. To access the search
                    bar on your device, simply drag your phone down, or slide the screen to the right when you’re on
                    your phone’s home screen.</p>
                <p>Once you’ve done either of the above steps, tap on the “Search” rectangle on the top of your device,
                    and enter in “Facetime”</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>Select the “Facetime” application, it will look as
                        shown below: </p>
                    <img src={image43} style={{width: '10%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>You should see the following on your screen once
                        Facetime is opened: </p>
                    <img src={image33} style={{width: '15%'}}/>
                </div>
                <h4>Making Calls on FaceTime </h4>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>Simply hit the “New FaceTime button on the
                        application once opened: </p>
                    <img src={image41} style={{width: '15%'}}/>
                </div>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>This will bring you to the following screen: </p>
                    <img src={image13} style={{width: '20%'}}/>
                </div>
                <p>Either select the person you would like to call through the “Suggested” list, or type in the name of
                    the person you would like to call within the “To:” field, and select them.</p>
                <p></p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '75%', marginRight: 'auto'}}>Once Selected, please hit either the “New FaceTime”
                        (Video Call), or the phone icon (Audio Call) button at the bottom of your phone. It will look as
                        shown below </p>
                    <img src={image24} style={{width: '20%'}}/>
                </div>
            </div>
        </div>
    )
}