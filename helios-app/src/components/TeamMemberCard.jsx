import "./TeamMemberCard.css";

export default function TeamMemberCard({ name, role, imageUrl }) {
  return (
    <div className="team-member-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
