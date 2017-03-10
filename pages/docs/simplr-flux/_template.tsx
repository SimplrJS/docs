import * as React from "react";

class SimplrFluxTemplate extends React.Component<any, any> {
    render() {
        console.log(this.props.children);
        return <div>
            SimplrFluxTemplate
                {this.props.children}
        </div>;
    }
}

export default SimplrFluxTemplate;