import Apresentacoes from "@/components/Apresentações";
import Escape from "@/components/Escape";
import Ferramentas from "@/components/Ferramentas";
import FirstInformation from "@/components/FirstInformation";
import Impostor from "@/components/Impostor";
import Portfolio from "@/components/Portfolio";
import Questions from "@/components/Questions";

export default function Home() {
  return (
    <div className="container">
        <FirstInformation />
        <Questions />
        <Apresentacoes />
        <Escape />
        <Portfolio />
        <Impostor />
        <Ferramentas />
    </div>
  )
}
