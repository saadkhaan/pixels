import React from "react"
import Head from "next/head"
import Button from "../components/Button"
import Card from "../components/Card"

// Icons
import { MdRateReview } from "react-icons/md"
import { FaChartLine } from "react-icons/fa"
import { IoGameController } from "react-icons/io5"
import { FaCode } from "react-icons/fa"
import { TiSortAlphabetically } from "react-icons/ti";
import { IoCall } from "react-icons/io5"

export default function services() {
  return (
    <>
      <Head>
        <title>Web Design Services | Freelance SEO Services</title>
        <meta
          name="description"
          content="Looking for website design services? With decades of experience, Pixelsbit provides customized web design services to help you reach and convert more potential customers."
        />
        <link rel="canonical" href="https://pixelsbit.com/services" />
      </Head>
      <div className="container px-4 pt-32 sm:py-0 sm:pt-48 sm:pb-24">
        <div className="mb-12 w-8/12">
          <h1 className="mb-6 text-4xl font-bold sm:text-[5.5rem] sm:leading-none">
            <span className="to bg-[#f9bc2c] bg-gradient-to-t from-[#f74c06] bg-clip-text text-transparent">
              Web Design and
              <br />
              Online Marketing Services
            </span>
          </h1>
          <p className="text-gray-600">
            Having a great website is not the only solution to take your
            business online. To compete with billions of websites on the
            internet, you need to market it as well. And to market your
            business, I have developed some of the best technical SEO and Social
            Media Marketing strategies that not only rank your business website
            on Google but bring it in front of millions of customers looking for
            your services or products.
          </p>
        </div>
        <div className="flex h-full flex-wrap gap-y-6 lg:items-stretch">
          <div className="text-left sm:w-6/12 sm:px-3 lg:w-4/12">
            <Card
              cardTitle={"Brand Strategy"}
              cardDescription={
                "Builds the foundation of your brand and website based on your unique values, goals, and expertise in your field."
              }
            >
              <MdRateReview color="white" size="36" />
            </Card>
          </div>
          <div className="text-left sm:w-6/12 sm:px-3 lg:w-4/12">
            <Card
              cardTitle={"Visibility Strategy"}
              cardDescription={
                "Creates a marketing strategy for your business to build your expert profile and solidify your specialties and the services you provide."
              }
            >
              <FaChartLine color="white" size="36" />
            </Card>
          </div>
          <div className="text-left sm:w-6/12 sm:px-3 lg:w-4/12">
            <Card
              cardTitle={"Brand Visuals"}
              cardDescription={
                "This is when I and you dive into the visuals of your brand: logo design, primary color palette, font selection, textures, and photography - all to support the brand identity I'll be creating for you. This work will make your brand visuals look professional, recognizable, and unique to you and your business."
              }
            >
              <IoGameController color="white" size="36" />
            </Card>
          </div>
          <div className="text-left sm:w-6/12 sm:px-3 lg:w-4/12">
            <Card
              cardTitle={"Website Design & Development"}
              cardDescription={
                "Combines your strategy, messaging, and brand visuals into a website that supports your business goals, takes you to the next level as an expert and pro in your field, and aligns and attracts more passengers."
              }
            >
              <FaCode color="white" size="36" />
            </Card>
          </div>
          <div className="text-left sm:w-6/12 sm:px-3 lg:w-4/12">
            <Card
              cardTitle={"Professional Copywriting"}
              cardDescription={
                "I work with copy specialist to help ensure that all the words on your website sound like you - in a way that customers understand!"
              }
            >
              <TiSortAlphabetically color="white" size="36" />
            </Card>
          </div>
          <div className="text-left sm:w-6/12 sm:px-3 lg:w-4/12">
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
        <div className="hidden text-center sm:block">
          <Button btnTitle={`Hire Me`} btnLink={`/contact`} />
        </div>
      </div>
    </>
  );
}
