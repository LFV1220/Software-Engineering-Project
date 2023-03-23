import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import { GrFacebookOption, GrTwitter, GrGoogle, GrInstagram, GrLinkedin, GrGithub, GrMail } from "react-icons/gr";
import { FaGem, FaHome, FaPhoneAlt, FaPrint } from "react-icons/fa";

function Homepage() {
    return (
        <div>
            <div className='hero-page'>
                <div className='hero-content'>
                    <h1>SiteBite</h1>
                </div>
            </div>
            <div className='homepage'>
                <div className='about-section'>
                    {/* add about section here */}
                    <h1 style={{ textAlign: 'center' }} >About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida sem et ante interdum, in dignissim dui suscipit. Mauris id nibh risus. In non magna nulla. Maecenas quis ultrices turpis. Ut velit nulla, accumsan sed vehicula ut, scelerisque nec nunc. Sed tempor finibus sagittis. Mauris ultrices a urna ut cursus. Mauris non ex enim.

                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus nibh sed mollis fringilla. Integer sed aliquet felis. Cras lobortis erat mauris, eu lacinia tortor aliquam sed. Proin blandit egestas eros vitae euismod. Nullam sodales quam suscipit eros aliquet, sed scelerisque sapien rhoncus. Vivamus id erat augue. Phasellus eu consequat ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sem sem, gravida sed dignissim sed, facilisis sit amet mauris. Nam finibus diam elit, ac imperdiet ante aliquam at. Pellentesque convallis ligula nec augue rutrum, in tristique magna interdum.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida sem et ante interdum, in dignissim dui suscipit. Mauris id nibh risus. In non magna nulla. Maecenas quis ultrices turpis. Ut velit nulla, accumsan sed vehicula ut, scelerisque nec nunc. Sed tempor finibus sagittis. Mauris ultrices a urna ut cursus. Mauris non ex enim.

                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus nibh sed mollis fringilla. Integer sed aliquet felis. Cras lobortis erat mauris, eu lacinia tortor aliquam sed. Proin blandit egestas eros vitae euismod. Nullam sodales quam suscipit eros aliquet, sed scelerisque sapien rhoncus. Vivamus id erat augue. Phasellus eu consequat ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sem sem, gravida sed dignissim sed, facilisis sit amet mauris. Nam finibus diam elit, ac imperdiet ante aliquam at. Pellentesque convallis ligula nec augue rutrum, in tristique magna interdum.
                    </p>
                </div>
                <div className='slides'>
                    {/* slides showing random restaurant pictures (needs alot of fixing) */}
                    <MDBCarousel>
                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={1}
                            src='https://mdbootstrap.com/img/new/slides/041.jpg'
                            alt='...'
                        />
                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={2}
                            src='https://mdbootstrap.com/img/new/slides/042.jpg'
                            alt='...'
                        />
                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={3}
                            src='https://mdbootstrap.com/img/new/slides/043.jpg'
                            alt='...'
                        />
                    </MDBCarousel>
                </div>

            </div>
            <div className='footer'>
                {/* footer */}
                <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                        <div className='me-5 d-none d-lg-block'>
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href='' className='me-4 text-reset'>
                                <GrFacebookOption />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <GrTwitter />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <GrGoogle />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <GrInstagram />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <GrLinkedin />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <GrGithub />
                            </a>
                        </div>
                    </section>

                    <section className=''>
                        <MDBContainer className='text-center text-md-start mt-5'>
                            <MDBRow className='mt-3'>
                                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>
                                        <FaGem className="me-3" />
                                        SiteBite
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                    </p>
                                </MDBCol>

                                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Pricing
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Settings
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Orders
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Help
                                        </a>
                                    </p>
                                </MDBCol>

                                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                    <p>
                                        <FaHome className="me-2" />
                                        New York, NY 10012, US
                                    </p>
                                    <p>
                                        <GrMail className="me-3" />
                                        info@example.com
                                    </p>
                                    <p>
                                        <FaPhoneAlt className="me-3" /> + 01 234 567 88
                                    </p>
                                    <p>
                                        <FaPrint className="me-3" /> + 01 234 567 89
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>
                    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        SiteBite © 2023
                    </div>
                </MDBFooter>
            </div>
        </div>
    )
}

export default Homepage;