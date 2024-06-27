
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/paraSlice';
import { useEffect, useState, useRef } from 'react';
import { handleSelectedValue } from './redux/paraSlice';
import Footer from './components/Footer';

function App() {
  const [numParagraphs, setNumParagraphs] = useState(4);
  const prevNumParagraphsRef = useRef(0);

  const dispatch = useDispatch();
  const { data, error, selectedValue, isYes } = useSelector((state) => state.paras);

  console.log(selectedValue, isYes);
  useEffect(() => {
    if (numParagraphs !== prevNumParagraphsRef.current) {
      dispatch(fetchData(numParagraphs));
      prevNumParagraphsRef.current = numParagraphs;
    }
  }, [numParagraphs, dispatch]);
  console.log(data);
 
  const handleSelectChange = (e) => {
    dispatch(handleSelectedValue(e.target.value));
  };



  return (
    <div className="App">
      <h1 className='h1'>Text Generator App</h1>
      <div className='box'>
        <div className='b1'>
          <div>Paragraph</div> <br />
          <div><input type="number"
            value={numParagraphs}
            min="1"
            onChange={(e) => setNumParagraphs(e.target.value)}
          /></div>
        </div>

        <div className='b2'>
          <div>Include HTML</div> <br />
          <div >
            <select className='dropdown' value={selectedValue} onChange={handleSelectChange} >
              <option value="yes" >Yes</option>
              <option value="no"  >No</option>
            </select>
          </div>
        </div>
      </div>


      {error && <p>Error: {error}</p>}

      <div className='p'>
        {data.map((paragraph, index) => {
          const isEven = index % 2 === 0;

          return isEven && isYes ? (
            <p key={index}>
              &lt;p&gt;{paragraph}&lt;/p&gt;
            </p>
          ) : (
            <p key={index}>{paragraph}</p>
          );
        })}
      </div>


<Footer/>
    </div>
  );
}

export default App;
