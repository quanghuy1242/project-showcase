import React, { Component } from 'react';
import { 
  DocumentCard, 
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Link } from 'react-router-dom';
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
        height: 200
      }]
    };
    return (
      <Link style={{width: '100%', textDecoration: 'none'}} to={this.props.href}>
        <DocumentCard 
          onClick={() => {}} 
          style={{
            maxWidth: 'inherit', // Do cái component này giới hạn max-width: 320px
            outline: 'none',
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
      </Link>
    );
  }
}
ProjectItem.contextType = AppContext;

export default ProjectItem;