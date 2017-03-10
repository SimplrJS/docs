import React from "react";
import { Link } from "react-router";

import "./template.scss";

class Template extends React.Component {
    render() {
        return (
            <main className="docs">
                {this.props.children}
            </main>
        );
    }
}

export default Template;