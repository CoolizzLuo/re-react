import { useState, useEffect } from 'react';
import './style.css';
import SelectButton from './SelectButton';
import List from './List';
import Table from './Table';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const BUTTON_OPTIONS = ['users', 'posts', 'comments'];
const FetchChallenge = () => {
  const [selected, setSelected] = useState(BUTTON_OPTIONS[0]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${selected}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [selected]);

  return (
    <>
      <SelectButton options={BUTTON_OPTIONS} value={selected} setValue={setSelected} />
      <Table items={items} />
    </>
  );
};

export default FetchChallenge;
