import React, { useState } from 'react';
import { IApplicants } from '@/routes/Home';
import Avatar from './Avatar';
import Button from './Button';

interface ApplicantsPopupProps {
  applicants: IApplicants[];
}

const ApplicantsPopup = ({ applicants }: ApplicantsPopupProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex flex-col items-center"> {/* Centers  button and the popup */}
      <button onClick={togglePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{/* makes applicant button blue and text bold and white */}
        Applicants
      </button>
       {/* if applicant clicked shows this */}
      {isPopupOpen && ( 
        <div className='bg-red-500 w-[500px] rounded-lg my-4 mx-auto'> {/* mx-auto for horizontal centering */}
          <div className="bg-red-500 text-white rounded-t-lg p-4 flex justify-center items-center">{/*gives red background to whole popup*/}
            <h1 className="text-xl font-bold">Applicants</h1>{/*makes Applicant at top bold and big */}
          </div>
          <div className="overflow-auto max-h-[500px]"> {/*makes it scrollable */}
            {applicants.map(applicant => (
              <div key={applicant.id} className="bg-blue-200 m-2 p-4 rounded shadow flex flex-col items-center"> {/* creates rectangle for each applicant */}
                <img src={applicant.imageUrl}  className="w-20 h-20 rounded-full object-cover mb-4" />{/*gives image of applicant */}
                {applicant.firstName}{" "}{applicant.lastName}{/*gives name of applicant*/}
                <br />{applicant.role}{/* /n and gives applicant role*/}
                <div className="mt-2 flex justify-center space-x-2">
                  <Button variant='secondary'>View Profile</Button>
                  <Button variant='primary'>Accept</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantsPopup;
