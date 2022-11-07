import React from 'react';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'

const DataTable = (props) => {
    const [fetchedData, setFetchedData] = useState([]);

    const handleFetch = () => {
        fetch(`https://api.covidtracking.com/v1/states/${props.selectedItem.toLowerCase()}/daily.json`)
            .then(data => data.json())
            .then(data => setFetchedData(data))
    }

    return (
        <div>
            {!props.selectedItem ? null : <Button onClick={handleFetch} style={{ marginBottom: "13px" }}>Get Data for {props.selectedItem}</Button>}
            <div>
                <table id="dataTable">
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Total Tested</th>
                            <th>Positive</th>
                            <th>Recovered</th>
                            <th>Death</th>
                        </tr>
                        {fetchedData.map(fetched =>
                            <tr key={uuidv4()}>
                                <td>{String(fetched.date).slice(6, 8) + "/" + String(fetched.date).slice(4, 6) + "/" + String(fetched.date).slice(0, 4)}</td>
                                <td>{fetched.totalTestResults}</td>
                                <td>{fetched.positive}</td>
                                <td>{fetched.recovered}</td>
                                <td>{fetched.death} </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
