import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Logo, LogoImageLight } from "./_logo";

import './index.scss';

exports.data = {
    title: 'SimplrJS - make your Javascript life simple',
}

const SomeReactCode = React.createClass({

    render() {
        const page = this.props.route.page

        return (
            <DocumentTitle title={`${page.data.title} | ${config.siteTitle}`}>
                <section className="index-page">
                    <section className="hero">
                        <section className="titles">
                            <h1>
                                SimplrJS
                            </h1>
                            <h5>make your Javascript life simple</h5>
                        </section>

                        <Link
                            to={prefixLink('/docs/')}
                            className="button"
                        >
                            Get started
                        </Link>
                    </section>
                    <section className="packages">
                        <section>
                            <h3>simplr-flux</h3>
                            <p>
                                Original flux package does amazing low-level job and is performant.
                                Unfortunatelly, it is not that developer-friendly and required handling actions in a non-standardised manner.
                            </p>
                            <p>
                                This package enables you to handle actions by their, without nasty checks required.
                                </p>
                        </section>
                        <section>
                            <h3>simplr-forms-core</h3>
                            <p>
                                React framework makes it straightforward using components, but does not provide a good forms experience.
                            </p>
                            <p>
                                This package enhances developer's life and code maintainability by leveraging framework features, flux architecture and easy API.
                            </p>
                        </section>
                        <section>
                            <h3>simplr-forms</h3>
                            <p>
                                Having and amazing simplr-forms-core is one thing, but having specific implementations for react and react-native is a whole different world.
                            </p>
                            <p>
                                Enjoy.
                            </p>
                        </section>
                    </section>
                </section>
            </DocumentTitle>
        )
    },
})

export default SomeReactCode