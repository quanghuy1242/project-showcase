import React, { Component } from 'react';
import { 
  DocumentCard, 
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import { AppContext } from '../../AppContext';

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
        // width: 300,
        height: 200
      }]
    };
    return (
      <DocumentCard 
        onClickHref={this.props.href} 
        style={{
          width: '100%',
          maxWidth: 'inherit' // Do cái component này giới hạn max-width: 320px
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
              name: this.context.name,
              profileImageSrc: this.context.image
            }
          ]}
        />
      </DocumentCard>
    );
  }
}
ProjectItem.contextType = AppContext;

export default ProjectItem;