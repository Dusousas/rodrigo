import About from "@/components/About";
import Depoimentos from "@/components/Depoimentos";
import Galery from "@/components/Galery";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Galery />
      <Menu  />
      <Grid />
      <Depoimentos />
    </>
  );
}
