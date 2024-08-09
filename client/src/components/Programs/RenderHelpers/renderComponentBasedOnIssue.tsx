// renderHelpers.tsx


import AnxietyComponent from './AnxietyComponent';
import DepressionComponent from './DepressionComponent';
import AbuseComponent from './AbuseComponent';
import BipolarComponent from './BipolarComponent';
import CrisisComponent from './CrisisComponent';
import FamilyComponent from './FamilyComponent';
import GroupComponent from './GroupComponent';
import PtsdComponent from './PtsdComponent';
import SchizoComponent from './SchizoComponent';
import StressComponent from './StressComponent';


export const renderComponentBasedOnIssue = (selectedIssue: string) => {
    switch (selectedIssue) {
        case "Anxiety":
            return <AnxietyComponent />;
        case "Depression":
            return <DepressionComponent />;
        case "Abuse Treatment":
            return <AbuseComponent />;
        case "Bipolar Disorder":
            return <BipolarComponent />;
        case "Crisis Intervention":
            return <CrisisComponent />;
        case "Family Counseling":
            return <FamilyComponent />;
        case "Group Therapy":
            return <GroupComponent />;
        case "PTSD":
            return <PtsdComponent />;
        case "Schizophrenia":
            return <SchizoComponent />;
        case "Stress":
            return <StressComponent />;
        default:
            return <div>Select an issue to see more details.</div>;
    }
};
