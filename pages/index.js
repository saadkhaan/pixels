import React from 'react'
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';

// Components
import Button from "../components/Button";
import Card from "../components/Card"
import Testimonial from '../components/Testimonial';

// React Icons
import { MdRateReview } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TiSortAlphabetically } from "react-icons/ti";

// Static Images
import seoResult from "../public/seo-result.png";

export default function index() {
    return (
      <>
        <Head>
          <title>
            Hire Freelance Website Designer | Freelance Ecommerce Website
            Developer
          </title>
          <meta
            name="description"
            content="Hire Freelance Website Designer to create eye-catching and user-friendly websites to generate web traffic and revenue."
          ></meta>
          <link rel="canonical" href="https://pixelsbit.com" />
        </Head>

        <svg
          width="1267"
          height="1098"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="blob absolute right-0 -z-1"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1254.92-79.569c115.44 249.877 198.62 585.222-24.43 746.504-204.78 148.071-413.67-141.22-628.39-274.465C397.509 265.511 71.547 206.944 104.974-31.507c37.741-269.223 342.283-397.68 613.901-409.032 237.952-9.945 436.165 144.765 536.045 360.97z"
            fill="url(#paint0_linear)"
          />
          <path
            opacity=".25"
            clipRule="evenodd"
            d="M1405.09-133.756c176.17 211.486 343.32 513.873 169.61 727.39-159.48 196.026-436.13-29.342-678.018-102.473-230.48-69.681-560.493-41.888-589.921-280.865-33.225-269.817 227.693-472.718 487.117-553.983 227.272-71.193 458.772 26.944 611.212 209.931z"
            stroke="#C4C4C4"
          />
          <path
            opacity=".5"
            clipRule="evenodd"
            d="M1357.36-111.79c157.08 226.036 297.23 541.84 105.58 739.405-175.96 181.38-431.91-67.241-666.509-161.176-223.529-89.504-554.709-90.579-563.197-331.211-9.582-271.687 268.027-451.075 533.547-509.42 232.61-51.115 454.679 66.826 590.579 262.402z"
            stroke="#C4C4C4"
          />
          <path
            opacity=".75"
            clipRule="evenodd"
            d="M1307.2-93.661c136.77 238.865 248.87 565.683 40.72 745.792C1156.83 817.486 923.516 547.502 698 433.478 483.123 324.833 153.296 294.899 165.814 54.442c14.132-271.488 306.32-425.998 575.915-460.98 236.18-30.646 447.121 106.2 565.471 312.877z"
            stroke="#C4C4C4"
          />
          <path
            clipRule="evenodd"
            d="M1254.92-79.569c115.44 249.877 198.62 585.222-24.43 746.504-204.78 148.071-413.67-141.22-628.39-274.465C397.509 265.511 71.547 206.944 104.974-31.507c37.741-269.223 342.283-397.68 613.901-409.032 237.952-9.945 436.165 144.765 536.045 360.97z"
            stroke="#C4C4C4"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1250"
              y1="-86"
              x2="592.5"
              y2="441.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3E7E9" />
              <stop offset="1" stopColor="#E3EEFF" />
            </linearGradient>
          </defs>
        </svg>
        <section className="hero container px-4 py-24 sm:py-0 sm:pt-48 sm:pb-24">
          <div className="flex flex-col items-center gap-x-6 space-y-8 sm:grid sm:grid-cols-2 sm:space-y-0">
            <div className="col-left space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl sm:leading-tight">
                I help Chauffeurs ride more Passengers
              </h1>
              <div className="intro text-gray-600 sm:text-base  sm:leading-8">
                <p className="text-xl leading-relaxed">
                  <span className="text-3xl">👋</span> Hi! I'm' Saad, I partner
                  with ambitious <strong>Chauffeur Service Providers</strong>{" "}
                  supporting them with branding, websites and modern digital
                  marketing tools to help them grow their businesses and reach
                  more passenger with custom solutions designed for their unique
                  business.
                </p>
              </div>
              <Button btnTitle="Let's Start" btnLink="/contact" />
            </div>
            <div className="col-right">
              <Image
                src="/car-service-cars.png"
                alt="black cab services"
                layout="intrinsic"
                width={928}
                height={315}
              />
            </div>
          </div>
        </section>

        <section className="homePageServices my-2 px-4 sm:my-20 xl:px-0">
          <div className="container">
            <div className="w-full gap-6 xl:flex">
              <div className="w-full xl:w-4/12">
                <h2 className="mb-4 text-[40px] font-bold leading-none">
                  This is how I can help you for a perfect website
                </h2>
                <div className="mb-6 space-y-8 text-2xl leading-snug text-gray-700 sm:text-base">
                  <p>
                    I love watching start-ups and small businesses grow and get
                    more out of their businesses successfully.
                  </p>
                  <p>
                    With that in mind I have developed result oriented
                    strategies from <strong>web designing</strong> to{" "}
                    <strong>online marketing</strong> your website that converts
                    and make more sales.
                  </p>
                  <p>
                    I use the most up to date tactics, and continually help
                    shape the start-ups and small businesses industry.
                  </p>
                  <p>
                    Whatever you need when it comes to online marketing, I can
                    handle it. My number one objective is to get you more
                    success.
                  </p>
                  <div className="hidden xl:block">
                    <Button
                      btnTitle={`View All Services`}
                      btnLink={`/services`}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-8/12">
                <div className="flex h-full flex-wrap gap-y-6 lg:items-stretch">
                  <div className="text-left sm:w-6/12 sm:px-3 lg:w-6/12">
                    <Card
                      cardTitle={"Brand Strategy"}
                      cardDescription={
                        "Builds the foundation of your brand and website based on your unique values, goals, and expertise in your field."
                      }
                    >
                      <MdRateReview color="white" size="36" />
                    </Card>
                  </div>
                  <div className="text-left sm:w-6/12 sm:px-3 lg:w-6/12">
                    <Card
                      cardTitle={"Visibility Strategy"}
                      cardDescription={
                        "Creates a marketing strategy for your business to build your expert profile and solidify your specialties and the services you provide."
                      }
                    >
                      <FaChartLine color="white" size="36" />
                    </Card>
                  </div>
                  <div className="text-left sm:w-6/12 sm:px-3 lg:w-6/12">
                    <Card
                      cardTitle={"Brand Visuals"}
                      cardDescription={
                        "This is when I and you dive into the visuals of your brand: logo design, primary color palette, font selection, textures, and photography - all to support the brand identity I'll be creating for you. This work will make your brand visuals look professional, recognizable, and unique to you and your business."
                      }
                    >
                      <IoGameController color="white" size="36" />
                    </Card>
                  </div>
                  <div className="text-left sm:w-6/12 sm:px-3 lg:w-6/12">
                    <Card
                      cardTitle={"Website Design & Development"}
                      cardDescription={
                        "Combines your strategy, messaging, and brand visuals into a website that supports your business goals, takes you to the next level as an expert and pro in your field, and aligns and attracts more passengers."
                      }
                    >
                      <FaCode color="white" size="36" />
                    </Card>
                  </div>
                  <div className="text-left sm:w-6/12 sm:px-3 lg:w-6/12">
                    <Card
                      cardTitle={"Professional Copywriting"}
                      cardDescription={
                        "I work with copy specialist to help ensure that all the words on your website sound like you - in a way that customers understand!"
                      }
                    >
                      <TiSortAlphabetically color="white" size="36" />
                    </Card>
                  </div>
                  <div className="text-left sm:w-6/12 sm:px-3 lg:w-6/12">
                    <Card
                      cardTitle={"Launch, Training & Support"}
                      cardDescription={
                        "Launch your new website with the help of promotional images and graphics and get support from me to tweak your new website to fit your vision."
                      }
                    >
                      <IoCall color="white" size="36" />
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects container px-4 xl:px-0">
          <h2 className="mb-2 text-4xl font-bold text-gray-900 sm:text-6xl sm:leading-tight md:text-[40px]">
            Work
          </h2>
          <div className="grid grid-cols-1 gap-6 px-2 sm:grid-cols-2 sm:px-0">
            <div className="card-container">
              <div className="mb-6 transform overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl sm:h-[30rem]">
                <a href="https://limorideusa.com" target="_blank">
                  <Image
                    src="/limo-ride-usa.jpg"
                    alt="WordPress News Page Development"
                    width={756}
                    height={552}
                    layout="responsive"
                  />
                </a>
              </div>
              <h3>Limo Ride USA</h3>
              <p className="text-md sm:text-base">
                <a href="https://limorideusa.com" target="_blank">
                  Visit website
                </a>
              </p>
            </div>

            <div className="card-container">
              <div className="mb-6 transform overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl sm:h-[30rem]">
                <Link href="https://houstonbestlimoride.com/">
                  <a target="_blank">
                    <Image
                      src="/hblr.jpg"
                      alt="WordPress News Page Development"
                      width={756}
                      height={552}
                      layout="responsive"
                    />
                  </a>
                </Link>
              </div>
              <h3>Houston Best Limo Ride</h3>
              <p className="text-md sm:text-base">
                <a href="https://houstonbestlimoride.com/" target="_blank">
                  Visit website
                </a>
              </p>
            </div>
            <div className="card-container">
              <div className="mb-6 transform overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl sm:h-[30rem]">
                <Link href="https://uniquelimoride.com/">
                  <a target="_blank">
                    <Image
                      src="/ulr.jpg"
                      alt="limousine services web design services"
                      width={756}
                      height={552}
                      layout="responsive"
                    />
                  </a>
                </Link>
              </div>
              <h3>Unique Limo Ride</h3>
              <p className="text-md sm:text-base">
                <a href="https://uniquelimoride.com/" target="_blank">
                  Visit website
                </a>
              </p>
            </div>

            <div className="card-container">
              <div className="mb-6 transform overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl sm:h-[30rem]">
                <Link href="https://gmlimousine.com/">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/limousine.jpg"
                      alt="WordPress News Page Development"
                      width={756}
                      height={552}
                      layout="responsive"
                    />
                  </a>
                </Link>
              </div>
              <h3>GM Limousine</h3>
              <p className="text-md sm:text-base">
                <a
                  href="https://gmlimousine.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="social-media-marketing mt-32 bg-gradient-to-r from-pb-blue to-[#768CE2] px-4 py-20 xl:px-0">
          <div className="container">
            <div className="grid-gap-6 grid grid-cols-12">
              <div className="col-span-full xl:col-span-6">
                <h2 className="text-4xl font-bold text-white sm:text-7xl">
                  SEO - Search Engine Optimization
                </h2>
                <div className="mt-6 space-y-4 text-2xl text-white xl:text-base">
                  <p>
                    SEO stands for Search Engine Optimization. In the simplest
                    of terms, good SEO optimizes your visibility online. This
                    means that the more people see your website, the more your
                    online traffic increases, and the better your chances to
                    provide your product or service to a greater number of
                    people.
                  </p>

                  <p>
                    If a prospective customer types in a topic relevant to what
                    your business can provide, don’t you want to be on that
                    first search results page alongside your competitors? If you
                    aren’t in one of those top ten search spots, another
                    business just gained a new customer—or, you just lost one.
                  </p>

                  <p>
                    This is the importance of SEO for your business: SEO gives
                    you the power to be the answer to potential customers’
                    questions. In addition to visibility and traffic increase,
                    SEO contributes to your authoritative voice in your field.
                    Authority then leads to brand trust, which ultimately leads
                    to brand loyalty.
                  </p>
                  <Button
                    btnTitle="Get Started"
                    btnLink="/contact"
                    bg="white"
                    color={`#5F2EEA`}
                    weight="600"
                  />
                </div>
              </div>
              <div className="order-first col-span-full mb-6 sm:order-last xl:col-span-6">
                <div className="image">
                  <Image
                    src={seoResult}
                    alt="search engine optimization result"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials mt-20 bg-gray-100 py-24 lg:py-44">
          <div className="mx-auto w-8/12">
            <h2 className="mb-20 text-center text-4xl font-bold">
              Some encouraging words from people like you
            </h2>
            <Testimonial
              testimonial="One of the best designers. And this is coming from someone who has 180+ projects under her belt."
              clientName="Mariah"
            />
            <Testimonial
              testimonial="He always answered after minutes, understood every single complicated thing I requested. The landing page I offered got million times better than I imagined it. For real he is so far the best web designer you can get. Animations, videos and difficult design was no problem."
              clientName="Tollube"
            />
            <Testimonial
              testimonial="He did a website for us, and we found him very responsive and reasonable."
              clientName="Nazish Ali"
            />
          </div>
        </section>
      </>
    );
}
