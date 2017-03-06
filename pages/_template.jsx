import React from 'react'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import { typography } from 'utils/typography'
import { config } from 'config'

import { Logo, LogoImageLight } from "./_logo";

// Import styles.
import 'css/reset.css'
import 'css/main.scss'
import 'css/github.css'
import './template.scss'

const { rhythm, adjustFontSizeTo } = typography

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.object,
    }
  },

  items() {
    return [
      (<section>
        <div>
          <LogoLight />
        </div>
      </section>),
      (<section>
        <div>
          <h6>About us</h6>
          <ul>
            <li>Team</li>
            <li>Projects</li>
          </ul>
        </div>
      </section>),
      (<section>
        <div className="content">
          <h6>Packages</h6>
          <ul>
            <li>simplr-flux</li>
            <li>simplr-forms</li>
            <li>simplr-something</li>
          </ul>
        </div>
      </section>),
      (<section>
      </section>),
      (<section>
      </section>),
      (<section>
      </section>)
    ];
  },

  render() {
    const docsActive = includes(this.props.location.pathname, '/docs/')
    const examplesActive = includes(this.props.location.pathname, '/examples/')

    return (
      <main>
        <header
          className="top-bar">
          <section className="logo">
            <Logo />
            <nav>
              <Link
                to={prefixLink('/docs/')}
              >
                Docs
              </Link>
              <a href="https://github.com/simplrjs">Github</a>
            </nav>
          </section>
        </header>
        <section className="content">
          {this.props.children}
        </section>
        <footer>
          <section className="columns">
            <section className="column">
              <LogoImageLight />
            </section>
            <section className="column">
              <h6>About us</h6>
              <ul>
                <li>Team</li>
                <li>Projects</li>
              </ul>
            </section>
            <section className="column">
              <h6>Packages</h6>
              <ul>
                <li>simplr-flux</li>
                <li>simplr-forms</li>
                <li>simplr-something</li>
              </ul>
            </section>
            <section className="column">
              <h6>Packages</h6>
              <ul>
                <li>simplr-flux</li>
                <li>simplr-forms</li>
                <li>simplr-something</li>
              </ul>
            </section>
            <section className="column">
              <h6>Packages</h6>
              <ul>
                <li>simplr-flux</li>
                <li>simplr-forms</li>
                <li>simplr-something</li>
              </ul>
            </section>
          </section>
          <section className="merchandise">
            <div>
              <div className="QuatroDev" />
              <div className="copyright">
                Copyright © {new Date().getFullYear()} QuatroDev
                </div>
            </div>
          </section>
        </footer>
      </main>
    )
  },
})
