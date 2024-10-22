function formatNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Función que genera la tarjeta de perfil de Twitch
export const twitchProfileCard = (url: string) => {
    // Hardcodeando la información
    const displayName = 'ExampleStreamer'; // Hardcodeado
    const username = 'example_user'; // Hardcodeado
    const followers = 1500; // Hardcodeado
    const bio = 'This is an example bio for a Twitch streamer.'; // Hardcodeado
    const isLive = true; // Hardcodeado
    const streamTitle = 'Playing an exciting game!'; // Hardcodeado
    const gameName = 'Example Game'; // Hardcodeado
    const viewerCount = 300; // Hardcodeado

    return `
  <div class="twitch-profile-card-tw">
    <div class="profile-header-tw">
      <img class="profile-picture-tw" src="${url}" alt="${displayName}'s profile picture" />
      <div class="profile-info-tw">
        <h1 class="display-name-tw">${displayName}</h1>
        <p class="username-tw">@${username}</p>
        <p class="followers-tw">${formatNumber(followers)} followers</p>
      </div>
      <button class="follow-button-tw">Follow</button>
    </div>
    <p class="bio-tw">${bio}</p>
    ${isLive ? `
      <div class="stream-info-tw">
        <div class="live-indicator-tw">LIVE</div>
        <h2 class="stream-title-tw">${streamTitle}</h2>
        <p class="game-name-tw">${gameName}</p>
        <p class="viewer-count-tw">${formatNumber(viewerCount || 0)} viewers</p>
      </div>
    ` : ''}
  </div>
  
  <style>
    .twitch-profile-card-tw {
      background-color: #0e0e10;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      font-family: 'Roobert', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #efeff1;
      padding: 20px;
    }
  
    .profile-header-tw {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
  
    .profile-picture-tw {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 15px;
    }
  
    .profile-info-tw {
      flex-grow: 1;
    }
  
    .display-name-tw {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
  
    .username-tw {
      font-size: 14px;
      color: #adadb8;
      margin: 2px 0;
    }
  
    .followers-tw {
      font-size: 14px;
      color: #adadb8;
      margin: 2px 0;
    }
  
    .follow-button-tw {
      background-color: #9147ff;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s;
    }
  
    .follow-button-tw:hover {
      background-color: #772ce8;
    }
  
    .bio-tw {
      font-size: 14px;
      line-height: 1.4;
      margin-bottom: 15px;
    }
  
    .stream-info-tw {
      background-color: #18181b;
      border-radius: 6px;
      padding: 12px;
      margin-top: 15px;
    }
  
    .live-indicator-tw {
      display: inline-block;
      background-color: #eb0400;
      color: white;
      font-size: 12px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      margin-bottom: 8px;
    }
  
    .stream-title-tw {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 4px 0;
    }
  
    .game-name-tw {
      font-size: 14px;
      color: #adadb8;
      margin: 0 0 4px 0;
    }
  
    .viewer-count-tw {
      font-size: 14px;
      color: #adadb8;
      margin: 0;
    }
  </style>
  `;
};
