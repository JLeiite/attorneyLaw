import './../styles/banner.scss'
import { Target, Scales, Stamp } from 'phosphor-react'

export function Banner(){
    return(
        <>
            <div className='position-relative'>
                <div className="card rounded-0 border-0 banner">
                    <div className="card-img-overlay ms-lg-5 mt-lg-5 pt-lg-5 pt-4 mt-1 text-center text-lg-start">
                        <small className='boldSmall'>NEED ANY HELP?</small>
                        <div className='m-2 d-lg-none'>
                            <img src="./src/assets/men_removedbg.png" className="profileImage" alt="Profile"></img>
                        </div>
                        <h3 className="card-title">We Fight For Right</h3>
                        <p className="card-text d-none d-lg-block cardText">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text bannerFooter container d-lg-none">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">
                            <button type="button" className="btn btn-outline-light">Schedule appointment</button>
                        </a>
                    </div>

                    <img src="./src/assets/men_removedbg.png" alt="Men" className='position-absolute start-50 bottom-0 ms-5 d-none d-lg-block'/>
                </div>

                <div className='container'>
                    <div className="row cardBanner text-center text-lg-start">
                        <div className="card col-12 col-md-4 rounded-0 border-0">
                            <div className="card-body row align-items-center borderCard">
                                <div className='col-12 col-md-3'>
                                    <Target size={45}/>
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h6 className="mt-2">100% Success Rate</h6>
                                    <p className="card-text text-light">Some quick example text to build on the card title.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-md-4 rounded-0 border-0">
                            <div className="card-body row align-items-center borderCard">
                                <div className='col-12 col-md-3'>
                                    <Scales size={45}/>
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h6 className="mt-2">Expert Legal Services</h6>
                                    <p className="card-text text-light">Some quick example text to build on the card title.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-md-4 rounded-0 border-0">
                            <div className="card-body row align-items-center">
                                <div className='col-12 col-md-3'>
                                    <Stamp size={45}/>
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h6 className="mt-2">Highly Recommend</h6>
                                    <p className="card-text text-light">Some quick example text to build on the card title.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}