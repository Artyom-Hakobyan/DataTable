import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { v4 as uuidv4 } from 'uuid';
import DataTable from "./DataTable";

const BasicButtonExample = (props) => {
    const [selectedItem, setSelectedItem] = useState("");

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success">Select a State</Dropdown.Toggle>
                <Dropdown.Menu>
                    {props.receivedData.map(data => <DropdownItem
                        key={uuidv4()}
                        onClick={() => { setSelectedItem(data.state) }}>
                        {data.state} - ({data.name})
                    </DropdownItem>)}
                </Dropdown.Menu>
            </Dropdown>
            <p>Selected US State: {selectedItem}</p>
            <DataTable selectedItem={selectedItem} />
        </>
    );
};

export default BasicButtonExample;
