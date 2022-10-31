import React, { useEffect, useState } from 'react';
import { Row, Col, Dropdown, InputGroup, Form, Button } from 'react-bootstrap';
import { addMapperData, getMapperData } from '../../services/weather';

const MapperScreen = (props) => {
  const [mapperData, setMapperData] = useState({
    name: '',
    region: '',
    country: '',
    lat: '',
    lon: '',
    tz_id: '',
    localtime_epoch: '',
    localtime: '',
    sunrise: '',
    sunset: '',
    moonrise: '',
    moonset: '',
    moon_phase: '',
    moon_illumination: '',
  });
  const [selectVal, setSelectedVal] = useState('Select Weather Options');

  useEffect(() => {
    getMapperDataCall();
  }, []);

  useEffect(() => {
    console.log('mapperData', mapperData);
  }, [mapperData]);

  const getMapperDataCall = async () => {
    let getData = await getMapperData();
    if (getData.status) setMapperData({ ...getData.data });
  };

  const changeMapperData = (type, value) => {
    setMapperData({ ...mapperData, [type]: value });
  };

  const submitMapperData = async (e) => {
    e.preventDefault();
    console.log('mapperData', mapperData);
    // return
    await addMapperData(mapperData);
    getMapperDataCall();
  };

  return (
    <>
      <h1 className="home-page-heading">Add Mapper Data</h1>

      <>
        <Dropdown>
          <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            {selectVal}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                setSelectedVal('Current');
              }}
            >
              Current
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setSelectedVal('Forecast');
              }}
            >
              Forecast
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {selectVal !== 'Select Weather Options' && (
          <Form
            style={{ marginTop: '50px' }}
            onSubmit={(e) => submitMapperData(e)}
          >
            {selectVal === 'Current' ? (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>city</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    value={mapperData.name}
                    onChange={(e) => changeMapperData('name', e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>region</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="region"
                    value={mapperData.region}
                    onChange={(e) => changeMapperData('region', e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="country"
                    value={mapperData.country}
                    onChange={(e) =>
                      changeMapperData('country', e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>latitude</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="latitude"
                    value={mapperData.lat}
                    onChange={(e) => changeMapperData('lat', e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>longitude</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="longitude"
                    value={mapperData.lon}
                    onChange={(e) => changeMapperData('lon', e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>timezone id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="timezone id"
                    value={mapperData.tz_id}
                    onChange={(e) => changeMapperData('tz_id', e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>localtime epoch</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="localtime epoch"
                    value={mapperData.localtime_epoch}
                    onChange={(e) =>
                      changeMapperData('localtime_epoch', e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>localtime</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="localtime"
                    value={mapperData.localtime}
                    onChange={(e) =>
                      changeMapperData('localtime', e.target.value)
                    }
                  />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>sunrise</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="sunrise"
                    value={mapperData.sunrise}
                    onChange={(e) =>
                      changeMapperData('sunrise', e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>sunset</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="sunset"
                    value={mapperData.sunset}
                    onChange={(e) => changeMapperData('sunset', e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>moonrise</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="moonrise"
                    value={mapperData.moonrise}
                    onChange={(e) =>
                      changeMapperData('moonrise', e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>moonset</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="moonset"
                    value={mapperData.moonset}
                    onChange={(e) =>
                      changeMapperData('moonset', e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>moon phase</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="moon phase"
                    value={mapperData.moon_phase}
                    onChange={(e) =>
                      changeMapperData('moon_phase', e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>moon illumination</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="moon illumination"
                    value={mapperData.moon_illumination}
                    onChange={(e) =>
                      changeMapperData('moon_illumination', e.target.value)
                    }
                  />
                </Form.Group>
              </>
            )}
            <Button variant="Primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </>
    </>
  );
};

export default MapperScreen;
