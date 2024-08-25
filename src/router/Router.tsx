import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainBody from "../components/MainBody";
import App from "../App";
import PortfolioDetails from "../components/PortfolioDetails";
import { WebGis } from "../components/portfolio/WebGis";
import { TraingAndCapacity } from "../components/portfolio/TraingAndCapacity";
import { SurveyingAndGis } from "../components/portfolio/SurveyingAndGis";
import { DisasterRiskResilience } from "../components/portfolio/DisasterRiskResilience";
import { SoftwareApplicationDevelopment } from "../components/portfolio/SoftwareApplicationDevelopment";
import { InnovationInLandReformAndManagement } from "../components/portfolio/InnovationInLandReformAndManagement";
import { OpenDataIniatiatives } from "../components/portfolio/OpenDataIniatiatives";
import { Egovernance } from "../components/portfolio/E-Governance";
import { FrontierTechnologies } from "../components/portfolio/FrontierTechnologies";
import { MapAndForm } from "../components/MapAndForm";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element:<PortfolioDetails/>,
      },
      {
        path: "webgisanddatavisualization",
        element:<WebGis/>,
      },
      {
        path: "training&capacitybuilding",
        element:<TraingAndCapacity/>,
      },
      {
        path: "surveyingandgismapping",
        element:<SurveyingAndGis/>,
      },
      {
        path: "disasterriskresilience",
        element:<DisasterRiskResilience/>,
      },
      {
        path: "software&applicationdevelopment",
        element:<SoftwareApplicationDevelopment/>,
      },
      {
        path: "innovationinlandreformandmanagement",
        element:<InnovationInLandReformAndManagement/>,
      },
      {
        path: "opendatainitiatives",
        element:<OpenDataIniatiatives/>,
      },
      {
        path: "e-governance",
        element:<Egovernance/>,
      },
      {
        path: "frontiertechnologies",
        element:<FrontierTechnologies/>,
      },
      {
        path: "map",
        element:<MapAndForm/>,
      },
    ],
  },
]);
