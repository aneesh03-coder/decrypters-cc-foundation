/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react'

const CaseDetails = () => {
    const router = useRouter();
    const caseDetailsId = "ywyuuwuwourrrr"
    return (
      <div className="max-w-6xl mx-auto mt-4 mb-4 p-3">
        <div
          onClick={() => router.push('/')}
          className="flex flex-row items-center gap-[3px] cursor-pointer text-[#8f0d34] hover:text-[#530319]"
        >
          <div className="overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </div>
          <p className="text-lg font-semibold">Go back</p>
        </div>
         <div className="flex flex-col">
        <h3 className="text-2xl font-semibold mb-2">
          Case ID <span className="font-light">{caseDetailsId}</span>
        </h3>

        {/* Details  & Payments section */}
        <div className="flex flex-col items-center md:flex-row  gap-12">
          {/* Left Side */}
          <div>
            <h4 className="text-xl font-bold mb-3">
              Help for a Schizopherinic patient who is battling for her life.In
              one of the most toughest situations in ones life
            </h4>

            <img
              className="object-cover md:h-auto md:w-auto rounded-md mb-3"
              src="https://image.shutterstock.com/image-photo/mental-disease-patient-sitting-on-260nw-1294790095.jpg"
              alt=""
            />

            <div className="flex flex-row items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full bg-[#8f0d3450]">
                <svg
                  className="absolute w-12 h-12 text-[#8f0d34] -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="text-slate-500 text-lg font-semibold">
                Aneesh started this fundraiser
              </p>
            </div>
            <div className="flex flex-row items-center gap-3 border-b-2 border-t-2 py-2 mt-3 px-4">
              <p>Created at </p>
              <span>|</span>
              <span>
                Goal <span className="font-semibold">$</span>
                4000
              </span>
              <span>|</span>
              <span>
                Raised <span className="font-semibold">$</span>
                700
              </span>
            </div>

            <div className="mt-3 mb-14">
              <h3 className="text-lg font-semibold mb-3">
                Help for a Schizopherinic patient who is battling for her
                life.In one of the most toughest situations in ones life
              </h3>
              <div>
                Schizophrenia is a serious mental disorder in which people
                interpret reality abnormally. Schizophrenia may result in some
                combination of hallucinations, delusions, and extremely
                disordered thinking and behavior that impairs daily functioning,
                and can be disabling. People with schizophrenia require lifelong
                treatment. This is something we know, but only the person on the
                other side can uderstand.Its also a nightmare for all the
                relatives and we are need for some urgent help for medicines
                which are super expensive
              </div>
            </div>

            <div className="border-b-2 border-t-2 py-2 mt-3">
              <h3 className="text-lg font-semibold mb-3">Patient Details</h3>
              <div className="px-4">
                <h5 className="text-lg font-semibold mb-3">
                  Name: <span className="font-light">James Bangi </span>
                </h5>
                <h5 className="text-lg font-semibold mb-3">
                  Age: <span className="font-light">26</span>
                </h5>
                <h5 className="text-lg font-semibold mb-3">
                  Gender: <span className="font-light">Male </span>
                </h5>
                <h5 className="text-lg font-semibold mb-3">
                  Address: <span className="font-light">Malawi</span>
                </h5>
              </div>
            </div>

            <div className="border-b-2 py-2 mt-3">
              <h3 className="text-lg font-semibold mb-3">Orginizer</h3>
              <div className="px-4 flex flex-row gap-4">
                <div className="relative w-10 h-10 overflow-hidden rounded-full bg-[#8f0d3450]">
                  <svg
                    className="absolute w-12 h-12 text-[#8f0d34] -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-3">
                    Name: <span className="font-light">William</span>
                  </h5>
                  <h5 className="text-lg font-semibold mb-3">
                    Email: <span className="font-light">marty@papafam.com</span>
                  </h5>
                  <h5 className="text-lg font-semibold mb-3">
                    Phone: <span className="font-light">567789800098</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white shadow-lg rounded-md p-4 w-full">
            <h5 className="text-lg font-semibold mb-3">
              {' '}
              <span className="font-light">
                $700 USD raised of $4000{' '}
              </span>
            </h5>
            <form className="flex flex-col space-y-2 py-2">
              <label>Name</label>
              <input
                type="text"
                required
                placeholder="Name"
                className="bg-gray-50 rounded-lg p-3 outline-none"
              />
              <label>Price</label>
              <input
                required
                placeholder="Price"
                className="bg-gray-50 rounded-lg p-3 outline-none"
              />
              <p className="mb-3">10 donations</p>
              <button
                className="btn bg-[#8f0d34] hover:bg-[#530319] p-3 mb-3 w-full rounded-md text-white font-bold"
                
              >
                Donate
              </button>
            </form>
            <div className="flex flex-row items-center gap-3 mb-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full bg-[#8f0d3450]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-6 h-6 text-[#8f0d34] left-2 top-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p className="text-slate-500 text-lg font-semibold">
                  Be the first to donate
              </p>
            </div>
            
              <div
                className="flex flex-row items-center gap-3 border-t-2 py-3"
              >
                <div className="relative w-10 h-10 overflow-hidden rounded-full bg-[#8f0d3450]">
                  <svg
                    className="absolute w-12 h-12 text-[#8f0d34] -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-lg font-semibold">
                    Marty
                  </p>
                  <div className="text-slate-500 text-sm font-semibold flex items-center">
                    Donated $200
                      <div className="text-xs ml-1"> USD for this cause</div>
                  
                  </div>
                </div>
              </div>
           
            <div className="flex justify-center xs text-gray-400">
              49
              &nbsp;
              <div> more donations made ... </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default CaseDetails;
