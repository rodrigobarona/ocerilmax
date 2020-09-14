import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {withPrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title', null) && (_.get(this.props, 'pageContext.frontmatter.title', null) + ' - ')}{_.get(this.props, 'pageContext.site.siteMetadata.title', null)}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" href={withPrefix('assets/css/main.css')}/>
                </Helmet>
                <noscript
                dangerouslySetInnerHTML={{
                  __html: '<div style="display:none;"><img src="//pixel.quantserve.com/pixel/p-k1ZtuzCKD0GWA.gif" border="0" height="1" width="1" alt="Quantcast"/></div>'
                }}
              />
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette', null)}>
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
