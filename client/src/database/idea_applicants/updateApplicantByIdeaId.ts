import { Enums } from "@/lib/supabase";
import supabase from "@/lib/supabaseClient";
import { error} from "console";
import { useState } from "react";

enum RoleType {
  frontend = 0,
  backend = 1,
  fullstack = 2,
  ui_ux = 3
}

/* const switchApplicationRole = () => {
  const [currentRole, setRole] = useState(RoleType.fullstack)
  switch (currentRole) {
    case RoleType.frontend:
      return 'Frontend'
    case RoleType.backend:
      return 'Backend'
    case RoleType.fullstack:
      return 'Full-Stack'
    case RoleType.ui_ux:
      return 'UI/UX'      
  }
} */


//Potential interface interface
/* interface IIdeaApplicants {
  idea_id: number,
  profile_id: number,
  application_role: RoleType
} */



const updateIdeaApplicants = async (idea_id: number, newProfileId: number, newApplicationRole: number) => {
    const { data: ideas, error } = await supabase
      .from('idea_applicants')
      .select("*")
      .update(
        {
          profile_id: newProfileId,
          application_role: newApplicationRole
        }
      )
      .eq("idea_id", idea_id);
  
    if (ideas) {
      return ideas;
    } else {
      console.error(error);
      return null;
    }
  };

export default updateIdeaApplicants;