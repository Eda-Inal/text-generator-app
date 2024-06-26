import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from './redux/paraSlice';
import { useEffect, useState,useRef } from 'react';

function App() {
 const [numParagraphs, setNumParagraphs] = useState(4);
 const prevNumParagraphsRef = useRef(0);
 const [selectedValue, setSelectedValue] = useState('no');
 const dispatch = useDispatch();
 const { loading, data, error } = useSelector((state) => state.paras);
 useEffect(() => {
  if (numParagraphs !== prevNumParagraphsRef.current) {
    dispatch(fetchData(numParagraphs));
    prevNumParagraphsRef.current = numParagraphs;
  }
}, [numParagraphs, dispatch]);
 console.log(data);
 const handleSelectValue = (e) => {
setSelectedValue(e.target.value)
 }
 
 

  return (
    <div className="App">
<h1 className='h1'>Text Generator App</h1>
<div className='box'>
  <div className='b1'>
    <div>Paragraph</div> <br />
    <div><input type="number" 
value={numParagraphs}
min="1"
onChange={(e)=> setNumParagraphs(e.target.value)}
/></div>
  </div>

  <div className='b2'>
    <div>Include HTML</div> <br />
    <div >
      <select className='dropdown' value={selectedValue} onChange={handleSelectValue}>
      <option value="yes" >Yes</option>
      <option value="no" >No</option>
      </select>
    </div>
  </div>
</div>




{loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
{/*            
            { data.map((paragraph, index) => (
                    <p key={index}>
                       {paragraph}
                      
                      </p>
                ))} */}
                <div className='p'>
                  { data.map((paragraph, index) => (
                    <p  key={index}>
                       {paragraph}
                      
                      </p>
                ))}
                </div>
            

    </div>
  );
}

export default App;
