import "./TeamMemberCard.css";

export default function TeamMemberCard({ name, role, bio, quote, imageUrl }) {
  return (
    <div className="team-member-card">
      <img src={imageUrl} alt={`Foto de ${name}`} className="team-member-photo" />
      <h3>{name}</h3>
      <h4>{role}</h4>
      <p className="bio">{bio}</p>
      <p className="quote">"{quote}"</p>
    </div>
  );
}
