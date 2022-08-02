import React from 'react';
import { BiRefresh } from "react-icons/bi";
import CardDisplay from './CardDisplay';

function Feed() {
        const Title =
          'Priya is suffering from Leukemia and requires 2500000 for her operation.';
          const Description =
            'David Madagascar is suffering from Leukemia and requires 2500000 for her operation. a malignant progressive disease in which the bone marrow and other blood-forming organs produce increased numbers of immature or abnormal leucocytes. These suppress the production of normal blood cells, leading to anaemia and other symptoms. She immediately requires a bone marrow transplantation. Please help us to save her.';
            const patientImage =
              'https://news.wisc.edu/content/uploads/2020/04/thumbnail_IMG_0248-e1588188039307-1024x755.jpg';
  return (
    <div className="max-w-6xl border-2 p-3">
    <div className="flex items-center justify-between mb-5">
    <h1 className="p-5 pb-0 text-xl font-bold">
          Fundraisers in your communnity
        </h1>

        <BiRefresh
          onClick={null}
          className="w-8 h-8 mt-5 mr-5 cursor-pointer text-red-500 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />

    </div>
    {/* campaigns components */}

    <div className="flex h-screen flex-col overflow-y-scroll scrollbar-hide">

    <CardDisplay  Title={Title} caseDescription={Description} patientImage={patientImage}/>
    <CardDisplay  Title={Title} caseDescription={Description} patientImage={patientImage}/>
    <CardDisplay  Title={Title} caseDescription={Description} patientImage={patientImage}/>
    <CardDisplay  Title={Title} caseDescription={Description} patientImage={patientImage}/>

    </div>


    </div>
  )
}

export default Feed
