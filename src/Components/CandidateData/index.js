import React from 'react';
import { PersonalInformation } from '../PersonalInformation';
import { EducationQualification } from '../EducationQualification';
import { EmploymentHistory } from '../EmployementHistory';
import { Section } from '../../_shared/Section';

export const CandidateData = () => {
    const sections = [
        {
            name: 'Personal Information',
            component: <PersonalInformation/>
        },        
        {
            name: 'Employement History',
            component: <EmploymentHistory/>
        },
        {
            name: 'Education Qualification',
            component: <EducationQualification/>
        },
    ];

    const renderSection = (section) => {
        return (
            <Section 
                key={section.name}
                title={section.name}
            >
                {section.component}
            </Section>
        )
    }

    return(
        <div id='candiate-container'>
            <h2>Candidate Job Application Form</h2>
            {sections.map( section => renderSection(section))}            
        </div>
    )
}