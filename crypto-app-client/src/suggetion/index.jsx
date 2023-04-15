import React, { useState, Fragment } from 'react';
// Import as a module in your JS
import Typeahead from 'react-bootstrap-typeahead/types/core/Typeahead';
import Form from 'react-bootstrap-form/lib/Form';
import './index.css'

const Suggestion = () => {
    const [singleSelections, setSingleSelections] = useState([]);

    return (

        <Fragment>
            <Form.Label>Single Selection</Form.Label>
            <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setSingleSelections}
                // options={ options } 
                placeholder="Choose a state..."
                selected={singleSelections}
            />
        </Fragment>

    )
}
export default Suggestion;
