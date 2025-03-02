import React from 'react';
import NavBar from '../components/navbar/NavBar';
import homeImg from '../assets/home.jpg';
import interiorImg from '../assets/interior.jpg';
import kitchenImg from '../assets/kitchens.jpg';
import bathroomImg from '../assets/bathrooms.jpg';
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
        img: {kitchenImg},
        text: 'Kitchens'
    },
    {
        img: {bathroomImg},
        text: 'Bathrooms'
    },
    {
        img: {interiorImg},
        text: 'Interiors'
    },
]



const HomePage = () => {
    return (
        <>
            <NavBar />
            <div>
                <div className='relative mt-5'>
                    <img className='rounded-2xl' src={homeImg} alt="home-img" srcset="" />
                    <div className='absolute top-1/5 right-30 text-white px-60 '>
                    <h1 className='text-8xl w-max font-bold leading-tight mb-4 text-left'> Exceptional Home <br/> Remodeling &<br/>  Renovations
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
                            whyChooseUsData.map((item,index)=>{
                                return(
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
                        <h2 className='text-4xl font-roboto font-semibold'>Our Services Include</h2>
                    </div>
                    <div>
                      
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}


export default HomePage;