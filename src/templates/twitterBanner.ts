// Función que genera la tarjeta de perfil de Twitter
export const twitterProfileCardBanner = (coverPhoto: string) => {
    // Hardcodeando la información
    const name = 'Example User'; // Hardcodeado
    const username = 'example_user'; // Hardcodeado
    const bio = 'This is an example bio for a Twitter user.'; // Hardcodeado
    const joined = 'January 2020'; // Hardcodeado
    const following = 200; // Hardcodeado
    const followers = 1500; // Hardcodeado
    const profilePictureBackground = '#1DA1F2'; // Color de fondo para la imagen de perfil

    return `
  <div class="twitter-profile-card-twt">
    <div class="cover-photo" style="background-image: url(${coverPhoto});"></div>
    <div class="profile-header-twt">
      <div class="profile-picture-twt" style="background-color: ${profilePictureBackground};"></div>
      <button class="follow-button-twt">Follow</button>
    </div>
    <div class="profile-info-twt">
      <h1>${name}</h1>
      <p class="username">@${username}</p>
      <p class="bio">${bio}</p>
      <p class="joined">
        <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
          <g fill="currentColor">
            <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
          </g>
        </svg>
        Joined ${joined}
      </p>
      <div class="follow-stats-twt">
        <span><strong>${following}</strong> Following</span>
        <span><strong>${followers}</strong> Followers</span>
      </div>
    </div>
  </div>
  
  <style>
    .twitter-profile-card-twt {
      background-color: white;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
  
    .cover-photo {
      background-color: #cfd9de;
      background-size: cover;
      background-position: center;
      height: 200px;
    }
  
    .profile-header-twt {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 12px 16px;
    }
  
    .profile-picture-twt {
      margin-top: -75px;
      border: 4px solid white;
      border-radius: 50%;
      width: 134px;
      height: 134px;
    }
  
    .follow-button-twt {
      background-color: #0f1419;
      color: white;
      border: none;
      border-radius: 9999px;
      padding: 8px 16px;
      font-weight: 700;
      font-size: 15px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
  
    .follow-button-twt:hover {
      background-color: #272c30;
    }
  
    .profile-info-twt {
      padding: 0 16px 16px;
    }
  
    .profile-info-twt h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 800;
      line-height: 24px;
    }
  
    .username {
      margin: 0;
      color: #536471;
      font-size: 15px;
    }
  
    .bio {
      margin: 12px 0;
      font-size: 15px;
      line-height: 20px;
    }
  
    .joined {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #536471;
      font-size: 15px;
      margin: 12px 0;
    }
  
    .follow-stats-twt {
      display: flex;
      gap: 20px;
      font-size: 15px;
      color: #536471;
    }
  
    .follow-stats-twt strong {
      color: #0f1419;
    }
  </style>
  `;
};
