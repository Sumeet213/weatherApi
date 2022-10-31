import React, { useEffect, useState } from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import { Row, Col, Dropdown, InputGroup, Form, Button } from 'react-bootstrap';
import Weather from './Weather';
import {
  addForecast,
  addCurrent,
  getWeather,
  getMapperData,
} from '../../services/weather';

const HomeScreen = (props) => {
  const [mapperData, setMapperData] = useState(false);
  const [selectVal, setSelectedVal] = useState('Select Weather Options');
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  useEffect(() => {
    getMapperDataCall();
  }, []);

  const getMapperDataCall = async () => {
    let getData = await getMapperData();
    if (getData.status) setMapperData(getData.data);
  };

  const checkWeather = async (e, isForecast) => {
    e.preventDefault();
    if (cityName === '') {
      setWeatherData(null);
      setWeatherLoading(false);
      return;
    }
    setWeatherLoading(true);
    let data;
    if (isForecast) data = await addForecast(cityName);
    else data = await addCurrent(cityName);
    setWeatherLoading(false);
    if (data.status) {
      setWeatherData(data.data);
    }
  };

  return (
    <>
      <h1 className="home-page-heading">Weather</h1>

      <>
        <Dropdown>
          <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            {selectVal}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                setSelectedVal('Current');
                setWeatherData(null);
              }}
            >
              Current
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSelectedVal('Forecast');
                setWeatherData(null);
              }}
            >
              Forecast
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {selectVal !== 'Select Weather Options' && (
          <Form
            style={{ marginTop: '50px' }}
            onSubmit={(e) =>
              checkWeather(e, selectVal === 'Forecast' ? true : false)
            }
          >
            <InputGroup className="mb-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCityName(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Enter the city you want to Check weather for
                </Form.Text>
              </Form.Group>
              <Button variant="Primary" type="submit">
                Submit
              </Button>
            </InputGroup>
          </Form>
        )}
        <Row>
          {weatherData && (
            <Col key={weatherData.id} sm={12} md={6} lg={4} xl={3}>
              <Weather
                weather={weatherData}
                mapperData={mapperData}
                isForecast={selectVal === 'Forecast' ? true : false}
              />
            </Col>
          )}
        </Row>
      </>
    </>
  );
};

export default HomeScreen;
