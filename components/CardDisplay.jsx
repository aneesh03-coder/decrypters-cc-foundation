/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react'

const CardDisplay = ({Title, caseDescription, patientImage}) => {
 
    const router = useRouter()
    const id = 1;
  return (
    <div
      onClick={() => router.push(`/case-details/${id}`)}
      className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3 cursor-pointer"
    >
      <img
        className="object-cover rounded-t-lg  md:rounded-none md:rounded-l-lg"
        src={patientImage}
        alt="patient_image"
        style={{ width: '350px', height: '280px' }}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {Title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {caseDescription}
        </p>
      </div>
    </div>
  );
}

export default CardDisplay