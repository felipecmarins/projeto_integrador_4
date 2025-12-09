import TeamMemberCard from "../components/TeamMemberCard";
import "./Team.css";

// Importando as imagens da equipe
import gabrielImage from "../assets/gabriel.png";
import vitorImage from "../assets/vitor.png";
import anaImage from "../assets/ana.jpg";
import felipeImage from "../assets/felipe.jpeg";

const teamMembers = [
  {
    name: "Gabriel",
    role: "Gestor de Negócios (Operations)",
    bio: "O maestro da orquestra operacional. Gabriel garante que a infraestrutura da cooperativa, desde a conformidade regulatória até a gestão financeira, funcione com a precisão de um relógio suíço (movido a energia solar, claro).",
    quote: "Garante que o sol nasça... pelo menos no fluxo de caixa da empresa.",
    imageUrl: gabrielImage,
  },
  {
    name: "Vitor",
    role: "Responsável Técnico (Solar Energy)",
    bio: "Engenheiro especialista e a mente brilhante por trás dos parques solares. Ele supervisiona a eficiência dos painéis e a integridade da rede, garantindo que cada raio de sol seja convertido em economia máxima para os cooperados.",
    quote: "Fluente em Volts, Amperes e sabe a diferença entre AC e DC sem precisar ouvir a banda.",
    imageUrl: vitorImage,
  },
  {
    name: "Ana",
    role: "Marketing (Growth & Clientes)",
    bio: "A voz da Helios. Ana traduz a complexidade do setor energético em uma comunicação clara e humana. Responsável por expandir a comunidade de cooperados e garantir que a sustentabilidade seja acessível e desejável para todos.",
    quote: "Venderia gelo para esquimó, mas prefere vender luz solar para paulistano.",
    imageUrl: anaImage,
  },
  {
    name: "Felipe Marins",
    role: "Gerente de Produto (PM)",
    bio: "O elo entre a tecnologia e o usuário. Felipe desenha a experiência digital da plataforma, focando em transformar dados brutos de consumo e geração de energia em interfaces intuitivas que empoderam o usuário a economizar.",
    quote: "Tradutor oficial de 'engenheirês' para 'botões bonitos que funcionam'.",
    imageUrl: felipeImage,
  },
];

export default function Team() {
  return (
    <div className="team-page">
      <h1>Nossa Equipe</h1>
      <p className="team-intro">Conheça as mentes por trás da revolução solar na Helios.</p>
      <div className="team-members">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            bio={member.bio}
            quote={member.quote}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
