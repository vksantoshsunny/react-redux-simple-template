// basic react component starting template
import React, { Component } from 'react';
import Counter from './Counter'

class SimpleComponent extends Component {
    render() {
        return (
            <div><Counter></Counter></div>
        );
    }
}

export default SimpleComponent;