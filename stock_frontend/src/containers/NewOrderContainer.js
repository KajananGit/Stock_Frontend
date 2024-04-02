const NewOrderContainer = () => {

    // const [stockId, setStockId] = useState(null);

    const loadStocksData = async () => {
        const response = await fetch("http://localhost:8080/stocks");
        const jsonData = await response.json();
        console.log(jsonData);
    }

    // useEffect(() => {
    //     loadStocksData();
    // }, []);

    return ( 
        <>
        <h1>Hello from the new order</h1>
        </> 
    );
}
 
export default NewOrderContainer;