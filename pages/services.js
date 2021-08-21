import React from "react"
import Head from "next/head"
import Button from "../components/Button"
import Card from "../components/Card"

// Icons
import { MdRateReview } from "react-icons/md"
import { FaChartLine } from "react-icons/fa"
import { IoGameController } from "react-icons/io5"
import { FaCode } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
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
        <link rel="canonical" href="https://www.pixelsbit.com/services" />
      </Head>
      <div className="container px-4 py-32 sm:py-0 sm:pt-48 sm:pb-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-black sm:leading-tight text-gray-900 mb-6">
          Hire a Freelancer for Website Design Services and Online Marketing
        </h1>
        <div className="flex flex-wrap lg:items-stretch h-full gap-y-6">
          <div className="sm:w-6/12 lg:w-4/12 px-3 text-left">
            <Card
              cardTitle={"Website Design"}
              cardDescription={
                "I make sure your website should be converting visitors into customers before making any changes."
              }
            >
              <MdRateReview color="white" size="36" />
            </Card>
          </div>
          <div className="sm:w-6/12 lg:w-4/12 px-3 text-left">
            <Card
              cardTitle={"Web Development"}
              cardDescription={
                "We will start by uncovering your internal brand and discuss your purpose, vision, mission and core values."
              }
            >
              <FaChartLine color="white" size="36" />
            </Card>
          </div>
          <div className="sm:w-6/12 lg:w-4/12 px-3 text-left">
            <Card
              cardTitle={"User Experience Design"}
              cardDescription={
                "I design your website to be as easy to use as possible while guiding users towards the end goal."
              }
            >
              <IoGameController color="white" size="36" />
            </Card>
          </div>
          <div className="sm:w-6/12 lg:w-4/12 px-3 text-left">
            <Card
              cardTitle={"Custom Development"}
              cardDescription={
                "I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product."
              }
            >
              <FaCode color="white" size="36" />
            </Card>
          </div>
          <div className="sm:w-6/12 lg:w-4/12 px-3 text-left">
            <Card
              cardTitle={"SEO Services"}
              cardDescription={
                "I ensure your website is doing good enough to stay on top in Google's SERP by using best technical seo approaches."
              }
            >
              <FaSearch color="white" size="36" />
            </Card>
          </div>
          <div className="sm:w-6/12 lg:w-4/12 px-3 text-left">
            <Card
              cardTitle={"Social Media Marketing"}
              cardDescription={
                "Your website is always growing. Whether you’re adding new features or making improvements I’m here to help."
              }
            >
              <IoCall color="white" size="36" />
            </Card>
          </div>
        </div>
        <Button btnTitle={`Hire Me`} btnLink={`/contact`} />
      </div>
    </>
  );
}
