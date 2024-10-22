export const discordProfileCard = (url) => {
    const bannerColor = '#7289da'; // Hardcodeado
    const username = 'ExampleUser'; // Hardcodeado
    const discriminator = '1234'; // Hardcodeado
    const customStatus = 'Playing a game'; // Hardcodeado
    const status = 'online'; // Hardcodeado
    const statusColors = {
        online: '#43b581',
        idle: '#faa61a',
        dnd: '#e03e3e',
        offline: '#747f8d',
    };
    const badges = ["ONLINE"]; // Hardcodeado
    // agregaremos emojis en los estados
    return `
<div class="discord-profile-card-ds">
  <div class="banner-ds" style="background-color: ${bannerColor};"></div>
  <div class="profile-content-ds">
    <div class="avatar-container-ds">
      <img class="avatar-ds" src="${url}" alt="${username}'s avatar" />
      <div class="status-indicator-ds" style="background-color: ${statusColors[status]};"></div>
    </div>
    <div class="user-info-ds">
      <h1 class="username-ds">${username}<span class="discriminator-ds">#${discriminator}</span></h1>
      ${customStatus ? `<p class="custom-status-ds">${customStatus}</p>` : ''}
      <div class="badges-ds">
        ${badges.map(badge => `<img class="badge-ds" src="${badge}.png" alt="${badge}" title="${badge}" />`).join('')}
      </div>
    </div>
    <button class="message-button-ds">Message</button>
  </div>
</div>

<style>
.discord-profile-card-ds {
    background-color: #36393f;
    border-radius: 8px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    font-family: 'Whitney', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  

  .banner-ds {
    height: 120px;
  }

  .profile-content-ds {
    padding: 16px;
    position: relative;
  }

  .avatar-container-ds {
    position: absolute;
    top: -50px;
    left: 16px;
  }

  .avatar-ds {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 6px solid #36393f;
  }

  .status-indicator-ds {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid #36393f;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .user-info-ds {
    margin-top: 30px;
  }

  .username-ds {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }

  .discriminator-ds {
    color: #b9bbbe;
    font-weight: 400;
  }

  .custom-status-ds {
    color: #b9bbbe;
    font-size: 14px;
    margin: 4px 0;
  }

  .badges-ds {
    display: flex;
    gap: 4px;
    margin-top: 8px;
  }

  .badge-ds {
    width: 22px;
    height: 22px;
  }

  .message-button-ds {
    background-color: #4f545c;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 16px;
    transition: background-color 0.2s;
  }

  .message-button-ds:hover {
    background-color: #5d6269;
  }
</style>
`;
};
