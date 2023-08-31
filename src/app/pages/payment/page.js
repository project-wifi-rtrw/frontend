import React from "react";
import CardPayment from "@/app/components/CardPayment";

function Payment() {
  return (
    <>
      <>
        <div className="h-screen w-screen flex flex-col relative">
          <div className="min-h-[20vh] w-screen bg-[#0A1128] p-5">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">Pembayaran</h1>
            </div>
          </div>
          <CardPayment />
          <div className="w-screen h-full z-0 bg-white pt-28 px-5 pb-8">
            {/* METODE PEMBAYARAN */}

            {/* <div className="wrapper">
              <div className="collapse collapse-arrow text-black">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">E- Wallet</div>
                <div className="collapse-content">
                  <label className="label cursor-pointer">
                    <span className="label-text">DANA</span>
                    <input type="radio" name="radio-10" className="radio border-black border-4 checked:bg-white" checked />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">ShopeePay</span>
                    <input type="radio" name="radio-10" className="radio border-black border-4 checked:bg-white" checked />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Gopay</span>
                    <input type="radio" name="radio-10" className="radio border-black border-4 checked:bg-white" checked />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">OVO</span>
                    <input type="radio" name="radio-10" className="radio border-black border-4 checked:bg-white" checked />
                  </label>
                </div>
              </div>
              <div className="collapse collapse-arrow text-black">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Transfer Bank</div>
                <div className="collapse-content">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">BCA</span>
                      <input type="radio" name="radio-10" className="radio border-black border-4 checked:bg-white" checked />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">BRI</span>
                      <input type="radio" name="radio-10" className="radio border-black border-4 checked:bg-white" checked />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">Mandiri</span>
                      <input type="radio" name="radio-10" className="radio border-black border-4 checked:bg-white" checked />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text">{"Bank Syariah Indonesia (BSI)"}</span>
                      <input type="radio" name="radio-10" className="radio border-black border-4 checked:bg-white" checked />
                    </label>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow text-black">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Alfamart / Indomart</div>
                <div className="collapse-content">
                  <label className="label cursor-pointer">
                    <span className="label-text">Indomart</span>
                    <input type="radio" name="radio-10" className="radio border-black border-4 checked:bg-white" checked />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Alfamart</span>
                    <input type="radio" name="radio-10" className="radio border-black border-4 checked:bg-white" checked />
                  </label>
                </div>
              </div>
            </div> */}

            {/* END OF METHODE PAYMENT */}

            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>What is Flowbite?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                      get started
                    </a>{" "}
                    and start developing websites even faster with components on top of Tailwind CSS.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>Is there a Figma file available?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out the{" "}
                    <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">
                      Figma design system
                    </a>{" "}
                    based on the utility classes from Tailwind CSS and components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3"
                >
                  <span>What are the differences between Flowbite and Tailwind UI?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                  <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* END OF DROPDOWN */}
          </div>
        </div>
      </>
    </>
  );
}

export default Payment;
