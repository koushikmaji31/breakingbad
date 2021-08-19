import Header from './components/Header'
import {box} from '@material-ui/core'
import { fetchData  } from './bbapi/api';
import { useEffect, useState } from 'react';
import Characters from './components/characters';

const App = () => {
  const [text, setText] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async() => {
    
      const result = await fetchData(text)
      setData(result.data)
      
      console.log(result);

    
    }
    getData();
  },[text]);

  const getText = (text) => {
    setText(text);
    console.log(text);
  }

  return (
    <box>
      <Header getText={getText}/>
      <Characters data = {data} />
      
    </box>
    
  );
}

export default App;
