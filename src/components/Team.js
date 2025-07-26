import React from 'react';
import './Team.css';

const Team = () => {
  const team = [
    {
      name: 'Michael Bailey',
      role: 'Co-founder',
      image: null
    },
    {
      name: 'Howard Huo',
      role: 'Co-founder',
      image: null
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-avatar">
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="avatar-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;