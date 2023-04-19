import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import { GrFacebookOption, GrTwitter, GrGoogle, GrInstagram, GrMail } from "react-icons/gr";
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
                    <p>This restaurant is a great choice for people who love to eat delicious meals throughout the day. From early morning to late at night, they serve breakfast, lunch, and dinner with a wide range of menu options to suit any taste and dietary preference.

                        For breakfast, they offer a variety of dishes such as pancakes, waffles, omelets, bagels, and breakfast burritos. Customers can also enjoy a cup of freshly brewed coffee, tea, or a refreshing fruit juice to start their day off right.

                        For lunch, the restaurant has a diverse selection of sandwiches, soups, salads, and wraps, all made with the freshest ingredients. There are also vegetarian and vegan options available for those with specific dietary needs.

                        At dinnertime, the restaurant offers an even wider range of menu options including seafood, steak, pasta, and poultry dishes. The restaurant also has a selection of appetizers, sides, and desserts to complement any meal.

                        In addition to the great food, the restaurant provides a cozy and inviting atmosphere where customers can relax and enjoy their meal. The staff is friendly and attentive, making sure that every guest has a wonderful dining experience. Whether you're looking for a quick bite or a full meal, this restaurant is sure to satisfy your hunger and leave you feeling satisfied.
                    </p>
                </div>
                <div className='slides'>
                    {/* slides showing random restaurant pictures (needs alot of fixing) */}
                    <MDBCarousel>
                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={1}
                            src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                            alt='...'
                        />
                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={2}
                            src='https://assets3.thrillist.com/v1/image/3130793/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70'
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
                                    <p>Order some items from the menu or schedule a reservation with us today!</p>
                                </MDBCol>

                                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                    <p>
                                        <FaHome className="me-2" />
                                        Tampa, FL, US
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