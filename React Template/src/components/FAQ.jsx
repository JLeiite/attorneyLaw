import './../styles/faq.scss'
import { CaretDown } from 'phosphor-react'

export function FAQ(){
    return(
        <>
            <div className='faq'>
                <div className='container'>
                    <div className='row align-items-center justify-content-between py-5'>
                    <div className='col-12 col-md-5 text-center text-light pb-2'>
                            <div className='faqImage'>
                                <small className='boldSmall'> - CLEAR ANY DOUBTS - </small>
                                <h3>Frequently Asked Questions</h3>
                                <img src="https://themillardlawfirm.com/wp-content/uploads/elementor/thumbs/02-pc8zk9xy4oog2hq0p7jq36nmxkypb34i0ftayiet1w.jpg" className="mt-3" alt="Attorney" />
                                <p className='mt-5'>
                                    Morbi vehicula mi vitae augue luctus, eget rhoncus dui fringilla. Cras cursus, justo quis molestie tincidunt,
                                    ligula leo tincidunt ante, eu volutpat nunc nibh ut est.
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='d-grid gap-2'>
                            <button className="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                <div className='collapseContent'>
                                    <span className='collapseNumber'>1</span>
                                    <span className='collapseNumber'>Do I need a lawyer for minor issues?</span>
                                    <span><CaretDown /></span>                                  
                                </div>
                            </button>
                            <div className="collapse multi-collapse" id="collapse1">
                                <div className="card card-body">
                                    Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                            <button className="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                <div className='collapseContent'>
                                    <span className='collapseNumber'>2</span>
                                    <span className='collapseNumber'>Are virtual consultations available?</span>
                                    <span><CaretDown /></span>                                  
                                </div>
                            </button>
                            <div className="collapse multi-collapse" id="collapse2">
                                <div className="card card-body">
                                    Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                            <button className="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                <div className='collapseContent'>
                                    <span className='collapseNumber'>3</span>
                                    <span className='collapseNumber'>What's the average case resolution time?</span>
                                    <span><CaretDown /></span>                                  
                                </div>
                            </button>
                            <div className="collapse multi-collapse" id="collapse3">
                                <div className="card card-body">
                                    Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                            <button className="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                <div className='collapseContent'>
                                    <span className='collapseNumber'>4</span>
                                    <span className='collapseNumber'>What's the process for case updates?</span>
                                    <span><CaretDown /></span>                                  
                                </div>
                            </button>
                            <div className="collapse multi-collapse" id="collapse4">
                                <div className="card card-body">
                                    Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                            <button className="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                <div className='collapseContent'>
                                    <span className='collapseNumber'>5</span>
                                    <span className='collapseNumber'>Are court appearances always necessary?</span>
                                    <span><CaretDown /></span>                                  
                                </div>
                            </button>
                            <div className="collapse multi-collapse" id="collapse5">
                                <div className="card card-body">
                                    Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}