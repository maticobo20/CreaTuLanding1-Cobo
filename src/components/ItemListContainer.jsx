import { getProducts } from '../mock/AsyncMock'
import '../css/ItemListContainer.css'

const ItemListContainer = ({ mensaje }) => {

    const [data, setData] = useState([])

    useEffect(() =>{
        getProducts()
        .then((res)=> console.log(res, 'res'))
        .catch((error) => console.error(error))

    },[])

    return (
        <div className="item-list-container">
            <h1 className="title">
                {mensaje}
            </h1>
            <ItemList data={data}/>
           
        </div>
    );
};

export default ItemListContainer; 