import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import state from './assets/state.png';
import budget from './assets/budget.png';
import periods from './assets/period.png';
import tags from './assets/tag.png';
import note from './assets/note.png';

function Write() {
  const [city, setCity] = useState('');
  const [money, setMoney] = useState('');
  const [period, setPeriod] = useState('');
  const [tag, setTag] = useState('');
  const [journal, setJournal] = useState('');

  // 입력 핸들러
  const handleCityChange = (e) => setCity(e.target.value);
  const handleMoneyChange = (e) => setMoney(e.target.value);
  const handlePeriodChange = (e) => setPeriod(e.target.value);
  const handleTagChange = (e) => setTag(e.target.value);
  const handleJournalChange = (e) => setJournal(e.target.value);

  // API 호출 함수
  const saveData = () => {
    // API 요청 바디 구성
    const data = {
      City: city,
      Money: money,
      Tag: tag,
      Date: period,
      Journal: journal
    };

    // Axios를 사용한 API 호출
    axios.post('http://localhost:8000/travel/api/', data)
      .then(response => {
        // 성공 시 처리 로직
        console.log('저장 성공:', response.data);
        alert('저장되었습니다.');
        setCity('');
        setMoney('');
        setPeriod('');
        setTag('');
        setJournal('');
      })
      .catch(error => {
        // 에러 핸들링
        console.error('저장 실패:', error);
        alert('저장에 실패하였습니다.');
      });
  };

  return (
    <div className="write-container">
      <div style={{ display: 'flex' }}>
        <img src={state} style={{ marginLeft: "-470px", width: '35px', height: '35px' }} alt='state' ></img>
        <div style={{ marginTop: "3px", marginLeft: "3px", fontSize: "27px", fontWeight: 'bold' }}>도시</div>
        <div style={{ width: '430px' }}></div>
        <img src={budget} style={{ width: '70px', height: "40px" }} alt='budget' ></img>
        <div style={{ fontSize: "27px", fontWeight: 'bold', marginLeft: "-15px" }}>경비</div>
      </div>
      <div className="inputs-row1">
        <input type="text" placeholder="도시" value={city} onChange={handleCityChange} />
        <input type="text" placeholder="예산" value={money} onChange={handleMoneyChange} />
      </div>
      <div style={{ display: 'flex' }}>
        <img src={periods} style={{ marginLeft: "-430px", width: '33px', height: '33px' }} alt='periods' ></img>
        <div style={{ marginTop: "2px", marginLeft: "10px", fontSize: "27px", fontWeight: 'bold' }}>여행기간</div>
        <div style={{ width: '400px' }}></div>
        <img src={tags} style={{ width: '45px' }} alt='tags' ></img>
        <div style={{ fontSize: "27px", fontWeight: 'bold', marginLeft: "-5px" }}>해시태그</div>
      </div>
      <div className="inputs-row2">
        <input type="text" placeholder="여행 기간" value={period} onChange={handlePeriodChange} />
        <input type="text" placeholder="해시태그" value={tag} onChange={handleTagChange} />
      </div>

      <div style={{ display: 'flex' }}>
        <img src={note} style={{ marginLeft: "-580px", width: '55px', height: '55px' }} alt='note' ></img>
        <div style={{ marginTop: "8px", marginLeft: "1px", fontSize: "28px", fontWeight: 'bold' }}>일지</div>
        <div style={{ width: '400px' }}></div>
      </div>
      <textarea className="input-large" value={journal} onChange={handleJournalChange} />
      <div className='button' onClick={saveData}>
        저장
      </div>
    </div>
  );
}

export default Write;