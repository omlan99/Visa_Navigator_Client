import React from 'react';
import image from '../assets/image-03.png'

const About = () => {
    return (
        <div className='grid grid-cols-2 my-20'>
            <div className='flex justify-center'>
                <img src={image} alt="" />
            </div>
            <div className='space-y-4 my-auto'>
                <p className='text-gray-300'>We love our clients
                </p>
                <h3 className='font-bold text-3xl'>Thousands of people choose our services
                </h3>
                <p>Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrice ligula purus ipsum primis in cubilia augue vitae laoreet augue in cubilia augue egestas an ipsum turpis magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam</p>
                <p className='pb-5'>An enim nullam tempor sapien gravida donec enim blandit ipsum at porta justo integer velna vitae auctor integer congue magna pretium purus pretium. An magnis nulla dolor sapien augue erat iaculis</p>
                <button className='btn btn-primary '>Discover More</button>
            </div>
        </div>
    );
};

export default About;