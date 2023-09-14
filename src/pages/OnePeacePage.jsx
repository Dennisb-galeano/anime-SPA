import { HeroList } from "../components/HeroList";
import { PageLayout } from "../ui/components/PageLayout";
import { Header } from "../ui/components/Header";

const headerOnePeace = '/assets/search/header-onepeace.jpg';

// const Header = () => {
//   return (
//     <>
//       <div className="animate__animated animate__fadeIn" >
//         <div className="Header-onePiece row">
//           <img
//             src={"/assets/search/header-onepeace.jpg"} alt="header_one_peace " />
//         </div>
//       </div>
//       <hr />
//     </>
//   )
// }


export const OnePeacePage = () => {
  return (
    <PageLayout 
      header={ <Header 
        srcImage={ headerOnePeace } 
        id="one_piece"
        />}
      body={<HeroList publisher='One Peace'/>}

    />
  )
}


// tengo que mandarle el argumento al componete que estoy renderizando para uqe no me genere error 
