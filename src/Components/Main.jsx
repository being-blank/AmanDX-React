import React from "react";
import vidbg from '../Assets/Vid1.mp4'
import SocialFollow from "./socialFollow"
import msme from '../Assets/msme.jpg'
import dgft from '../Assets/dgft.jpg'
import gst from '../Assets/gst.jpg'
import iec from '../Assets/iec.jpg'
import gem from '../Assets/GeM.jpg'
import mii from '../Assets/mii.jpg'
import cin from '../Assets/cin.jpg'

const Main = () => {
    


    function sendMessage(){
        const MailID = document.getElementById("mailId").value;
        const pno = document.getElementById("phno").value;
        const companyname = document.getElementById("company").value;
        const yourmessage = document.getElementById("message").value;

        const win = window.open(`https://wa.me/917992632088?text=Hi%2C%0AEmail%20-%20${MailID}%0AContact%20Number%20-%20${pno}%0ACompany%20-%20${companyname}%0AEnquiry%20-%20${yourmessage}`, '_blank');
    }


    return (
        <div className="main">

            <video src={vidbg} autoPlay loop muted />
            <div className="content">
                <div className="title">
                    <p className="company"> Amandx India Pvt Ltd</p>
                    <p className="cslogan">Connecting Commerce, Globally</p>
                </div>
                
            </div>

            <div className="mission">
                <random className="stmission"> Our Mission </random><br />
                <random className="slogan"> One World, One Marketplace</random>
            </div>

            <div className="business">
                <p className="st"> Our Business </p>
                <ol>
                    <li>
                        <p className="contentfounder"><b>Merchant Import-Export:</b> Your gateway to seamless international trade from the heart of India. With a rich heritage in trade and a deep understanding of global markets, we specialize in connecting Indian businesses with opportunities worldwide, facilitating smooth import and export transactions across borders.</p>
                    </li>
                    <li>
                        <p className="contentfounder"><b>Manufacturing and Sourcing:</b> We manufacture and work closely with local manufacturers, artisans, farmers and producers to showcase the best of Indian craftsmanship, innovation, textiles, handicraft, spices, agricultural products and culture to the world.</p>
                    </li>
                </ol>
                <p className="contentfounder">As India's economy continues to grow and diversify, the demand for quality products from around the world is on the rise. At Amandx India, we specialize in manufacturing, sourcing and importing a wide range of goods to meet the evolving needs. From handicraft and textiles to raw materials and consumer goods, we leverage our global network to find the best products at competitive prices, delivering value to our clients across industries.</p>
            </div>

            <div className="legal">
                <p className="st">Compliance</p>
                <ul className="legallist">
                    <li>
                        <div className="legalcards">
                            <img src={msme} className="legalimg"/>
                            <div className="legalcaption">MSME Registered</div>
                        </div>
                    </li>

                    <li>
                        <div className="legalcards">
                            <img src={dgft} className="legalimg"/>
                            <div className="legalcaption">DGFT</div>
                        </div>
                    </li>

                    <li>
                        <div className="legalcards">
                            <img src={gst} className="legalimg"/>
                            <div className="legalcaption">GST</div>
                        </div>
                    </li>

                    <li>
                        <div className="legalcards">
                            <img src={cin} className="legalimg"/>
                            <div className="legalcaption">CIN</div>
                        </div>
                    </li>

                    <li>
                        <div className="legalcards">
                            <img src={gem} className="legalimg"/>
                            <div className="legalcaption">GeM Portal</div>
                        </div>
                    </li>

                    <li>
                        <div className="legalcards">
                            <img src={iec} className="legalimg"/>
                            <div className="legalcaption">IEC</div>
                        </div>
                    </li>

                    <li>
                        <div className="legalcards">
                            <img src={mii} className="legalimg"/>
                            <div className="legalcaption">Make In India</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="founder">
                <p className="st">From our Founders</p>
                <br />
                <br />
                <p className="contentfounder">“Rooted in Tradition, Soaring towards Tomorrow: Amandx India – A Promise of Excellence in Every Endeavor.”</p>
                <p className="contentfounder"> Namaste! </p>
                <p className="contentfounder">At Amandx India, we're more than a business; we're a tapestry of tradition. Our journey is fueled by a commitment to quality, ethics, and the spirit ingrained in our beautiful nation.</p>
                <p className="contentfounder">We stand for more than transactions; we stand for positive impact. To our customers, thank you for your trust. To our team, your dedication is our strength. Together, let's write a success story that echoes the essence of the Universe.</p>
                <p className="contentfounder"> Cheers,<br />
                Founders,<br />
                Amandx India.</p>
            </div>

            <div className="contacts" id="contacts">
                <div className="wform">
                    <p className="wtitle">Contact us on Whatsapp</p>
                    <form>
                        <div className="toprow">
                            <div className="wcontent">
                                <input id="mailId" type="email" autoComplete="off" placeholder="Email ID"/>
                            </div>

                            <div className="wcontent">
                                <input id="phno" type="tel" autoComplete="off" placeholder="Mobile Number"/>
                            </div>
                        </div>

                        <div className="wcontent">
                            <input id="company" type="text" autoComplete="off" placeholder="Company Name"/>
                        </div>

                        <div className="wcontent">
                            <textarea id="message" placeholder="Message"/>
                        </div>

                        <button type="submit" className="submitbutton" onClick="sendMessage()">Send Message</button>
                    </form>
                </div>
                <SocialFollow />
            </div>
        </div>
    );
}



// For whatsapp integration in https://api.whatsapp.com/send?phone=917992632088

export default Main;