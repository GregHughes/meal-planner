import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navbar";
import pizza from "../../public/images/pizza.jpg";
import desert from "../../public/images/desert.jpg";
import ramen from "../../public/images/ramen.jpg";
import yogurt from "../../public/images/yogurt.jpg";
import bread from "../../public/images/bread.jpg";
import biryani from "../../public/images/biryani.jpg";
import salad from "../../public/images/salad.jpg";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Enjoy the food you{" "}
                <span className="text-red-400 font-bold">love</span> more often
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                No more worrying about what you will eat for breakfast, lunch,
                or dinner! Easily create a custom meal plan that includes
                delicious recipes made with your favorite foods.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            src={pizza}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={bread}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={biryani}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={ramen}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={salad}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={desert}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={yogurt}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/planner"
                  className="inline-block rounded-md border border-transparent bg-gradient-to-r from-cyan-500 to-teal-400 py-3 px-8 text-center font-medium text-white transition-all ease-in duration-200 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
