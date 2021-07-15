import './styles.scss';

// Components
import Carousel from './components/carousel';
import Loading from './components/loading'
import Footer from './components/footer'

// App Context
import { useAppContext } from './context';


const App =() => {

  const {data} = useAppContext();

  //conditional component rendering until fetch is complete
  if(data.isLoading) return <Loading />


  return (
    <div className="main">
      <Carousel />
      <Footer/>
    </div>
  );
}

export default App;
