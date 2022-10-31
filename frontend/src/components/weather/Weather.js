import React from 'react'
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Weather = ({weather, isForecast, mapperData}) => {
    return (
        <Table striped bordered hover>
            {isForecast ? 
                (   
                <>
                    <thead>
                        <tr>
                        <th>{mapperData?.sunrise || 'Sunrise'}</th>
                        <th>{mapperData?.sunset || 'Sunset'}</th>
                        <th>{mapperData?.moonrise || 'Moonrise'}</th>
                        <th>{mapperData?.moonset || 'Moonset'}</th>
                        <th>{mapperData?.moon_phase || 'Moon Phase'}</th>
                        <th>{mapperData?.moon_illumination || 'Moon Illumination'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{weather.sunrise}</td>
                        <td>{weather.sunset}</td>
                        <td>{weather.moonrise}</td>
                        <td>{weather.moonset}</td>
                        <td>{weather.moon_phase}</td>
                        <td>{weather.moon_illumination}</td>
                        </tr>
                    </tbody>
                    </>
                ) :
                (
                    <>
                        <thead>
                            <tr>
                            <th>{mapperData?.name || 'City Name'}</th>
                            <th>{mapperData?.region || 'Region'}</th>
                            <th>{mapperData?.country || 'Country'}</th>
                            <th>{mapperData?.lat || 'Latitude'}</th>
                            <th>{mapperData?.lon || 'Longitude'}</th>
                            <th>{mapperData?.tz_id || 'Time Zone'}</th>
                            <th>{mapperData?.localtime_epoch || 'Localtime Epoch'}</th>
                            <th>{mapperData?.localtime || 'Localtime'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{weather.name}</td>
                            <td>{weather.region}</td>
                            <td>{weather.country}</td>
                            <td>{weather.lat}</td>
                            <td>{weather.lon}</td>
                            <td>{weather.tz_id}</td>
                            <td>{weather.localtime_epoch}</td>
                            <td>{weather.localtime}</td>
                            </tr>
                        </tbody>
                    </>
                )
            }
        </Table>
    )
}

export default Weather
