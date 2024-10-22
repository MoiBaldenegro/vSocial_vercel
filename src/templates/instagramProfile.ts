export function renderInstagramProfile(
  url
): string {
  const username = 'moises123';
  const posts = 50;
  const followers = 1200;
  const following = 300;
  const fullName = 'Moises Pérez';
  const bio = 'Amante de la tecnología y el café ☕';

  return `
      <div class="instagram-profile-card-ins">
  <div class="profile-header-ins">
    <div class="profile-picture-ins">
      <img src="${url}" alt="altr" />
    </div>
    <div class="profile-stats-ins">
      <h2>Username</h2>
      <div class="stats-ins">
        <div class="stat-item-ins"><strong>123</strong> posts</div>
        <div class="stat-item-ins"><strong>1236</strong> followers</div>
        <div class="stat-item-ins"><strong>456</strong> following</div>
      </div>
      <div class="action-buttons-ins">
        <button class="follow-button-ins">Follow</button>
        <button class="message-button-ins">Message</button>
        <button class="more-options-button-ins">
          <svg aria-label="More options" class="_8-yf5 " color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16">
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="profile-info-ins">
    <h1>Moises Bgro.</h1>
    <p>Amante de la tecnología y el café ☕</p>
    <p>Comunidad Midudev 💙 </p>
    <p>Powered by Cloudinary 💙 </p>
    
  </div>
</div>

<style>
  .instagram-profile-card-ins {
  color: black !important;
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 16px;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  .profile-header-ins {
    display: flex;
    margin-bottom: 20px;
  }

  .profile-picture-ins {
    width: 150px;
    height: 150px;
    margin-right: 30px;
  }

  .profile-picture-ins img {
    width: 100px;
       height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  .profile-stats-ins {
    flex-grow: 1;
  }

  .profile-stats-ins h2 {
    font-size: 28px;
    font-weight: 300;
    margin: 0 0 20px;
  }

  .stats-ins {
    display: flex;
    margin-bottom: 20px;
  }

  .stat-item-ins {
    margin-right: 40px;
    font-size: 16px;
  }

  .stat-item-ins strong {
    font-weight: 600;
  }

  .action-buttons-ins {
    display: flex;
    gap: 8px;
  }

  .follow-button-ins, .message-button-ins {
    background-color: #0095f6;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 9px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }

  .message-button-ins {
    background-color: transparent;
    color: #262626;
    border: 1px solid #dbdbdb;
  }

  .more-options-button-ins {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
  }

  .profile-info-ins h1 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 5px;
  }

  .profile-info-ins p {
    font-size: 14px;
    margin: 0;
    white-space: pre-wrap;
  }

  @media (max-width: 736px) {
    .profile-header-ins {
      flex-direction: column;
      align-items: center;
    }

    .profile-picture-ins {
      margin-right: 0;
      margin-bottom: 20px;
    }

    .profile-stats-ins {
      text-align: center;
    }

    .stats-ins {
      justify-content: center;
    }
  }
</style>
`;
}

/*

export function renderInstagramProfile(
  url
): string {
  const username = 'moises123';
  const posts = 50;
  const followers = 1200;
  const following = 300;
  const fullName = 'Moises Pérez';
  const bio = 'Amante de la tecnología y el café ☕';

  return `
      <div class="instagram-profile-card">
  <div class="profile-header" >
   
    <div class="profile-stats">
      <h2 >
        <img src="${url}" alt="altr" />
      Username
      </h2>
      <div class="stats">
        <div class="stat-item"><strong>123</strong> posts</div>
        <div class="stat-item"><strong>1236</strong> followers</div>
        <div class="stat-item"><strong>456</strong> following</div>
      </div>
      <div class="action-buttons">
        <button class="follow-button">Follow</button>
        <button class="message-button">Message</button>
        <button class="more-options-button">
          <svg aria-label="More options" class="_8-yf5 " color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16">
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="profile-info">
    <h1>Moises Bgro.</h1>
    <p>Amante de la tecnología y el café ☕</p>
  </div>
</div>

<style>
  .instagram-profile-card {
    background-color: white;
    color: black !important;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding:  16px;
    max-width: 600px;
    width: 100%;
    height: 80%;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  .profile-header {
    display: flex;
    margin-bottom: 20px;
  }

  .profile-picture {
    width: 150px;
    height: 150px;
    margin-right: 30px;
  }


  .profile-stats {

    flex-grow: 1;
  }

  .profile-stats h2 {
  display: flex;
  align-items: center;
  gap: 32px;
    font-size: 28px;
    font-weight: 300;
    margin: 0 0 20px;

    img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
  }

  .stats {
    display: flex;
    margin-bottom: 20px;
  }

  .stat-item {
    margin-right: 40px;
    font-size: 16px;
  }

  .stat-item strong {
    font-weight: 600;
  }

  .action-buttons {
    display: flex;
    gap: 8px;
  }

  .follow-button, .message-button {
    background-color: #0095f6;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 9px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }

  .message-button {
    background-color: transparent;
    color: #262626;
    border: 1px solid #dbdbdb;
  }

  .more-options-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
  }

  .profile-info h1 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 5px;
  }

  .profile-info p {
    font-size: 14px;
    margin: 0;
    white-space: pre-wrap;
  }

  @media (max-width: 736px) {
    .profile-header {
      flex-direction: column;
      align-items: center;
    }

    .profile-picture {
      margin-right: 0;
      margin-bottom: 20px;
    }

    .profile-stats {
      text-align: center;
    }

    .stats {
      justify-content: center;
    }
  }
</style>
`;
}


*/
