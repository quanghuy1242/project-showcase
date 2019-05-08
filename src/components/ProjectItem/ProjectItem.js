import React, { Component } from 'react';
import { 
  DocumentCard, 
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import LocalUser from '../../LocalUser';

class ProjectItem extends Component {
  render() {
    const projectContent = {
      previewImages: [{
        name: this.props.name,
        linkProps: {
          href: this.props.href
        },
        previewImageSrc: this.props.image,
        imageFit: ImageFit.cover,
        width: 300,
        height: 200
      }]
    };
    return (
      <DocumentCard 
        onClickHref={this.props.href} 
        style={{
          marginRight: '0.5rem',
          marginBottom: '0.5rem'
        }}
      >
        <DocumentCardPreview {...projectContent} />
        <DocumentCardTitle
          title={this.props.name}
          shouldTruncate={true}
        />
        <DocumentCardActivity
          activity="Vài phút trước"
          people={[
            {
              name: LocalUser.name,
              profileImageSrc: LocalUser.image
            }
          ]}
        />
      </DocumentCard>
    );
  }
}

export default ProjectItem;