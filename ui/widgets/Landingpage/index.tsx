// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

//importing relevant module
import React from "react";
import { Typography } from "../../atoms/Typography";
import {
    Frame,
    withSounds,
    withStyles,
  } from "arwes";


// import stylings
import { LandingpageContainer, LandingpageComponent1, StartButton, LandingpageComponent2} from "./index.styled";

const Landingpage = ():JSX.Element => {
    return(
       <LandingpageContainer>
           <LandingpageComponent1>
               <Typography variant="h1">
                creating an incredible <span>gaming Experience </span>on the polygon chain
               </Typography>
               <StartButton>
                   Enter
               </StartButton>
           </LandingpageComponent1>
           <LandingpageComponent2>
               <img src="/assets/metaverse.png" alt="metaverse" />
           </LandingpageComponent2>
       </LandingpageContainer>
    )
}


export default Landingpage;