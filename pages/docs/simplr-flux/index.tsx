import * as React from "react";

exports.data = {
    layout: "package-index",
    packageName: "simplr-flux",
    listing: true
}

export interface Props {
    name: string;
}

export interface State {
    name: string
}

class SimplrFluxIndex extends React.Component<Props, State> {
    render() {
        return <div>
            Simplr flux BLE
            </div>;
    }
}

export default SimplrFluxIndex;