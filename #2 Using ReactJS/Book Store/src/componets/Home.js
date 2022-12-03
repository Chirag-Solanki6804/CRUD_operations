import About from './About'
import Contact from './Contact'
import './fac.css'
import Faculties from './Faculties'
function Home() {
    return (
        <>
            <p className='home'>
                <div class="containerHome">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        {/* <!-- Wrapper for slides --> */}
                        <div class="carousel-inner">
                            <div class="item active">
                                <img src={"https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} style={{ width: "100 %" }} />
                            </div>

                            <div class="item">
                                <img src={"https://images.pexels.com/photos/4855385/pexels-photo-4855385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} class="d-block w-100" style={{ width: "100 %" }} />
                            </div>

                            <div class="item">
                                <img src={"https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="d-block w-100" style={{ width: "100 %" }} />
                            </div>
                        </div>

                        {/* <!-- Left and right controls --> */}
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h1 className='bestBook'>Online Best selling Books</h1>
                    <Faculties />
                    <h1 className='bestBook'>About Us</h1>
                    <About />
                    <h1 className='bestBook'>Contact Us</h1>
                    <Contact />
                </div>
            </p>

        </>
    )
}

export default Home