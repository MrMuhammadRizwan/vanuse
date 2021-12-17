import HeaderBar from "../components/header/headerBar";
import SearchCard from "../components/searchCard/searchCard";

export default function Home() {
  return (
    <>
      <HeaderBar/>
      <main className='main-content'>
        <div className='banner-container'>
          <SearchCard/>
        </div>
      </main>
    </>
  )
}
