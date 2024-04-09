import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h4>INFO</h4>
          <ul>
            <li>Formats</li>
            <li>FAQ</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <ul>
            <li>Tools</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h4>Subscribe to our email</h4>
          <button>Subscribe</button>
          <div>
          <button>Facebook </button>
          <br />
          <button>Twitter</button>
          <br />
          <button>Instagram</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
