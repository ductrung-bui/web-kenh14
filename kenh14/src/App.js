import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [datas, setDatas] = useState([])

  // Lấy data từ fake API
  useEffect(() => {
    const getDatas = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/news'
        )
        // console.log(res.data)
        setDatas(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    getDatas()

  }, [])

  // console.log(datas);

  return (
    <div className="App">
      <div className='bodyy'>
        {datas.map((data, i) =>{

          return(
          <a href={data.link} className='container' key ={data.id}>
            <div className='left'>
              <img className='image' src={data.image}></img>
            </div>
            <div className='right'>
              <div className='title'>{data.title}</div>
              <div className='category'>{data.category}</div>
              <div className='description'>{data.description}</div>
            </div>
          </a>
          )
        })}
      </div>
    </div>
  );
}

export default App;
