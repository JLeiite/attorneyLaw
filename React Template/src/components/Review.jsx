import './../styles/review.scss'
import { Star } from 'phosphor-react'

export function Review() {
    return(
        <>
            <div className='container my-4'>
                <div className='row my-5 align-items-center justify-content-between'>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-fade col-12 col-md-5">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner mb-3">
                        <div className="carousel-item active text-center">
                        <div className='carouselPicture'>
                            <img src="https://www.fredericpaulussen.be/wp-content/uploads/2020/08/Portrait-photography-in-Antwerp.jpg" alt="..."/>
                        </div>
                        <div className='my-4'>
                            <h5>Robert Gonzales</h5>
                            <h6 className='px-4'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h6>
                            <span><Star/><Star/><Star/><Star/><Star/></span>
                        </div>
                        </div>
                        <div className="carousel-item text-center">
                        <div className='carouselPicture'>
                            <img src="https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg" alt="..."/>
                        </div>
                        <div className='my-4'>
                            <h5>Austin Parkison</h5>
                            <h6 className='px-4'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h6>
                            <span><Star/><Star/><Star/><Star/><Star/></span>
                        </div>
                        </div>
                        <div className="carousel-item text-center">
                        <div className='carouselPicture'>
                            <img src="https://insightglobal.com/wp-content/uploads/2022/10/headshot-1024x683.jpg" alt="..."/>
                        </div>
                        <div className='my-4'>
                            <h5>Caroline Loth</h5>
                            <h6 className='px-4'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h6>
                            <span><Star/><Star/><Star/><Star/><Star/></span>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                    <div className='col-12 col-md-6 text-center'>
                        <small className='boldSmall'> - HERE FOR YOU - </small>
                        <h3>Satisfied Clients</h3>
                        <p>
                            Integer placerat tincidunt est sed efficitur. Proin malesuada lacus non semper semper. Ut tincidunt, risus quis tempor
                            consequat, turpis mi mattis est, in condimentum mauris ante et nulla. Fusce eget ipsum enim. Etiam lectus nisl,
                            accumsan nec orci a, rhoncus blandit massa. Morbi congue tellus dolor, vitae pellentesque lacus aliquet et.
                        </p>
                        <p>
                            Morbi vehicula mi vitae augue luctus, eget rhoncus dui fringilla. Cras cursus, justo quis molestie tincidunt,
                            ligula leo tincidunt ante, eu volutpat nunc nibh ut est.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}