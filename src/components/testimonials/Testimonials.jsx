import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar2.jpg';
import AVTR2 from '../../assets/avatar3.jpg';

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name1:'Rutik Gagare',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores voluptas suscipit eum nostrum! Aliquam enim ratione quam alias corporis, animi totam nihil nemo, nisi illum, modi in ipsam. Ipsam, ips Aliquam enim ratione quam alias corporis, animi totam nihil nemo, nisi illum, modi in ipsam. Ipsam, ipsa'
  },
  {
    avatar:AVTR2,
    name1:'Pratik Gagare',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores voluptas suscipit eum nostrum! Aliquam enim ratione quam alias corporis, animi totam nihil nemo, nisi illum, modi in ipsam. Ipsam, ips Aliquam enim ratione quam alias corporis, animi totam nihil nemo, nisi illum, modi in ipsam. Ipsam, ipsa'
  },
  {
    avatar:AVTR1,
    name1:'Pravin Argade',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores voluptas suscipit eum nostrum! Aliquam enim ratione quam alias corporis, animi totam nihil nemo, nisi illum, modi in ipsam. Ipsam, ips Aliquam enim ratione quam alias corporis, animi totam nihil nemo, nisi illum, modi in ipsam. Ipsam, ipsa'
  },
  {
    avatar:AVTR2,
    name1:'Avinash Wani',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores voluptas suscipit eum nostrum! Aliquam enim ratione quam alias corporis, animi totam nihil nemo, nisi illum, modi in ipsam. Ipsam, ips Aliquam enim ratione quam alias corporis, animi totam nihil nemo, nisi illum, modi in ipsam. Ipsam, ipsa'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}
      >
        {
          data.map(({avatar,name1,review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial" >
                <div className="client__avatar">
                  <img src={avatar} alt={name1}/>
                </div>
                <h5 className='client__name'>{name1}</h5>
                <small className='client__review'>{review}</small>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;