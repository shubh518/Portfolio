"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Cryptography With Go ",
    desc: "Cryptography Fundamentals: Utilized strong encryption algorithms to ensure data security.Go Programming: Leveraged Go’s capabilities for file I/O ,user interaction, and cryptographic libraries. Secure Development Practices: Emphasized the importance of key management and user experience during encryption. ",
    img: "https://earthly.dev/blog/assets/images/cryptography-encryption-in-go/hashing.jpg",
    link: "https://github.com/shubh518/Cryptography-With-Go",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Go-Gpt Terminal ",
    desc: " Built a chatbot using Golang and the GPT-3.5API key.  Implemented conversation logic by managing back-and-forth communication betweenthe user and the chatbot. Iterated and experimented with different configurations to enhance the chatbot’s performance",
    img: "https://repository-images.githubusercontent.com/622435619/ceb1de1f-cc39-4991-a727-6462dfd9e0ac",
    link: "https://github.com/shubh518/chat_gpt_with_go",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Ashen Ascend-Ashes to Glory",
    desc: "Initiated the development of an adaptive AI adversary system for a video game, Integrated and optimised DQN with Unreal Engine 5 in base C++ 17 Integrated player combat animations, AI combat animations, player health and stamina system, AI health system, precise frame by frame hitbox collision detection, damage calculation, precise player position tracking, UI, Main Menu Implemented using C++ 17, Unreal Engine 5, Behaviour Trees, UMG, Blueprintsonsectetur adipisicing elit. ",
    img: "https://e0.pxfuel.com/wallpapers/363/772/desktop-wallpaper-dark-souls-live-for-android-dark-souls-item-descriptions-dark-souls-bonfire.jpg",
    link: "https://ashen-ascend.jimdosite.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Crud Api",
    desc: "Create this APIs that utilize HTTP methods to handle basic CRUD operations. Utilized HTTP methods (POST, GET, PUT, DELETE) for creating, retrieving, updating, and deleting tasks . Highlighted proficiency in Golang libraries like net/http and encoding/json for web developement. ",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*DI5wwLcQV-b3erfLIbvfFQ.jpeg",
    link: "https://github.com/shubh518/Crud-Api",
  },
  {
    id: 5,
    color: "from-red-300 to-purple-300",
    title: "Discord Bot",
    desc: "I built a Discord bot using Golang that allows users to chat with a virtual bot. Users can interact with the bot using commands. The bot utilizes the DiscordGo library to connect to the Discord server and respond to messages." ,
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/8487223/og_image/optimized/how-to-make-a-discord-bot-7c0fe302b98b05b145682344b3a4ec59.png",
    link: "https://github.com/shubh518/discord_bot",
  },
  {
    id: 6,
    color: "from-purple-300 to-blue-300",
    title: "GO-Echo",
    desc: "Built a RESTful API using the Echo framework in Golang or demonstrated understanding of building RESTful APIs with Echo.Implemented functionalities like routing, handling requests, and potentially responses or gained experience with routing and request handling in Echo." ,
    img: "https://external-preview.redd.it/Bgjm0nyyypxEcg6giDFBgynRTqe-vgLMBsF0wTgWLzQ.jpg?width=1080&crop=smart&auto=webp&s=c09b19df3773ee7ba6ef57a4cdb011ff9b287c07",
    link: "https://github.com/shubh518/go_echo",
  },
  {
    id: 7,
    color: "from-blue-300 to-red-300",
    title: "Google Translator ",
    desc: "CLI based Google Translator in Go Language. Used Cloud Translation Go API by google to perform translations using CLI." ,
    img: "https://www.kosli.com/images/blog/kosli-blog-how-to-configure-cli-tools-viper-golang_hu5754498c5b3c0adb524116591b288bf3_216834_1366x0_resize_q90_h2_box.webp",
    link: "https://github.com/shubh518/Google-Translator-in-Go",
  },
  {
    id: 8,
    color: "from-red-300 to-purple-300",
    title: "Portfolio website",
    desc: "CLI based Google Translator in Go LanguageDeveloped an interactive and visually-appealing portfolio website using React Next.js, Framer Motion, and Tailwind CSS.. Used Cloud Translation Go API by google to perform translations using CLI." ,
    img: "https://portfolio-shubham-tiwaris-projects-f7999503.vercel.app/_next/image?url=%2Fme.png&w=1920&q=75",
    link: "https://portfolio-shubham-tiwaris-projects-f7999503.vercel.app/",
  },
  {
    id: 9,
    color: "from-red-300 to-purple-300",
    title: "Portfolio website",
    desc: "CLI based Google Translator in Go LanguageDeveloped an interactive and visually-appealing portfolio website using React Next.js, Framer Motion, and Tailwind CSS.. Used Cloud Translation Go API by google to perform translations using CLI." ,
    img: "https://portfolio-shubham-tiwaris-projects-f7999503.vercel.app/_next/image?url=%2Fme.png&w=1920&q=75",
    link: "https://portfolio-shubham-tiwaris-projects-f7999503.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="2"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="2"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="2"
              ></path>
            </motion.svg>
        </div>
        
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-5xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-3 text-sm md:p-3 md:text-md lg:p-3 lg:text-lg bg-white text-black-600 font-semibold m-1 rounded-full">See More</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-lg">
                Software Craftsman And Architect
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
