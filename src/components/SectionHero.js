import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';
import ActionLink from './ActionLink';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block hero-block bg-accent outer">
              <div className="inner">
                <div className="grid">
                  {_.get(section, 'image', null) && (
                  <div className="cell block-preview">
                    <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'title', null)} />
                  </div>
                  )}
                  <div className="cell block-content">
                    {_.get(section, 'title', null) && (
                    <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                    )}
                    {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null) && (
                      <div>
                        <div className="block-img desktop">
                          <img src="https://www.datocms-assets.com/31873/1596722640-logoalt.png" alt="Logo" />
                        </div>
                        <div className="block-img mobile">
                          <img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null))} alt="Logo" />
                        </div>
                      </div>
                    )}
                    <div className="block-copy">
                      {markdownify(_.get(section, 'content', null))}
                    </div>
                    {_.get(section, 'actions', null) && (
                    <p className="block-buttons">
                      {_.map(_.get(section, 'actions', null), (action, action_idx) => (
                        <ActionLink key={action_idx} {...this.props} action={action} class_names={'button white large'} />
                      ))}
                    </p>
                    )}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
