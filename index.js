var  shotSrc = "./assets/images/";

const illusImg = ["SB_1.jpg","SB_2.jpg","SB_3.jpg","SB_4.jpg","SB_5.jpg","SB_6.jpg","SB_7.jpg"]
var countPage = 1;

function App() {

    // const [imgIllus,setImgIllus] = React.useState(shotSrc+illusImg[0]);
    const [imgIllus,setImgIllus] = React.useState(countPage);

    const buttonIllus = (upOrDown) => {
        if(upOrDown == 'Up' && countPage < illusImg.length && countPage>0){
            countPage++;
        }else if(upOrDown == 'Down' && countPage <= illusImg.length && countPage>1){
            countPage--;
        }else{
            return;
        }
        setImgIllus(countPage)
    }
    
    const helloThere = (index) => {
        if(index == 1){
            return shotSrc+illusImg[countPage-1]
        }else if(index == 2){
            return shotSrc+illusImg[countPage]
        }else if(index == 3){
            return shotSrc+illusImg[countPage+1]
        }
    }

    return (    
    <div className="contain">
        <div className="navbar">
            <nav id="nav">
                <div className="ui-text">
                    <img src={shotSrc+"portUi.png"} alt="top" ></img>
                    <p>Portfolio</p>
                </div>
                <ul className="nav">
                    <li><a href="#intro">Works</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>      
        </div>
        <div className="welcome-section" id="abot">
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
        </div>
        <div className="work-section">
            <div className="intro-project" id="intro">
                <div className="title-container">
                    <a className="Title">My Works</a>
                </div>
                <a className="bton unity-button">
    
                </a>
                <a className="bton animate-button">

                </a>
                <a className="bton art-button">
    
                </a>
                <a className="bton codepen-button waves-effect waves-light" href="https://codepen.io/hathum-kittitus/pens/public" target="_blank">
    
                </a>
                <button className="bton fcc-button">
    
                </button>
            </div>
            <div className="illustrator">
                <a className="titel-illus">Illustrator</a>
                <div className="picture-container">
                    <img id="imgIllusLast" className="imgIllus" src={helloThere(1)} alt="illus2" />
                    <img id="imgIllusMain"className="imgIllus" src={helloThere(2)} alt="illus2" />
                    <img id="imgIllusNext" className="imgIllus" src={helloThere(3)} alt="illus2" />
                </div>
                <button onClick={() => buttonIllus('Up')} className="up">Up</button>
                <button onClick={() => buttonIllus('Down')} className="down">Down</button>
                <span className="numPage">Page {countPage} / 7</span>
            </div>
        </div>
    </div>
    )
}


ReactDOM.render( < App / > , document.getElementById("root"));