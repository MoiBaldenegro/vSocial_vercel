// Función que genera la tarjeta de perfil de WhatsApp
export const whatsappProfileCard = (profilePicture: string) => {
  // Hardcodeando la información
  const name = 'Example User'; // Hardcodeado
  const phoneNumber = '+123456789'; // Hardcodeado
  const isOnline = true; // Hardcodeado
  const lastSeen = 'Today at 10:00 AM'; // Hardcodeado
  const status = 'This is an example status.'; // Hardcodeado

  return `
  <div class="whatsapp-profile-card-wht">
    <div class="profile-header-wht">
      <img class="profile-picture-wht" src="${profilePicture}" alt="${name}'s profile picture" />
      <div class="profile-info-wht">
        <h1 class="name-wht">${name}</h1>
        <p class="phone-number-wht">${phoneNumber}</p>
        ${isOnline ? '<p class="online-status-wht">online</p>' : lastSeen ? `<p class="last-seen-wht">last seen ${lastSeen}</p>` : ''}
      </div>
    </div>
    <div class="status-section-wht">
      <h2 class="status-heading-wht">About</h2>
      <p class="status-wht">${status}</p>
    </div>
    <div class="action-buttons-wht">
      <button class="action-button-wht chat-wht">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path>
        </svg>
        Message
      </button>
      <button class="action-button-wht call-wht">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
        </svg>
        Call
      </button>
      <button class="action-button-wht video-call-wht">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M15.01 17.38a1 1 0 0 1-1-1v-3.1l-8.38 8.38a1 1 0 0 1-1.41-1.41l8.38-8.38H9.5a1 1 0 0 1-1-1V3.5c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-4.1v2.38a1 1 0 0 1-1 1zM5.12 16.3l3.88-3.88v-1.42H5.12v5.3z"></path>
        </svg>
        Video Call
      </button>
    </div>
  </div>
  
  <style>
    .whatsapp-profile-card-wht {
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
  
    .profile-header-wht {
      background-color: #075e54;
      color: #ffffff;
      padding: 20px;
      display: flex;
      align-items: center;
    }
  
    .profile-picture-wht {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 15px;
    }
  
    .profile-info-wht {
      flex-grow: 1;
    }
  
    .name-wht {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
  
    .phone-number-wht {
      font-size: 14px;
      margin: 4px 0;
      opacity: 0.8;
    }
  
    .online-status-wht, .last-seen-wht {
      font-size: 12px;
      margin: 2px 0;
      opacity: 0.8;
    }
  
    .status-section-wht {
      padding: 15px 20px;
      border-bottom: 1px solid #e0e0e0;
    }
  
    .status-heading-wht {
      font-size: 14px;
      color: #075e54;
      margin: 0 0 5px 0;
    }
  
    .status-wht {
      font-size: 16px;
      margin: 0;
      color: #303030;
    }
  
    .action-buttons-wht {
      display: flex;
      justify-content: space-around;
      padding: 15px;
    }
  
    .action-button-wht {
      background-color: transparent;
      border: none;
      color: #075e54;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }
  
    .action-button-wht svg {
      margin-bottom: 5px;
    }
  </style>
  `;
};
