import '../../assets/styles/components/searchbar/styleSearchbar.css'
import search from '../../assets/icons/search.svg';

const searchbar = () => {
    return (
       <div className='search'>
        <img src={search} alt="Ícone de busca" className='img-icon'/>
      </div>  
    );
  };
  
  export default searchbar