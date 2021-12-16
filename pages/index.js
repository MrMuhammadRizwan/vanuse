import HeaderBar from '../components/headerBar';
import SearchCard from '../components/searchCard';

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
