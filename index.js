var  shotSrc = "./assets/images/";

var countPage = 1;

function App() {
    const [aboutPage,setAboutPage] = React.useState(true);
    const [worksPage,setWorksPage] = React.useState(false);
    const [contactPage,setContactPage] = React.useState(false);

    return (    
    <div className="contain">
        <div className="navbar">
            <nav id="nav">
                <div className="ui-text">
                    <div className="set-ui-position">
                        <img src={"./assets/images/portUi.png"} alt="top" ></img>
                        <div id="titlePosition">
                            <p id="titleShow">Welcome</p>
                        </div>
                    </div>  
                </div>
                <ul className="nav">
                    <li><a onClick={() => {setAboutPage(true);
                                            setWorksPage(false)
                                            setContactPage(false);
                                            document.querySelector("#titleShow").innerText = 'Welcome';}}>About</a></li>
                    <li><a onClick={() => {setAboutPage(false);
                                            setWorksPage(true)
                                            setContactPage(false)
                                            document.querySelector("#titleShow").innerText = 'Works';}}>Works</a></li>
                    <li><a onClick={() => {setAboutPage(false);
                                            setWorksPage(false)
                                            setContactPage(true)
                                            document.querySelector("#titleShow").innerText = 'Contact';}}>Contact</a></li>
                </ul>
            </nav>      
        </div>
        
            {aboutPage && !worksPage && !contactPage ? <Welcome /> : 
            !aboutPage && worksPage && !contactPage? <Works /> : 
            <Contact />}
    </div>
    )
}

function Contact(){
    return (
        <div className="contact-container">
            <div className="tcb">
                <div className="title-contact-bg">
                    <img src="./assets/images/titlecontact.png" width="250px"alt="contactUi" />
                    <p>Hire Me!</p>
                </div>
                <div className="contact-bg">
                    
                        <p>Tel. 086-600-2009</p>
                        <p>Email. Kittitus.kong@outlook.com</p>
                        <p>Facebook. Hathum Kittitus</p>
                 
                </div>
            </div>
        </div>
    )
}

function Works(){
    return (
        <div className="work-container">
            <div className="works-selector">
                <div>Games</div>
                <div>Web</div>
                <div>Illustration</div>
                <div>Animation</div>
            </div>
            <div className="work-side">

            </div>
        </div>
    )
}


function Welcome(){
    return (
        <div className="welcome-section">
    <div className="hello">
    <div className="conA">
        <div className="uiwelcome">
        <div className="name-container">
            <div className="myname">Kittitus</div>
        </div>
        <div className="position">
            <div className="myPostion">Game and Web Developer</div>

        </div>
        </div>
        
    </div>
    <div className="conB">
        <div className="flip-inner">
            <div className="flipfront">
                <div className="textflip">                               
                    FLIP ME
                </div>
                <img className="profile" alt="Profile" src="./assets/images/hatang3.png"></img>
            </div>
            <div className="flipback">
                <div className="textflipBack">                               
                    <p className="titleflip">My Profile</p>
                    <div className="infoflip">
                    <p>Name     : Kittitus Kongprakan</p> 
                    <p>Nickname : Hathum </p>
                    <p>Birthday : 12 June 1998</p>
                    <p>Age      : 23</p>
                    <p>Education: Media Technology</p>
                    <p>Game Development</p>
                    <p>King Mongkut's University of Technology Thonburi</p>
                    <p>GPA 3.04</p>
                    </div>
                </div>
                <img className="profile" alt="Profile" src="./assets/images/infoBackground.png"></img>
            </div>
        </div>
    </div>     
</div>
</div>  )
}




ReactDOM.render( < App / > , document.getElementById("root"));