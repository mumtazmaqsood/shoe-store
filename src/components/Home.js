import React from 'react';
import './Home.css';

import shopping from './../images/shopping.jpg';
import homeimage1 from './../images/homeimage1.jpg';
import homeimage2 from './../images/homeimage2.jpg';
import homeimage3 from './../images/homeimage3.jpg';
import homeimage4 from './../images/homeimage4.jpg';

export const Home = () => {
    return (
        <div className="container">

            {/* <div className="image-item">
                <img src="" height="500" width="500" alt="img" />
            </div> */}
            <div className="box1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                <img className= "box1Image" src={shopping} width="460" height="440" alt="img" />
            </div>
            <div className="box2">
                <h1>HomePage</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus
                euismod. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Lobortis
                mattis aliquam faucibus purus in massa. Laoreet sit amet cursus sit amet dictum. Quam nulla
                porttitor massa id neque aliquam vestibulum morbi. Est pellentesque elit ullamcorper
                dignissim cras tincidunt. In nisl nisi scelerisque eu ultrices vitae auctor eu. Integer
                quis auctor elit sed.Tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae
                suscipit tellus mauris a diam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus
                euismod. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Lobortis
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
                        <img src={homeimage2} alt="homeimage" width="220" height="155" />
                    </div>
                    <div className="img3 hov">
                        <img src={homeimage3} alt="homeimage" width="220" height="155" />
                    </div>
                    <div className="img4 hov">
                        <img src={homeimage4} alt="homeimage" width="220" height="155" />
                    </div>
                </div>
            </div>

            {/* <div className="box3">    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Lobortis mattis aliquam faucibus purus in massa. Laoreet sit amet cursus sit amet dictum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Est pellentesque elit ullamcorper dignissim cras tincidunt. In nisl nisi scelerisque eu ultrices vitae auctor eu. Integer quis auctor elit sed. Tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae suscipit tellus mauris a diam.</p>
              </div>
                <div className="box4"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Lobortis mattis aliquam faucibus purus in massa. Laoreet sit amet cursus sit amet dictum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Est pellentesque elit ullamcorper dignissim cras tincidunt. In nisl nisi scelerisque eu ultrices vitae auctor eu. Integer quis auctor elit sed. Tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae suscipit tellus mauris a diam.</p>
            </div> */}

        </div>
    )
}
