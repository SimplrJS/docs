import React from "react";
import { Link } from "react-router";
import { prefixLink } from 'gatsby-helpers'

exports.data = {
    layout: "package-index",
    packageName: "simplr-forms",
    listing: true
}

import "./index.scss";

class SimplrFormsIndex extends React.Component {
    renderVersionsList(versions) {
        let key = 0;
        return versions.map(x => (
            <li key={`simplr-forms-version-${key++}`}>
                <h5>
                    <Link
                        to={x.Path}
                    >
                        {x.Version}
                    </Link>
                </h5>
            </li>
        ));
    }

    render() {
        let pages = this.props.route.pages;
        let versions = pages
            .filter(x => x.data.layout === "package-version-index" &&
                x.data.packageName === "simplr-forms")
            .map(x => {
                return {
                    PackageName: x.data.packageName,
                    Version: x.data.version,
                    Path: x.path
                };
            })
            .sort((a, b) => {
                if (a.Version == b.Version) {
                    return 0;
                }
                return a.Version > b.Version ? 1 : 0;
            });


        return (
            <section className="simplr-forms-index index-page">
                <section className="hero small">
                    <section className="titles">
                        <h1>
                            simplr-forms
                        </h1>
                        <h5>
                            well-documented code is easy-to-use and very lovable
                        </h5>
                    </section>
                </section>
                <section className="content">
                    <h5>
                        Available versions
                    </h5>
                    <ul>
                        {this.renderVersionsList(versions)}
                    </ul>
                </section>
            </section>
        );
    }
}

export default SimplrFormsIndex;