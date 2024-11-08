import './FlexLayout.css';

export const FlexLayout = () => {
  return (
    <div className="container">
      <div className="header">Header</div>

      <div className="content">
        <div className="side">
          <div className="hero">Hero</div>
          <div className="side-content">Sidebar</div>
        </div>

        <div className="main">
          <div className="main-content">Main Content</div>
          <div className="extra-content">Extra Content</div>
        </div>
      </div>
     
      <div className="related">
        <div className="related-images">Related Images</div>
        <div className="related-posts">Related Posts</div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}