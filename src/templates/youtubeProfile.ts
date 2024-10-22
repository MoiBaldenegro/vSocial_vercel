// Función que genera la tarjeta de perfil de YouTube
export const youtubeProfileCard = (profilePicture: string) => {
    // Hardcodeando la información
    const channelName = 'Example Channel'; // Hardcodeado
    const username = 'exampleuser'; // Hardcodeado
    const subscribers = 1000; // Hardcodeado
    const videoCount = 50; // Hardcodeado
    const description = 'This is an example description for the YouTube channel.'; // Hardcodeado

    const formatSubscribers = (subCount) => {
        return subCount.toLocaleString(); // Formatear los suscriptores
    };

    return `
  <div class="youtube-profile-card-ty">
    <div class="banner" style="background-color: #f5f5f5;"></div>
    <div class="profile-content">
      <img class="profile-picture-ty" src="${profilePicture}" alt="${channelName}'s profile picture" />
      <div class="channel-info-ty">
        <h1 class="channel-name-ty">${channelName}</h1>
        <p class="username-ty">@${username}</p>
        <p class="stats-ty">
          <span class="subscribers-ty">${formatSubscribers(subscribers)} subscribers</span>
          <span class="video-count-ty">${videoCount} videos</span>
        </p>
        <p class="description-ty">${description}</p>
      </div>
      <button class="subscribe-button-ty">Subscribe</button>
    </div>
  </div>
  
  <style>
    .youtube-profile-card-ty {
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      overflow: hidden;
      font-family: 'Roboto', Arial, sans-serif;
    }
  
    .banner {
      height: 200px;
      background-color: #f5f5f5; /* Color de fondo */
    }
  
    .profile-content {
      display: flex;
      padding: 16px;
      position: relative;
    }
  
    .profile-picture-ty {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 24px;
    }
  
    .channel-info-ty {
      flex-grow: 1;
    }
  
    .channel-name-ty {
      font-size: 24px;
      font-weight: 500;
      margin: 0 0 4px 0;
      color: #030303;
    }
  
    .username-ty {
      font-size: 14px;
      color: #606060;
      margin: 0 0 8px 0;
    }
  
    .stats-ty {
      font-size: 14px;
      color: #606060;
      margin: 0 0 8px 0;
    }
  
    .stats-ty span:not(:last-child)::after {
      content: "•";
      margin: 0 4px;
    }
  
    .description-ty {
      font-size: 14px;
      color: #030303;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  
    .subscribe-button-ty {
      background-color: #cc0000;
      color: white;
      border: none;
      border-radius: 2px;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      text-transform: uppercase;
      position: absolute;
      top: 16px;
      right: 16px;
    }
  
    .subscribe-button-ty:hover {
      background-color: #b00000;
    }
  
    @media (max-width: 600px) {
      .profile-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
  
      .profile-picture-ty {
        margin-right: 0;
        margin-bottom: 16px;
      }
  
      .subscribe-button-ty {
        position: static;
        margin-top: 16px;
      }
    }
  </style>
  `;
};
