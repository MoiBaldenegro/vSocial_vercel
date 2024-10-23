export const linkedinProfileCardBanner = (coverPhoto: string) => {
    // Hardcodeando la información
    const name = 'Profile Name'; // Hardcodeado
    const headline = 'Software Engineer at Example Corp'; // Hardcodeado
    const location = 'San Francisco, CA'; // Hardcodeado
    const connections = 500; // Hardcodeado
    const currentPosition = 'Software Engineer at Example Corp'; // Hardcodeado
  
    return `
  <div class="linkedin-profile-card-lkn-banner">
    <div class="cover-photo-lkn-banner" style="background-image: url(${coverPhoto});"></div>
    <div class="profile-content-lkn-banner">
      <div class="profile-picture-lkn-banner"></div> <!-- Fondo color sólido -->
      <div class="profile-info-lkn-banner">
        <h1>${name}</h1>
        <p class="headline-lkn-banner">${headline}</p>
        <p class="location-lkn-banner">${location}</p>
        <p class="connections-lkn-banner">${connections} connections</p>
        <div class="current-position-lkn-banner">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
            <path d="M20 6h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm-8 0h-4V4h4v2z"></path>
          </svg>
          <span>${currentPosition}</span>
        </div>
      </div>
      <div class="action-buttons-lkn-banner">
        <button class="connect-button-lkn-banner">Connect</button>
        <button class="message-button-lkn-banner">Message</button>
        <button class="more-button-lkn-banner">More</button>
      </div>
    </div>
  </div>
  
  <style>
    .linkedin-profile-card-lkn-banner {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 15px rgba(0, 0, 0, 0.15);
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      overflow: hidden;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
    }
  
    .cover-photo-lkn-banner {
      background-color: #a0b4b7;
      background-size: cover;
      background-position: center;
      height: 200px;
    }
  
    .profile-content-lkn-banner {
      padding: 24px;
      position: relative;
    }
  
    .profile-picture-lkn-banner {
      position: absolute;
      top: -90px;
      left: 24px;
      border: 4px solid white;
      border-radius: 50%;
      width: 160px;
      height: 160px;
      background-color: #0073b1; /* Fondo de color sólido */
    }
  
    .profile-info-lkn-banner {
      margin-top: 70px;
    }
  
    .profile-info-lkn-banner h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
    }
  
    .headline-lkn-banner {
      margin: 4px 0;
      font-size: 16px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.9);
    }
  
    .location-lkn-banner, .connections-lkn-banner {
      margin: 4px 0;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.6);
    }
  
    .current-position-lkn-banner {
      display: flex;
      align-items: center;
      margin-top: 8px;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.9);
    }
  
    .current-position-lkn-banner svg {
      margin-right: 8px;
      color: rgba(0, 0, 0, 0.6);
    }
  
    .action-buttons-lkn-banner {
      display: flex;
      gap: 8px;
      margin-top: 16px;
    }
  
    .connect-button-lkn-banner, .message-button-lkn-banner, .more-button-lkn-banner {
      padding: 6px 16px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 16px;
      cursor: pointer;
    }
  
    .connect-button-lkn-banner {
      background-color: #0a66c2;
      color: white;
      border: none;
    }
  
    .message-button-lkn-banner {
      background-color: white;
      color: #0a66c2;
      border: 1px solid #0a66c2;
    }
  
    .more-button-lkn-banner {
      background-color: white;
      color: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(0, 0, 0, 0.6);
    }
  
    .connect-button-lkn-banner:hover {
      background-color: #004182;
    }
  
    .message-button-lkn-banner:hover, .more-button-lkn-banner:hover {
      background-color: rgba(112, 181, 249, 0.2);
      box-shadow: inset 0 0 0 1px #0a66c2;
    }
  </style>
  `;
  };
  