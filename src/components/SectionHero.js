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
                          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 330.9 42.51">
                            <g>
                              <g>
                                <path class="st0" d="M3.24,21.75c0-13.49,8.49-19.33,18-19.33c9.36,0,17.93,5.85,17.93,19.33c0,13.75-8.52,19.36-18.03,19.36
                                  S3.24,35.5,3.24,21.75z M30.92,21.73c0-7.6-3.87-12.01-9.71-12.01c-6,0-9.84,4.38-9.84,12.01c0,7.84,3.73,12.1,9.77,12.1
                                  C27.09,33.83,30.92,29.58,30.92,21.73z"/>
                                <path class="st0" d="M44.27,21.8c0-12.84,8.35-19.42,18.09-19.42c6.55,0,13.02,2.87,15.96,9.84c0.99,2.32,0.05,3.87-2.23,4.25
                                  l-1.24,0.21c-2.21,0.4-3.2-0.18-4.18-1.76c-1.95-3.4-4.71-5.06-8.33-5.06c-5.74,0-9.56,4.62-9.56,11.94
                                  c0,7.34,3.77,11.86,9.56,11.86c3.7,0,6.47-1.69,8.35-5.2c0.9-1.57,2.12-2.18,4.23-1.81l1.23,0.21c2.4,0.4,3.13,2.26,1.67,5.26
                                  c-2.91,6.4-9.2,9.03-15.47,9.03C52.55,41.14,44.27,34.96,44.27,21.8z"/>
                                <path class="st0" d="M85.06,37.14V6.26c0-2.24,1.24-3.48,3.48-3.48h18.07c2.24,0,3.48,1.24,3.48,3.48v0.4
                                  c0,2.24-1.24,3.48-3.48,3.48H93.31v8.16h12.36c2.24,0,3.48,1.15,3.48,3.2v0.05c0,2.07-1.24,3.19-3.48,3.19H93.31v8.53h13.31
                                  c2.24,0,3.48,1.23,3.48,3.48v0.38c0,2.24-1.24,3.48-3.48,3.48H88.54C86.29,40.62,85.06,39.38,85.06,37.14z"/>
                                <path class="st0" d="M144.61,36.44c1.57,2.73,0.89,4.18-2.42,4.18h-1.55c-1.95,0-3.21-0.84-4.07-2.54l-5.53-9.58
                                  c-0.58,0.03-1.17,0.04-1.78,0.04h-4.36v8.6c0,2.24-1.24,3.48-3.48,3.48h-1.36c-2.24,0-3.48-1.24-3.48-3.48V6.26
                                  c0-2.24,1.24-3.48,3.48-3.48h9.36c12.26,0,16.55,4.09,16.55,12.72c0,5.46-2.24,9.45-7.21,11.49L144.61,36.44z M137.65,16.05
                                  c0-4.69-2.62-6.31-8.44-6.31h-4.36v12.57h4.36C135.03,22.31,137.65,20.78,137.65,16.05z"/>
                                <path class="st0" d="M152.43,37.14V6.26c0-2.24,1.24-3.48,3.48-3.48h1.3c2.25,0,3.48,1.24,3.48,3.48v30.88
                                  c0,2.24-1.23,3.48-3.48,3.48h-1.3C153.67,40.62,152.43,39.38,152.43,37.14z"/>
                                <path class="st0" d="M168.48,37.14V6.26c0-2.24,1.24-3.48,3.48-3.48h1.3c2.25,0,3.48,1.24,3.48,3.48v27.02h10.54
                                  c2.25,0,3.48,1.23,3.48,3.48v0.38c0,2.24-1.24,3.48-3.48,3.48h-15.32C169.71,40.62,168.48,39.38,168.48,37.14z"/>
                                <path class="st0" d="M194.03,36.89l5.04-30.93c0.31-2.14,1.6-3.18,3.73-3.18h3.76c2.05,0,3.34,0.99,3.88,2.96l7.97,26.24
                                  l7.97-26.24c0.54-1.97,1.83-2.96,3.88-2.96h3.76c2.12,0,3.41,1.04,3.73,3.18l5.04,30.93c0.35,2.4-0.83,3.73-3.2,3.73h-1.29
                                  c-2.12,0-3.41-1.1-3.69-3.22l-3.86-23.73l-7.52,24.01c-0.56,1.95-1.85,2.94-3.9,2.94h-1.85c-2.05,0-3.34-0.99-3.9-2.94
                                  l-7.52-24.01l-3.86,23.73c-0.28,2.12-1.57,3.22-3.69,3.22h-1.29C194.87,40.62,193.68,39.3,194.03,36.89z"/>
                                <path class="st0" d="M278.46,40.62h-1.44c-2,0-3.29-0.92-3.95-2.84l-1.38-3.74h-16.35l-1.37,3.74c-0.63,1.91-1.95,2.84-3.95,2.84
                                  h-1.39c-2.56,0-3.67-1.64-2.77-4.02l12.39-31.06c0.71-1.9,2.02-2.77,4-2.77h2.47c1.98,0,3.29,0.87,4,2.77l12.43,31.06
                                  C282.09,38.98,280.99,40.62,278.46,40.62z M269.45,27.95l-5.96-16.18l-5.92,16.18H269.45z"/>
                                <path class="st0" d="M283.61,36.39l10.93-15.81l-9.55-13.58c-1.6-2.37-0.68-4.23,2.05-4.23h2.23c1.88,0,3.12,0.74,4.02,2.28
                                  l5.87,8.71l5.78-8.55c0.95-1.65,2.19-2.45,4.07-2.45h2.11c2.84,0,3.82,1.89,2.23,4.23l-9.52,13.56l10.92,15.82
                                  c1.59,2.36,0.68,4.23-2.03,4.23h-2.14c-1.88,0-3.17-0.7-4.13-2.35l-7.27-10.85l-7.26,10.85c-0.96,1.65-2.26,2.35-4.14,2.35h-2.12
                                  C282.92,40.62,282.03,38.76,283.61,36.39z"/>
                              </g>
                              <g>
                                <path class="st0" d="M317.62,7.55c0-3.68,2.46-5.29,5.05-5.29c2.55,0,5.02,1.61,5.02,5.29c0,3.75-2.46,5.3-5.05,5.3
                                  C320.04,12.85,317.62,11.29,317.62,7.55z M326.2,7.54c0-2.48-1.5-3.91-3.56-3.91c-2.13,0-3.6,1.41-3.6,3.91
                                  c0,2.58,1.45,3.94,3.59,3.94C324.71,11.48,326.2,10.12,326.2,7.54z M320.67,9.23v-3.4c0-0.61,0.26-0.89,0.85-0.89h0.96
                                  c1.78,0,2.44,0.64,2.44,1.83c0,0.81-0.34,1.4-1.1,1.69l0.73,0.93c0.33,0.45,0.08,0.72-0.33,0.72h-0.15c-0.44,0-0.67-0.17-0.9-0.53
                                  l-0.67-0.9h-0.38v0.56c0,0.71-0.31,0.86-0.72,0.86C320.91,10.09,320.67,9.87,320.67,9.23z M322.53,7.53
                                  c0.77,0,0.95-0.21,0.95-0.69c0-0.48-0.18-0.67-0.95-0.67h-0.44v1.36H322.53z"/>
                              </g>
                            </g>
                          </svg>
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
