import { HeroList } from "../components/HeroList";
import { PageLayout } from "../ui/components/PageLayout";
import {Header} from "../ui/components/Header";

const headerNaruto = '/assets/search/header-naruto.jpg';

export const NarutoPage = () => {
  return (
    <>
      <PageLayout
        header={<Header 
          id="naruto"
          srcImage={ headerNaruto}/>}
        body={<HeroList publisher={'Naruto'} />}
      />
    </>

  )
}
