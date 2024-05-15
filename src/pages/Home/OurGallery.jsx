
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import image1 from '../../assets/images/craft11.jpg';
import image2 from '../../assets/images/craft14.jpg';
import image3 from '../../assets/images/craft15.jpg';
import image5 from '../../assets/images/craft17.jpg';
import image6 from '../../assets/images/craft18.jpg';
import image7 from '../../assets/images/craft19.jpg';
import image8 from '../../assets/images/craft20.jpg';
import image9 from '../../assets/images/craft21.jpg';
import image10 from '../../assets/images/craft22.jpg';
import image11 from '../../assets/images/craft12.jpg';
import image12 from '../../assets/images/craft13.jpg';
import image13 from '../../assets/images/craft16.jpg';
import image14 from '../../assets/images/craft4.jpg';
import image15 from '../../assets/images/craft5.jpg';
import image16 from '../../assets/images/craft6.jpg';
import image17 from '../../assets/images/craft7.jpg';
import image18 from '../../assets/images/craft8.jpg';
import image19 from '../../assets/images/craft9.jpg';
import image20 from '../../assets/images/slide1.jpg';
import image21 from '../../assets/images/slide2.jpg';






// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const OurGallery = () => {
    return (

        <div>
            <div className="lg:my-8 my-6 lg:ml-5">


                <div className='App'>

                    <h1 className="lg:text-5xl text-2xl  font-bold flex flex-col justify-center items-center " >
                        Our Gallery

                    </h1>

                </div>


            </div>

            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={6}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper "
                >
                    <div >

                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-800 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image1} />
                            </div>


                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image2} />
                            </div>


                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image3} />
                            </div>


                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image5} />
                            </div>


                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image6} />
                            </div>


                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image7} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image8} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image9} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image10} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image11} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image12} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image13} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image14} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image15} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image16} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image17} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image18} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image19} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image20} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:p-6'>
                            <div className='border-[1px] border-violet-500 lg:p-4 md:p-3 p-2'>
                                <img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image21} />
                            </div>
                        </SwiperSlide>



                    </div>

                </Swiper>
            </>







        </div>
    );
};

export default OurGallery;