import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import { typography } from './utils/typography'
import { colors } from 'utils/colors'

const BUILD_TIME = new Date().getTime()

class HtmlComponent extends React.Component {
  static propTypes = {
    body: React.PropTypes.string,
  };
  render() {
    let title = DocumentTitle.rewind();

    let css = null;
    let productionBuild = process.env.NODE_ENV === 'production';
    if (productionBuild) {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    let routes = this.props.routes;
    let route;
    if (routes != null) {
      route = routes[routes.length - 1];
    }
    let metadata = null;
    if (false) {
      let currentPage = route.page;
      let location = this.props.location;

      for (let p of route.pages) {
        // console.log(p.path, p.data.title);
      }

      // console.log(JSON.stringify(route.pages, null, 4));
      // throw new Error();

      meta = [];
      if (location != null) {
        meta.push(<meta property="og:url" content={location.pathname} />);
      }
      if (currentPage != null) {
        meta.push(<meta property="og:description" content={currentPage.data.description} />);
        if (title == null) {
          title = currentPage.data.title;
        }
      }
    }

    let bundle = null;
    if (!productionBuild) {
      bundle = <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {metadata}
          <title>{title}</title>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {bundle}
        </body>
      </html>
    )
  }
};

export default HtmlComponent;