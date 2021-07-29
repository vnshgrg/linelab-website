import Head from "next/head";
import { DeviceMobileIcon, MailIcon } from "@heroicons/react/outline";

export default function Home() {
    return (
        <div className="bg-gray-50 h-screen">
            <Head>
                <title>Paper-Cloud </title>
                <meta name="description" content="Paper Cloud" />
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <div>
                <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <img src="/logo.svg" className="w-36 sm:w-60 mx-auto" />
                    <h2 className="text-3xl font-bold tracking-tight text-cyan-700 sm:text-4xl mt-4">
                        <span className="block">papercloud.com.np</span>
                        <span className="block font-normal text-gray-600 text-xl tracking-normal">
                            is under construction
                        </span>
                    </h2>
                    <div className="mt-5">
                        <div className="text-center text-gray-500">
                            We are currently working on our brand new website.
                            <br className="hidden md:block" /> Meanwhile, if you
                            have any queries then you may call one of our
                            representatives:
                        </div>
                        <div className="mt-10 flex justify-center space-x-4">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                    href="tel:+9779803167701"
                                    className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
                                >
                                    <DeviceMobileIcon className="w-5 h-5 mr-2" />
                                    Call Abhishek
                                </a>
                            </div>
                            <div className="inline-flex rounded-md shadow">
                                <a
                                    href="tel:+9779845-211-882"
                                    className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
                                >
                                    <DeviceMobileIcon className="w-5 h-5 mr-2" />
                                    Call Bishnu
                                </a>
                            </div>
                        </div>
                        <div className="text-sm mt-10 text-center text-gray-500">
                            or email us at{" "}
                            <a
                                href="mailto:papercloudltd@gmail.com"
                                className="hover:text-gray-600"
                            >
                                papercloudltd@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
