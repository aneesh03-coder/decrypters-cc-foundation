import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { useSelector } from "react-redux";
import CardDisplay from "./CardDisplay";

function Feed() {
  const [info, setInfo] = useState([]);
  const allCampaigns = useSelector((state) => state.campaign?.allCampaigns[0]);

  useEffect(() => {
    setInfo(allCampaigns);
  }, [allCampaigns]);

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

      <div className="flex min-h-screen flex-col overflow-y-scroll scrollbar-hide">
        {info.map(({ id, patient_image, patient_description, Title }) => {
          return (
            <div key={id}>
              <CardDisplay
                patientImage={patient_image}
                Title={Title}
                patientDescription={patient_description}
                id={id}
              />
            </div>
          );
        })}

        {/* <CardDisplay
          Title={Title}
          caseDescription={Description}
          patientImage={patientImage}
        />
        <CardDisplay
          Title={Title}
          caseDescription={Description}
          patientImage={patientImage}
        />
        <CardDisplay
          Title={Title}
          caseDescription={Description}
          patientImage={patientImage}
        />
        <CardDisplay
          Title={Title}
          caseDescription={Description}
          patientImage={patientImage}
        /> */}
      </div>
    </div>
  );
}

export default Feed;
