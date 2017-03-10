import React from "react";
import { Link } from "react-router";
import { prefixLink } from 'gatsby-helpers'

import "./index.scss";

class DocsIndex extends React.Component {
    renderPackagesList(packages) {
        let key = 0;
        return packages.map(x => (
            <li key={`package-${key++}`}>
                <h5>
                    <Link
                        to={x.Path}
                    >
                        {x.Name}
                    </Link>
                </h5>
            </li>
        ));
    }

    render() {
        let pages = this.props.route.pages;
        let packages = pages
            .filter(x => x.data.layout === "package-index" &&
                x.data.listing === true)
            .map(x => {
                return {
                    Name: x.data.packageName,
                    Path: x.path
                };
            });

        return (
            <section className="docs-index index-page">
                <section className="hero small">
                    <section className="titles">
                        <h1>
                            Documentation
                        </h1>
                        <h5>
                            well-documented code is easy-to-use and very lovable
                        </h5>
                    </section>
                </section>
                <section className="content">
                    <h4>
                        Packages
                    </h4>
                    <nav>
                        <ul >
                            {this.renderPackagesList(packages)}
                        </ul>
                    </nav>
                </section>
            </section>
        );
    }
}

export default DocsIndex;