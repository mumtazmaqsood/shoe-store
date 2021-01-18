import React from 'react';

import about4 from './../images/about4.jpg';
import homeimage1 from './../images/homeimage1.jpg';
import about1 from './../images/about1.jpg';
import about2 from './../images/about2.jpg';
import about3 from './../images/about3.jpg';


export const About = () => {
    return (
        <div className="container">
            <div className="box1">
            <img className= "box1Image" src={about4} width="460" height="440" alt="img" />
            </div>
            <div className="box2">
                <h1>About Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus
                    euismod. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Lobortis
                    mattis aliquam faucibus purus in massa. Laoreet sit amet cursus sit amet dictum. Quam nulla
                    porttitor massa id neque aliquam vestibulum morbi. Est pellentesque elit ullamcorper
                    dignissim cras tincidunt. In nisl nisi scelerisque eu ultrices vitae auctor eu. Integer
                    quis auctor elit sed.Tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae
                    suscipit tellus mauris a diam.
                    
                    mattis aliquam faucibus purus in massa. Laoreet sit amet cursus sit amet dictum. Quam nulla
                    porttitor massa id neque aliquam vestibulum morbi. Est pellentesque elit ullamcorper
                    dignissim cras tincidunt. In nisl nisi scelerisque eu ultrices vitae auctor eu. Integer
                    quis auctor elit sed.Tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae
                    suscipit tellus mauris a diam.
                    mattis aliquam faucibus purus in massa. Laoreet sit amet cursus sit amet dictum. Quam nulla
                    porttitor massa id neque aliquam vestibulum morbi. Est pellentesque elit ullamcorper
                    dignissim cras tincidunt. In nisl nisi scelerisque eu ultrices vitae auctor eu. Integer
                    quis auctor elit sed.Tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae
                    suscipit tellus mauris a diam.
                </p>
                    <div className="imageWrapper">
                        <div className="img1 hov">
                            <img src={homeimage1} alt="homeimage" width="220" height="155" />
                        </div>
                        <div className="img2 hov">
                            <img src={about1} alt="homeimage" width="220" height="155" />
                        </div>
                        <div className="img3 hov">
                            <img src={about2} alt="homeimage" width="220" height="155" />
                        </div>
                        <div className="img4 hov">
                            <img src={about3} alt="homeimage" width="200" height="155" />
                        </div>
                    </div>


                
            </div>
        </div >
    )
}
