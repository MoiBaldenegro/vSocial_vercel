export const linkedinProfileCard = (url) => {

    return `
<div class="linkedin-profile-card-l">
  <div class="cover-photo-l" style="background-color: #a0b4b7;"></div>
  <div class="profile-content-l">
    <div class="profile-picture-l">
      <img src="${url}" />
    </div>
    <div class="profile-info-l">
      <h1>Profile Name</h1>
      <p class="headline-l">Headline</p>
      <p class="location-l">Location</p>
      <p class="connections-l">123 connections</p>
      <div class="current-position-l">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
          <path d="M20 6h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm-8 0h-4V4h4v2z"></path>
        </svg>
        <span>Current Position</span>
      </div>
    </div>
    <div class="action-buttons-l">
      <button class="connect-button-l">Connect</button>
      <button class="message-button-l">Message</button>
      <button class="more-button-l">More</button>
    </div>
  </div>
</div>

<style>
  .linkedin-profile-card-l {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 15px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  }

  .cover-photo-l {
    background-color: #a0b4b7;
    background-size: cover;
    background-position: center;
    height: 200px;
  }

  .profile-content-l {
    padding: 24px;
    position: relative;
  }

  .profile-picture-l {
    position: absolute;
    top: -90px;
    left: 24px;
    border: 4px solid white;
    border-radius: 50%;
    width: 160px;
    height: 160px;
    overflow: hidden;
  }

  .profile-picture-l img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-info-l {
    margin-top: 70px;
  }

  .profile-info-l h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
  }

  .headline-l {
    margin: 4px 0;
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.9);
  }

  .location-l, .connections-l {
    margin: 4px 0;
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.6);
  }

  .current-position-l {
    display: flex;
    align-items: center;
    margin-top: 8px;
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.9);
  }

  .current-position-l svg {
    margin-right: 8px;
    color: rgba(0, 0, 0, 0.6);
  }

  .action-buttons-l {
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }

  .connect-button-l, .message-button-l, .more-button-l {
    padding: 6px 16px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 16px;
    cursor: pointer;
  }

  .connect-button-l {
    background-color: #0a66c2;
    color: white;
    border: none;
  }

  .message-button-l{
    background-color: white;
    color: #0a66c2;
    border: 1px solid #0a66c2;
  }

  .more-button-l {
    background-color: white;
    color: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.6);
  }

  .connect-button-l:hover {
    background-color: #004182;
  }

  .message-button-l:hover, .more-button-l:hover {
    background-color: rgba(112, 181, 249, 0.2);
    box-shadow: inset 0 0 0 1px #0a66c2;
  }
</style>
`;
}