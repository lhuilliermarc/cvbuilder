import { PersonalDetails } from "@/type";
import React from "react";

type Props = {
  personalDetails: PersonalDetails;
  setPersonalDetails: (pd: PersonalDetails) => void;
  setFile: (file: File | null) => void;
}

const PersonalDetailsForm: React.FC<Props> = ({ personalDetails, setPersonalDetails, setFile }) => {
    return (
        <div className="flex flex-col gap-4">

        </div>
    )
}

export default PersonalDetailsForm