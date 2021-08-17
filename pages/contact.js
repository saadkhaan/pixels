import React from "react"
import Head from "next/head"

export default function contact() {
  return (
    <>
      <Head>
        <title>
          Contact Freelance Front-end Developer | Online Marketing Expert
        </title>
        <meta
          name="description"
          content="If you are in need to hire a freelance web designer, then let's connect now."
        />
      </Head>
      <div className="container px-4 py-32 sm:py-0 sm:pt-48 sm:pb-24">
        <h1 className="text-center font-bold text-4xl mb-12">
          Contact/Hire Me
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <form
              id="fs-frm"
              name="services-contact-form"
              acceptCharset="utf-8"
              action="https://formspree.io/f/mnqlglqj"
              method="post"
            >
              <fieldset id="fs-frm-inputs">
                <label htmlFor="full-name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  placeholder="Your Name"
                  required=""
                  className="px-3 py-3 mb-6 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
                <label htmlFor="email-address">Email Address</label>
                <input
                  type="email"
                  name="_replyto"
                  id="email-address"
                  placeholder="email@domain.tld"
                  required=""
                  className="px-3 py-3 mb-6 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                />
                <label htmlFor="services">Services</label>
                <select
                  name="services"
                  id="services"
                  required=""
                  defaultValue="Select"
                  className="px-3 py-3 mb-6 block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                >
                  <option value="Website Design">Website Design</option>
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="Front-end Development">
                    Front-end Development
                  </option>
                  <option value="Social Media Marketing">
                    Social Media Marketing
                  </option>
                  <option value="WordPress Website Development">
                    WordPress Website Development
                  </option>
                  <option value="SEO">SEO</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                  required=""
                  className="px-3 py-3 mb-6 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                ></textarea>
                <input
                  type="hidden"
                  name="_subject"
                  id="email-subject"
                  value="Service Contact Form Submission"
                />
              </fieldset>
              <input
                type="submit"
                value="Send Message"
                className="px-6 py-4 rounded-md hover:bg-pb-blue hover:text-white hover:cursor-pointer"
              />
            </form>
          </div>
          <div>
            <p>
              With more than 8 years of experience in building user
              experience-centric websites, I can create a website that fully
              meets your needs, ensuring that it attracts your customers and
              makes your work easier. Just email me and we will schedule a
              meeting to help you improve your business.
              <a
                href="mailto:saad@pixelsbit.com"
                className="underline text-pb-blue block"
              >
                saad@pixelsbit.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
