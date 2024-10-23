// Función que genera la tarjeta de perfil de YouTube con el banner como parámetro
export const youtubeProfileCardBanner = (bannerImage: string) => {
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
  <div class="youtube-profile-card-yt-banner">
    <div class="banner" style="background-image: url(${bannerImage});"></div>
    <div class="profile-content">
      <div class="profile-picture-container"></div>
      <div class="channel-info-yt-banner">
        <h1 class="channel-name-yt-banner">${channelName}</h1>
        <p class="username-yt-banner">@${username}</p>
        <p class="stats-yt-banner">
          <span class="subscribers-yt-banner">${formatSubscribers(subscribers)} subscribers</span>
          <span class="video-count-yt-banner">${videoCount} videos</span>
        </p>
        <p class="description-yt-banner">${description}</p>
      </div>
      <button class="subscribe-button-yt-banner">Subscribe</button>
    </div>
  </div>
  
  <style>
    .youtube-profile-card-yt-banner {
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
      background-size: cover;
      background-position: center;
    }
  
    .profile-content {
      display: flex;
      padding: 16px;
      position: relative;
    }
  
    .profile-picture-container {
      width: 90px;
      height: 90px;
      background-color: #cc0000; /* Fondo de color para la foto de perfil */
      border-radius: 50%;
      margin-right: 24px;
    }
  
    .channel-info-yt-banner {
      flex-grow: 1;
    }
  
    .channel-name-yt-banner {
      font-size: 24px;
      font-weight: 500;
      margin: 0 0 4px 0;
      color: #030303;
    }
  
    .username-yt-banner {
      font-size: 14px;
      color: #606060;
      margin: 0 0 8px 0;
    }
  
    .stats-yt-banner {
      font-size: 14px;
      color: #606060;
      margin: 0 0 8px 0;
    }
  
    .stats-yt-banner span:not(:last-child)::after {
      content: "•";
      margin: 0 4px;
    }
  
    .description-yt-banner {
      font-size: 14px;
      color: #030303;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  
    .subscribe-button-yt-banner {
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
  
    .subscribe-button-yt-banner:hover {
      background-color: #b00000;
    }
  
    @media (max-width: 600px) {
      .profile-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
  
      .profile-picture-container {
        margin-right: 0;
        margin-bottom: 16px;
      }
  
      .subscribe-button-yt-banner {
        position: static;
        margin-top: 16px;
      }
    }
  </style>
  `;
};
