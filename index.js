var  shotSrc = "./assets/images/";


var sbPics = ["sb1.png","sb2.png","sb3.png","sb4.png","sb5.png","sb6.png","sb7.png"];
var sbCount = 0;
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
    const [a,setA] = React.useState(shotSrc+"sb-1.png")

    const Sbpic = (upOrDown) => {
        if(upOrDown == "up" && sbCount<6){
            sbCount++;
        }
        if(upOrDown =="down" && sbCount>0){
            sbCount--;
        }
        setA(shotSrc+sbPics[sbCount]);
    }
    
    return (
        <div className="work-container">
            <div className="item">
                <img alt="hello" src="./assets/images/nsc3.jpeg"></img>
                <div className="item-title">Mathematic Game for middle school</div>
            </div>
            <div className="item">
                <img alt="hello" src="./assets/images/nsc1.jpeg"></img>
                <div className="item-title">Mathematic Game for middle school</div>
            </div>
            <div className="item">
                <div>{sbCount+1}/7</div
                <img className="sb-pic" alt="sb-pic" width="400px" src={a}></img>
                <button className="up-page" onClick={() => Sbpic("up")}>up</button>
                <button className="down-page" onClick={() => Sbpic("down")}>down</button>
                <div className="item-title">Illustrator</div>
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