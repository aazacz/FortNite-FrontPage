import { useState } from 'react'
import './App.css'
import { IoMdClose } from "react-icons/io";
import fortnitewallpaper from "./assets/fortnite-pictures-b5kfcchwazwiz3cs_1.png"
import image1 from "./assets/Mask group.png"
import image2 from "./assets/Mask group-1.png"
import image3 from "./assets/Mask group-2.png"
function App() {
  const [count, setCount] = useState(0)

  const CardData = [
    {
      data: "Explore large, destructible environments where no two games are ever the same.",
      image: image1
    },
    {
      data: "Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale",
      image: image2
    },
    {
      data: "Discover even more ways to play across thousands of creator-made game genres",
      image: image3
    }
  ]


  const card2 = [
    { p1: "5M", p2: "Daily User Engagements" },
    { p1: "$500K", p2: "Revenue Surge for an Platform " },
    { p1: "10X", p2: "ROAS on all our marketing campaigns" }


  ]

  return (
    <>
      <div className='w-full h-[2000px] bg-black px-[50px] pt-[20px] overflow-x-hidden flex flex-col items-center'>

        <div className='w-full flex flex-row items-end justify-end ' >
          <IoMdClose className='text-white hover:rotate-180 transition-all duration-500' />
        </div>

        <h1 className='text-white  text-2xl font-thin w-[560px] text-center mb-6'>Epic Games : An American video game and software Developer and publisher based in Cary, North Carolina.</h1>
        <img src={fortnitewallpaper} width={1000} alt="image" />

        <h1 className='text-white pt-5 text-sm font-thin w-[800px] text-center mb-6'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</h1>

        <button className='bg-white w-[230px] h-8 ' > Visit Website</button>

        <div className='flex w-[800px] h-auto pt-[100px]'>


          {CardData.map((value, index) => {
            return (
              <div key={index} className='flex flex-col items-center'>
                <div className='w-[230px] h-[250px] '>  <img src={value.image} alt="alternate image" />  </div>

                <h3 className='text-white text-[12px] w-[85%] text-center pt-5'>{value.data}</h3>
              </div>
            );
          })}
        </div>

        <div className='flex flex-col items-center mt-[50px] '>

          <h1 className='text-white font-thin text-2xl'> Our Contribution</h1>
          <h5 className='text-white text-sm mt-4  px-[250px] text-center'> Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</h5>
        </div>



        <div className='flex gap-[90px] mt-9'>
          {card2.map((value, index) => {
            return (
              <div>
                <p className='text-white text-[45px] font-extralight  '>{value.p1}</p>
                <p className='text-white text-xs w-[100px]'>{value.p2}
                </p>
              </div>

            )
          })}
        </div>


        <div className='flex flex-col items-center mt-[250px]' >
          <h1 className='text-white text-2xl'>Interested in delving deeper into the project?</h1>
          <h4 className='text-white text-[12px] mt-4  mb-5 w-[450px] text-center'>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span className='font-medium'>hello@abc.com</span>  or give us a call at <span className='font-medium'>+91 480 20802730.</span></h4>

          <div className='flex gap-5'>

            <button className='text-white border w-[230px] h-8 ' > Ring us on Skype</button>
            <button className='bg-white w-[230px] h-8 ' >Contact Us</button>

          </div>
        </div>


        <div className='w-full flex flex-1 flex-col justify-end items-center'>
          <h4 className='text-white text-xs'>&copy; 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</h4>
        </div>



      </div>
    </>
  )
}

export default App
