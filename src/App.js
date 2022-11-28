import { Row, Col } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Row className='app_row'>
        <Col span={12} offset={6} className='app_col'>
          meeting
        </Col>
      </Row>
    </div>
  );
}

export default App;
