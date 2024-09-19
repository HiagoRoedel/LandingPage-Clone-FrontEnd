import Apresentacoes from "@/components/Apresentações";
import Escape from "@/components/Escape";
import Faq from "@/components/Faq";
import Ferramentas from "@/components/Ferramentas";
import FirstInformation from "@/components/FirstInformation";
import Impostor from "@/components/Impostor";
import Oportunidades from "@/components/Oportunidades";
import Portfolio from "@/components/Portfolio";
import Questions from "@/components/Questions";
import Skills from "@/components/Skills";
import Slider from "@/components/Slider";
import Works from "@/components/Works";
import Building from "@/components/Building";
import Talento from "@/components/Talento";

export default function Home() {
  return (
    <>
      <div className="container">
        <FirstInformation />
        <Questions />
        <Apresentacoes />
        <Escape />
        <Portfolio />
        <Impostor />
        <Ferramentas />
        <Oportunidades />
        <Works />
        <Skills />
        <Slider />
        <Faq />
        <Building />
      </div>
      <div className="a">
        <Talento />
      </div>
    </>
  )
}
