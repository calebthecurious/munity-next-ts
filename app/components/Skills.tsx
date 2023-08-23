import React from 'react';

type Skill = {
    id: number;
    name: string;
    description: string;
};

type SkillsProps = {
    skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div className="skills">
            <h3>Skills Offered</h3>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>
                        <strong>{skill.name}:</strong> {skill.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;