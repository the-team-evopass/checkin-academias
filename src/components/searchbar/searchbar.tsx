import '../../assets/styles/components/searchbar/styleSearchbar.css'
import search from '../../assets/icons/search.svg';

const Searchbar = () => {
    return (
       <div className='search'>
        <input type="text" />
        <img src={search} alt="Ícone de busca" className='img-icon'/>
        
      </div>  
    );
  };
  
  export default Searchbar
