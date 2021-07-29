import Head from "next/head";
import { DeviceMobileIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="bg-primary h-screen text-secondary">
      <Head>
        <title>Line Lab Architects</title>
        <meta name="description" content="Paper Cloud" />
        <link rel="shortcut icon" href="/ll-favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/ll-favicon.ico" type="image/x-icon" />
      </Head>
      <div>
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <img src="/ll-logo.svg" className="w-2/3 sm:w-72 mx-auto" />
          {/* <span className="block">linelabarchitects.com</span> */}
          <h2 className="mt-4 font-light text-secondary text-sm tracking-normal">
            Building Design ・ Interior Design ・ Construction
          </h2>
          <div className="mt-10">
            <div className="text-center text-gray-100">
              Full website coming soon!
            </div>
            <div className="mt-10 flex-row sm:flex justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex sm:inline-flex rounded-md shadow">
                <a
                  href="tel:+9779802099176"
                  className="inline-flex w-full items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-yellow-200"
                >
                  <DeviceMobileIcon className="w-5 h-5 mr-2" />
                  Call us for consultation
                </a>
              </div>
              <div className="flex sm:flex-none sm:inline-flex rounded-md shadow">
                <a
                  href="https://www.instagram.com/linelab_architecture"
                  className="inline-flex w-full items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-yellow-200"
                >
                  <img src="/instagram.svg" className="w-5 h-5 mr-2" />
                  Check our instagram
                </a>
              </div>
            </div>
            <div className="text-sm mt-10 text-center text-">
              or email us at{" "}
              <a href="mailto:linelabnp@gmail.com" className="hover:text-white">
                linelabnp@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
