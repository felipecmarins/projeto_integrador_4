import TeamMemberCard from "../components/TeamMemberCard";
import "./Team.css";

const teamMembers = [
  {
    name: "João Silva",
    role: "CEO & Founder",
    imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "Maria Oliveira",
    role: "CTO",
    imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
  },
  {
    name: "Pedro Alves",
    role: "Lead Engineer",
    imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
  },
  {
    name: "Ana Costa",
    role: "Marketing Manager",
    imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
  },
];

export default function Team() {
  return (
    <div className="team-page">
      <h1>Nossa Equipe</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
