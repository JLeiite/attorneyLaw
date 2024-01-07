import './../styles/section.scss'
import { LockKey, Bank, GraduationCap, UsersThree, Syringe, HouseLine} from 'phosphor-react'

export function Section(){
    return(
        <>
            <div className='container-fluid text-center section text-light'>
                <div className="row">
                    <div className="col-12 py-4">
                        <small className='boldSmall'>- WHAT WE DO -</small>
                        <h3>Our Practice Areas</h3>
                    </div>
                    <div className='row my-3 px-5'>
                        <div className="card col-12 col-md-6 col-lg-4 rounded-0">
                            <div className="card-body row align-items-center">
                                <div className='col-12 col-md-3'>
                                    <LockKey size={45}/>
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h6 className="mt-2">Corporate Security</h6>
                                    <p className="card-text">Est officiis optio ad voluptatum eveniet id tenetur fugit id velit maxime est saepe internos et voluptatem quidem</p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-md-6 col-lg-4 rounded-0">
                            <div className="card-body row align-items-center">
                                <div className='col-12 col-md-3'>
                                    <Bank size={45}/>
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h6 className="mt-2">Bankruptcy Law</h6>
                                    <p className="card-text">Est officiis optio ad voluptatum eveniet id tenetur fugit id velit maxime est saepe internos et voluptatem quidem</p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-md-6 col-lg-4 rounded-0">
                            <div className="card-body row align-items-center">
                                <div className='col-12 col-md-3'>
                                    <GraduationCap size={45}/>
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h6 className="mt-2">Education Law</h6>
                                    <p className="card-text">Est officiis optio ad voluptatum eveniet id tenetur fugit id velit maxime est saepe internos et voluptatem quidem</p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-md-6 col-lg-4 rounded-0">
                            <div className="card-body row align-items-center">
                                <div className='col-12 col-md-3'>
                                    <UsersThree size={45}/>
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h6 className="mt-2">Family Law</h6>
                                    <p className="card-text">Est officiis optio ad voluptatum eveniet id tenetur fugit id velit maxime est saepe internos et voluptatem quidem</p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-md-6 col-lg-4 rounded-0">
                            <div className="card-body row align-items-center">
                                <div className='col-12 col-md-3'>
                                    <Syringe size={45}/>
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h6 className="mt-2">Personal Injury</h6>
                                    <p className="card-text">Est officiis optio ad voluptatum eveniet id tenetur fugit id velit maxime est saepe internos et voluptatem quidem</p>
                                </div>
                            </div>
                        </div>
                        <div className="card col-12 col-md-6 col-lg-4 rounded-0">
                            <div className="card-body row align-items-center">
                                <div className='col-12 col-md-3'>
                                    <HouseLine size={45}/>
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h6 className="mt-2">Real Estate Law</h6>
                                    <p className="card-text">Est officiis optio ad voluptatum eveniet id tenetur fugit id velit maxime est saepe internos et voluptatem quidem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <button type="button" className="btn btn-outline-light my-4">Schedule appointment</button>
                    </a>
                </div>
            </div>
        </>
    )
}