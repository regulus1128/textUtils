import React from 'react'
import './About.css'
function About() {
  return (
    <>
    
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">About Us</h1>
                    <p className="font-normal  leading-7 text-white">Welcome to TextUtils, your ultimate destination for all things text manipulation! We understand the power and importance of text in communication, creativity, and problem-solving. Whether you're a writer, student, programmer, or simply someone who works with text on a daily basis, TextUtils is here to streamline your text-related tasks and empower your workflow.</p><br></br>

                <p className="font-normal leading-7 text-white">At TextUtils, we pride ourselves on providing a user-friendly and efficient platform that caters to a wide range of text manipulation needs. From converting text to different cases (uppercase, lowercase, title case) to reversing strings, removing extra spaces, generating Lorem Ipsum placeholder text, and beyond, TextUtils offers a comprehensive suite of tools designed to simplify and enhance your text editing experience.</p>
                </div>

                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    {/* <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" /> */}
                    <br></br>
                    <p className="font-normal leading-7 text-white">
                    Our intuitive interface allows you to effortlessly input your text, select the desired operation, and instantly see the results. Whether you're cleaning up messy data, formatting text for publication, or experimenting with linguistic algorithms, TextUtils empowers you to achieve your goals with ease.</p>
                    <br></br>

                  <p className="font-normal leading-7 text-white">TextUtils is not just a tool; it's a community-driven platform committed to continuous improvement and innovation. We listen to your feedback, incorporate your suggestions, and strive to evolve our offerings to meet the ever-changing needs of our users.

                  So whether you're a seasoned professional or just getting started with text manipulation, join us at TextUtils and unlock the full potential of your text! Let's transform words into actions together.
                  </p>
                </div>
            </div>

            
        </div>
    </>
  )
}

export default About