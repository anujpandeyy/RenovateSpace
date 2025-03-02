import React from 'react';
import NavBar from '../components/navbar/NavBar';
import homeImg from '../assets/home.jpg';
import interiorImg from '../assets/interior.jpg';
import kitchenImg from '../assets/kitchens.jpg';
import bathroomImg from '../assets/bathrooms.jpg';
import { RiDoubleQuotesR } from "react-icons/ri";
import Button from '../components/button/Button';



const whyChooseUsData = [
    {
        title: 'Easy Financing',
        myData: 'We offer flexible financing options to make your dream home a reality. Our team works with you to find the best solution, ensuring a stress-free experience from start to finish.',
    },
    {
        title: 'Home Consultations',
        myData: 'Our expert team provides free, no-obligation consultations at your home. We’ll assess your needs, discuss design ideas, and help you plan every detail to ensure the project exceeds your expectations.',
    },
    {
        title: 'Award Winning Service',
        myData: 'With years of industry experience and numerous accolades, our award-winning service ensures the highest standards of craftsmanship, professionalism, and customer satisfaction.',
    },
    {
        title: 'Licensed & Insured',
        myData: 'We are fully licensed and insured, giving you peace of mind knowing your home is in safe hands. Our team is committed to delivering top-notch quality while adhering to all safety and legal standards.',
    },
];

const ourServiceData = [
    {
        img: kitchenImg,
        text: 'Kitchens'
    },
    {
        img: bathroomImg,
        text: 'Bathrooms'
    },
    {
        img: interiorImg,
        text: 'Interiors'
    },
];

const satisfiedCustomerData = [
    {
        myIcon: RiDoubleQuotesR,
        text: 'I\'m a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.',
        author: 'Dave Reddington'
    },
    {
        myIcon: RiDoubleQuotesR,
        text: 'I\'m a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.',
        author: 'Amelia Banks'
    },
    {
        myIcon: RiDoubleQuotesR,
        text: 'I\'m a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.',
        author: 'Kenny Stutes'
    },
];



const HomePage = () => {
    return (
        <>
            <NavBar />
            <div>
                <div className='relative mt-5'>
                    <img className='rounded-2xl brightness-60' src={homeImg} alt="home-img" srcset="" />
                    <div className='absolute top-1/5 sm:top-1/3 sm:right-10 right-30 text-white px-60 '>
                        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-max font-bold leading-tight mb-4 text-left'> Exceptional Home <br /> Remodeling &<br />  Renovations
                        </h1>
                        <div className='relative right-80'>
                            <Button text={'Get A Free Estimate'} bgColor="bg-white" textColor="text-black"></Button>
                        </div>
                    </div>
                </div>

                <div className='mt-15 flex items-center gap-80'>
                    <div>
                        <img className='max-h-180  rounded-2xl' src={interiorImg} alt="" srcset="" />
                    </div>
                    <div>
                        <h2 className='text-4xl font-roboto font-semibold'>The Leading Bay Area </h2>
                        <h2 className='text-4xl font-roboto font-semibold' >Remodeling Company</h2>
                        <p className='text-sm  font-roboto mt-10 text-gray-400 text-justify max-w-80'>I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add
                            your own content and make changes to the font.</p>
                        <div className='mt-10 mr-55'>
                            <Button text={'More About Us'} bgColor="bg-black" textColor="text-white"></Button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-20'>
                    <div className='self-center'>
                        <h2 className='text-4xl font-roboto font-semibold'>Why Choose Us ?</h2>
                    </div>
                    <div className='flex flex-row mt-20 gap-10'>
                        {
                            whyChooseUsData.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-col  justify-evenly'>
                                        <h2 className='text-4xl max-w-md font-roboto font-semibold text-yellow-600 text-center'>{item.title}</h2>
                                        <p className='text-sm  max-w-sm font-roboto text-gray-400 text-justify  mt-10'>{item.myData}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className='flex flex-col mt-20 bg-gray-100'>
                    <div>
                        <h2 className='mt-10 text-4xl font-roboto font-semibold'>Our Services Include</h2>
                    </div>
                    <div className='mt-10 flex ml-10 gap-25'>
                        {ourServiceData.map((item, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <img className='max-h-110' src={item.img} alt="" />
                                        <h2 className='text-2xl max-w-md font-roboto font-light text-yellow-600 text-center'>{item.text}</h2>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <div className='p-1 m-5'>
                        <Button text={'See All Services'} bgColor="bg-black" textColor="text-white"></Button>
                    </div>
                    <div>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='text-4xl font-roboto font-semibold'>
                        <h2>Satisfied Customers</h2>
                    </div>
                    <div className='flex gap-10'>
                        {satisfiedCustomerData.map((value, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <h2 className='text-6xl flex justify-center mt-10'>{React.createElement(value.myIcon)}</h2>
                                        <p className='mt-5 text-sm text-justify text-gray-400'>{value.text}</p>
                                        <h2 className='my-5 text-2xl max-w-md font-roboto  text-yellow-600 font-bold text-center'>{value.author}</h2>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-10 bg-black text-white flex flex-col md:flex-row p-10">
                    <div className="md:w-1/2 flex flex-col justify-center items-start">
                        <h2 className="text-4xl md:text-6xl font-bold text-left mb-4">Let's Discuss Your Next Project</h2>
                        <p className="text-sm text-gray-400 mb-2">Fill out the form, or call us to set up a free in-home consultation.</p>
                        <p className="text-sm text-gray-400 mb-2">Service Areas:</p>
                        <p className="text-sm text-gray-400 mb-2">500 Dream Street, Andheri West, Mumbai, Maharashtra 400053, India</p>
                        <p className="text-sm text-gray-400 mb-2">contact@mumbai.com</p>
                        <p className="text-sm text-gray-400 mb-10">123-456-7890</p>
                    </div>

                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <form action="" className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-400" htmlFor="fname">First Name*</label>
                                    <input className="w-full mt-2 p-3 border-2 border-white bg-transparent rounded-lg focus:ring-2 focus:ring-blue-400" type="text" id="fname" required />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400" htmlFor="lname">Last Name*</label>
                                    <input className="w-full mt-2 p-3 border-2 border-white bg-transparent rounded-lg focus:ring-2 focus:ring-blue-400" type="text" id="lname" required />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-400" htmlFor="email">Email*</label>
                                    <input className="w-full mt-2 p-3 border-2 border-white bg-transparent rounded-lg focus:ring-2 focus:ring-blue-400" type="email" id="email" required />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400" htmlFor="phone">Phone*</label>
                                    <input className="w-full mt-2 p-3 border-2 border-white bg-transparent rounded-lg focus:ring-2 focus:ring-blue-400" type="tel" id="phone" required />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-400" htmlFor="address">Address*</label>
                                    <input className="w-full mt-2 p-3 border-2 border-white bg-transparent rounded-lg focus:ring-2 focus:ring-blue-400" type="text" id="address" required />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400" htmlFor="subject">Subject*</label>
                                    <input className="w-full mt-2 p-3 border-2 border-white bg-transparent rounded-lg focus:ring-2 focus:ring-blue-400" type="text" id="subject" required />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm text-gray-400" htmlFor="message">Message</label>
                                <textarea className="w-full mt-2 p-3 border-2 border-white bg-transparent rounded-lg resize-none h-32 focus:ring-2 focus:ring-blue-400" id="message"></textarea>
                            </div>

                            <div className="mt-6">
                                <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <footer className="bg-black text-white text-center py-4 mt-10">
                    <p>&#169; {new Date().getFullYear()} by Anuj Pandey</p>
                </footer>

            </div>
        </>
    );
}


export default HomePage;










