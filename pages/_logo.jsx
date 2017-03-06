import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

let logoImage = function (imageClass) {
    return React.createClass({
        render() {
            return (
                <span className={`logo ${(imageClass != null ? imageClass : "")}`}></span>
            );
        }
    })
}

let logo = function (imageClass) {
    return React.createClass({
        render() {
            return (
                <Link
                    to={prefixLink('/')}
                    className="logo-container"
                >
                    <span className={`logo ${(imageClass != null ? imageClass : "")}`}></span>
                    <span className="title">SimplrJS</span>
                </Link>
            )
        },
    })
};

module.exports = {
    Logo: logo(),
    LogoLight: logo("light"),
    LogoImage: logoImage(),
    LogoImageLight: logoImage("light")
};
