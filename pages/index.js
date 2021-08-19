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
import { FaSearch } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

// Static Images
import iPhone from "../public/iPhone-black.png";

export default function index() {
    return (
      <>
        <Head>
          <title>
            Freelance Website Designer | Freelance Ecommerce Website Developer
          </title>
          <meta
            name="description"
            content="Hire Freelance Website Developer to create eye-catching and user-friendly websites to generate web traffic and revenue."
          ></meta>
          <link rel="canonical" href="http://pixelsbit.com" />
        </Head>

        <svg
          width="1267"
          height="1098"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 blob -z-1"
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
        <section className="hero container text-center px-4 py-24 sm:py-0 sm:pt-48 sm:pb-24">
          <div className="sm:w-10/12 2xl:w-8/12 mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black sm:leading-tight text-gray-900">
              I create website designs your users will love and convert
            </h1>
            <div className="intro text-gray-600 text-2xl sm:text-base leading-relaxed sm:leading-8">
              <p>
                Hi, I am <strong>Saad.</strong> I help start-ups & small
                businesses to grow by converting more customers and make more
                sales.
              </p>
              <p>
                If you’re looking for a{" "}
                <strong>freelance Website Designer</strong> or a{" "}
                <strong>freelance front-end developer</strong> to help bring an
                idea to life and market it using the best online marketing
                tactics then let’s connect.
              </p>
            </div>
            <Button btnTitle="Start here" btnLink="/contact" />
          </div>

          <div className="clients-logo mt-10">
            <h4 className="mb-4">Trusted by</h4>
            <div className="hidden sm:block">
              <Image
                src="/logos.png"
                alt="clients logo"
                layout="intrinsic"
                width={710}
                height={71}
              />
            </div>
            <div className="sm:hidden">
              <Image
                src="/client-mobile.png"
                alt="clients logo"
                layout="intrinsic"
                width={450}
                height={159}
              />
            </div>
            {/* <img
              src={Logos}
              alt="clients logo"
              className="hidden sm:block mx-auto"
            />
            <img
              src={mobileLogos}
              alt="clients logo"
              className="sm:hidden mx-auto"
            /> */}
          </div>
        </section>

        <section className="container projects px-4 xl:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card-container">
              <div className="sm:h-[23rem] rounded-xl shadow-xl overflow-hidden mb-6">
                <Link href="https://edenred.ae/news">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/news.jpg"
                      alt="WordPress News Page Development"
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                      width={475.75}
                      height={562.5}
                      layout="responsive"
                      className="transition duration-1000 ease-in-out sm:hover:-translate-y-2/4"
                    />
                  </a>
                </Link>
              </div>
              <p className="text-3xl sm:text-base">
                WordPress Website Development for a News Page
              </p>
              <p className="text-lg sm:text-sm text-gray-400 mt-2">
                WordPress Web Development
              </p>
            </div>

            <div className="card-container mt-12 sm:mt-0">
              <div className="sm:h-[23rem] rounded-xl shadow-xl overflow-hidden mb-6">
                <Link href="https://conversationswithloulou.com/">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/cwl.jpg"
                      alt="WordPress Website Development"
                      className="sm:-mt-72 transition duration-3000 ease-in-out sm:hover:-translate-y-2/3"
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                      width={404.25}
                      height={1094.5}
                      layout="responsive"
                    />
                  </a>
                </Link>
              </div>
              <p className="text-3xl sm:text-base">
                Podcast Website design and Website development
              </p>
              <p className="text-lg sm:text-sm text-gray-400 mt-2">
                WordPress Web Development
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="card-container mt-12 sm:mt-0">
              <div className="sm:h-[23rem] rounded-xl shadow-xl overflow-hidden mb-6">
                <Link href="https://gmlimousine.com/">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/limousine.jpg"
                      alt="Airport Pick and Drop Website Design & Development"
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                      width={475.75}
                      height={1337.25}
                      layout="responsive"
                      className="transition duration-4000 ease-in-out sm:hover:-translate-y-3/4"
                    />
                  </a>
                </Link>
              </div>
              <p className="text-3xl sm:text-base">
                Houston Airport Limousine Taxi Service Website
              </p>
              <p className="text-lg sm:text-sm text-gray-400 mt-2">
                Website Design, Website Development
              </p>
            </div>

            <div className="card-container mt-12 sm:mt-0">
              <div className="sm:h-[23rem] rounded-xl shadow-xl overflow-hidden mb-6">
                <Link href="/">
                  <a target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/valleydez-full.jpg"
                      alt="Ecommerce Website Development"
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                      width={200}
                      height={418}
                      layout="responsive"
                      className="transition duration-2000 ease-in-out sm:hover:-translate-y-3/4"
                    />
                  </a>
                </Link>
              </div>
              <p className="text-3xl sm:text-base">
                E-commerce Website Development for a Fashion Boutique
              </p>
              <p className="text-lg sm:text-sm text-gray-400 mt-2">
                Website Design, Website Development
              </p>
            </div>
          </div>
          {/* <div className="text-center mt-4">
            <Button btnTitle={`View All Projects`} btnLink={`/`} />
          </div> */}
        </section>

        <section className="homePageServices mt-20 px-4 xl:px-0">
          <div className="container">
            <div className="w-full xl:flex gap-6">
              <div className="w-full xl:w-4/12">
                <h2 className="text-[40px] font-black leading-none mb-4">
                  This is how I can help you for a perfect website
                </h2>
                <div className="text-2xl text-gray-700 sm:text-base leading-snug space-y-8 mb-6">
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
                  <div className="text-center hidden xl:block">
                    <Button
                      btnTitle={`View All Services`}
                      btnLink={`/services`}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-8/12">
                <div className="flex flex-wrap gap-6">
                  <Card
                    cardTitle={"Website Review"}
                    cardDescription={
                      "I make sure your website should be converting visitors into customers before making any changes."
                    }
                  >
                    <MdRateReview color="white" size="36" />
                  </Card>
                  <Card
                    cardTitle={"Marketing Strategy"}
                    cardDescription={
                      "We will start by uncovering your internal brand and discuss your purpose, vision, mission and core values."
                    }
                  >
                    <FaChartLine color="white" size="36" />
                  </Card>
                </div>

                <div className="flex flex-wrap gap-6 mt-6">
                  <Card
                    cardTitle={"User Experience Design"}
                    cardDescription={
                      "I design your website to be as easy to use as possible while guiding users towards the end goal."
                    }
                  >
                    <IoGameController color="white" size="36" />
                  </Card>
                  <Card
                    cardTitle={"Custom Web Development"}
                    cardDescription={
                      "I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product."
                    }
                  >
                    <FaCode color="white" size="36" />
                  </Card>
                </div>

                <div className="flex flex-wrap gap-6 mt-6">
                  <Card
                    cardTitle={"SEO Services"}
                    cardDescription={
                      "I ensure your website is doing good enough to stay on top in Google's SERP by using best SEO strategy."
                    }
                  >
                    <FaSearch color="white" size="36" />
                  </Card>
                  <Card
                    cardTitle={"Ongoing Support"}
                    cardDescription={
                      "Your website is always growing. Whether you’re adding new features or making improvements I’m here to help."
                    }
                  >
                    <IoCall color="white" size="36" />
                  </Card>
                </div>
                {/* <div className="text-center xl:hidden">
                  <Button btnTitle={`View All Services`} btnLink={`services`} />{" "}
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="social-media-marketing mt-32 px-4 xl:px-0 py-20 bg-gradient-to-r from-pb-blue to-[#768CE2]">
          <div className="container">
            <div className="grid grid-cols-12 grid-gap-6">
              <div className="col-span-full xl:col-span-6">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                  Social Media Marketing
                </h2>
                <div className="text-white mt-6 space-y-4 text-2xl xl:text-base">
                  <p>
                    It is important to use platforms that are commonly used by
                    customers so that you can reach out to your target audience
                    at a more effective rate.
                  </p>

                  <p>
                    <strong>Social media marketing</strong> and advertising can
                    help you increase your return on investment, as the cost of
                    advertising on these social media forums is often less than
                    the return, giving you more revenue, this is because the
                    customers not only trust you with the product or service you
                    offer but get to know you as a business on a much deeper
                    level.
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
              <div className="col-span-6 relative hidden xl:block">
                <div className="absolute xl:-top-28 right-0">
                  <div className="xl:w-[42rem]">
                    <Image src={iPhone} alt="social media marketing" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials py-24 lg:py-44 mt-20 bg-gray-100">
          <div className="w-8/12 mx-auto">
            <h2 className="text-4xl font-bold text-center mb-20">
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
