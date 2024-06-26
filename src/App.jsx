import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from './redux/paraSlice';
import { useState } from 'react';

function App() {
 const [numParagraphs, setNumParagraphs] = useState(4);
 const dispatch = useDispatch();
 const { loading, data, error } = useSelector((state) => state.paras);
 const handleFetchData = () => {
  dispatch(fetchData(numParagraphs));
};
  return (
    <div className="App">
<h1>data</h1>
<input type="number" 
value={numParagraphs}
onChange={(e)=> setNumParagraphs(e.target.value)}
/>
<button onClick={handleFetchData}>show data</button>
<br />
{loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
           
            {data.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}

    </div>
  );
}

export default App;
