import Feed from "@components/Feed";

import React from 'react'

const Home = () => {
  return (
    <section className=" w-full flex-center flex-col  ">
    <h1 className=" head_text text-center">
      Discover & Share
      <br className=" max-md:hidden" />
      <span className=" orange_gradient"> AI- Powered Prompts</span>
    </h1>
    <p className=" text-center desc">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolore quae nemo maiores voluptates natus a quas dolorem, magnam tempora assumenda laudantium obcaecati architecto minima vitae ipsa itaque omnis. Esse nostrum numquam impedit expedita. Possimus, doloribus veritatis iste quam velit libero fugiat consequuntur debitis ab vitae explicabo, est accusantium consequatur.
    </p>
    <Feed/>
  </section>
  )
}

export default Home
