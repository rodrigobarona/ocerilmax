import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ActionLink from './ActionLink';

export default class SectionCta extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block cta-block bg-accent outer">
              <div className="inner-large">
                <div className="cta_img_01">
                  <img src="https://www.datocms-assets.com/31873/1596966932-ctaimg01.png" alt="" />
                </div>
                <div className="grid">
                  <div className="cell block-content">
                    {_.get(section, 'title', null) && (
                    <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <p className="block-subtitle">
                      {htmlToReact(_.get(section, 'subtitle', null))}
                    </p>
                    )}
                  </div>
                  {_.get(section, 'actions', null) && (
                  <div className="cell block-buttons">
                    {_.map(_.get(section, 'actions', null), (action, action_idx) => (
                      <ActionLink key={action_idx} {...this.props} action={action} class_names={'button white large'} />
                    ))}
                  </div>
                  )}
                </div>
                <div className="cta_img_02">
                  <img src="https://www.datocms-assets.com/31873/1596966935-ctaimg02.png" alt="" />
                </div>
              </div>
            </section>
        );
    }
}
