import React from 'react'
import './Contact.css'


function Contact() {
  return (
    <>
    <section>
  <div id='head' class="py-2 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-2 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-white dark:text-white sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-1 text-sm font-medium text-white dark:text-white">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-teal-800 dark:placeholder-white dark:text-white dark:shadow-sm-light" placeholder="Enter your email" required></input>
          </div>

          <div>
              <label for="subject" class="block mb-1 text-sm font-medium text-white dark:text-white">Subject</label>
              <input type="text" id="subject" class="shadow-sm bg-gray-50 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-teal-800 dark:placeholder-white dark:text-white dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
          </div>
          
          <div class="sm:col-span-2">
              <label for="message" class="block mb-1 text-sm font-medium text-white dark:text-white">Your message</label>
              <textarea id="message" rows="3" class="shadow-sm bg-gray-50 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-teal-800 dark:placeholder-white dark:text-white dark:shadow-sm-light" placeholder="Leave a comment..."></textarea>
          </div>
          <div className='mb-2'>

          <button type="submit" class="px-5 text-sm font-medium text-center bg-teal-800 mx-1 py-2 text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:outline-none focus:ring-priwhite dark:hover:bg-teal-700">Send message</button>
          </div>
      </form>
  </div>
</section>
    </>
  )
}

export default Contact