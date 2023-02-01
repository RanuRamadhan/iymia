import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'
 
const FAQ = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Frequently Asked Questions"
                homePageUrl="/"
                homePageText="Home"
                activePageText="FAQ"
            />

            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="faq-accordion">
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Minsa, when will we get our LoA and Invoice? Where was it sent?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>The committee will send LoA and Invoice no later than 7 working days after you register.
                                    We will send the LoA and Invoice to the team leader's email, so make sure you include a valid and correct email address!</p>
                                    
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Minsa, I registered a week ago but how come I haven't received the LoA and Invoice yet?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Try checking the spam folder in your team leader's email, maybe the email from the IYSA team will go to the spam folder</p>
                                    
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Where to upload the competition file, Minsa?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Upload the files requested by the committee to the Google Drive link that we have included in your LoA, make sure you read the LoA carefully, OK!</p>
                                    
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        I want to pay the registration fee but how come I can't find the invoice? and where is the payment transferred?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Come on, have you read LoA to the end yet? Because we will send the invoice with your team's LoA, make sure you have read the email from us to the end! For payment, you can transfer to the account listed on the invoice. Make sure you pay according to the nominal stated on the invoice, okay!</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Minsa, I've already paid the registration fee. Where can I upload the proof of payment?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>If you have made a payment, you can upload the proof to the link listed on the invoice, and make sure you fill in and upload the proof of transfer correctly so that the committee can record it correctly too.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        When will the receipt be sent to us?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>We will send a receipt for payment in a maximum of 7 working days to the team leader's email, after you have uploaded proof of payment!</p>
                                    
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="g">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                        Minsa, one more week for judging, how come I haven't received my team's presentation schedule yet?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>We will send the online participant presentation schedule no later than 2 days before the judging takes place to the whatsapp group and also the team leader's email. Make sure you diligently check the information we provide on the Whatsapp group and also email!</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
 
            <div className="contact-info-area pb-100">
                <div className="container">
                    <div className="contact-info-inner">
                        <h2>Have any question in mind please call or mail us</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-contact-info-box">
                                    <div className="icon bg1">
                                        <i className="ri-customer-service-2-line"></i>
                                    </div>
                                    <h3><a href="tel:(+321) 895-980 008">(+321) 895-980 008</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-contact-info-box">
                                    <div className="icon">
                                        <i className="ri-earth-line"></i>
                                    </div>
                                    <h3><a href="mailto:hello@texap.com">hello@texap.com</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
 
            <FooterStyleOne />
        </>
    )
}

export default FAQ;