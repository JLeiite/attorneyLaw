import './../styles/footer.scss'
import { InstagramLogo, FacebookLogo, Copyright } from 'phosphor-react'

export function Footer(){
    return(
        <>
            <footer className='container-fluid'>
                <div className='row justify-content-between pt-5 px-5'>
                    <h4 className='pb-3'>ATTORNEY & LAW</h4>
                    <div className='col-12 col-md-8'>
                        <small className='boldSmall'>CONTACT INFORMATION</small>
                        <address className='pt-2'>
                            <p><b>Email:</b> john@example.com</p>
                            <p><b>Phone: </b> (555) 123-4567</p>
                            <p><b>Address: </b> 123 Main Street - Cityville, State 12345</p>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473975.913442135!2d-73.59079099356488!3d40.69284825390686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82b6d12d06def%3A0x50ae80b91bcce91b!2sLaw%20Offices%20of%20Lawrence%20Cohen%20-%20Elder%20Law%20Attorney!5e0!3m2!1spt-BR!2sbr!4v1704640969900!5m2!1spt-BR!2sbr" 
                                width="100%" 
                                height="200" 
                                className='border-0 rounded' 
                                allowfullscreen="" 
                                loading="lazy">
                            </iframe>
                        </address>
                    </div>
                    <div className='col-12 col-md-4'>
                        <small className='boldSmall mb-5'>FOLLOW US</small>
                        <a href="#" className='btn d-block btn-outline-light my-3'><FacebookLogo size={24}/> Facebook</a>
                        <a href="#" className='btn d-block btn-outline-light mb-5'><InstagramLogo size={24}/> Instagram</a>
                    </div>
                    <div className='col-12 text-center py-1'>
                        <p>ATTORNEY & LAW OFFICE <Copyright size={14}/> 2024 - All rights reserved  </p>
                    </div>
                </div>
            </footer>
        </>
    )
}