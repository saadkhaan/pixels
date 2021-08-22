import React from 'react'
import Head from 'next/head';
import Image from "next/image";
import Button from '../components/Button'

export default function about() {
    return (
      <>
        <Head>
          <title>Freelance Front-end Developer and Web Designer</title>
          <meta
            name="description"
            content="I am a freelance front-end developer aiming to create best user interface and user experience for you to make more sales."
          />
          <link rel="canonical" href="https://pixelsbit.com/about" />
        </Head>
        <div className="container px-4 py-32 sm:py-0 sm:pt-48 sm:pb-24">
          <div className="grid grid-cols-5 gap-6">
            <div className="col-span-full sm:col-span-3">
              <Image
                src="/Saad.jpg"
                alt="freelance web developer"
                className="w-full"
                width={900}
                height={685}
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <h1 className="text-3xl font-bold mt-12 mb-6">Hi, I’m Saad.</h1>
              <div className="text-lg space-y-12 font-normal leading-relaxed">
                <p>
                  I help start-ups & small business to shine by converting more
                  customers and make more sales. I love the Web platform and I
                  want to make it better for everyone. And I consider myself to
                  be completely blessed that I get to build it for a living.
                </p>
                <p>
                  I started my career as a graphic designer after completing my
                  certification. I started learning website design and
                  development right after leaving a full time job in a private
                  TV channel, and from then I never looked back. Now I design
                  and develop beautiful websites which focus on providing the
                  best experience for everyone using them.
                </p>
                <Button btnTitle="Hire Me" btnLink="/contact" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
