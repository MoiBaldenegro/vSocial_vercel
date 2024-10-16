type param = number | string | null;

export default function facebookView(
  name: string,
  profilePicture: string,
  coverPhoto: string | null,
  friendCount: number
) {
  const stylesInCoverPhoto = coverPhoto
    ? `style="background-image: url(${coverPhoto});"`
    : `style="background-color: #3b5998;"`;

  return `
    <div class="profile-card">
      <div class="cover-photo" ${stylesInCoverPhoto}>
        <a class="edit-cover-photo">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h16v12zM12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
          </svg>
          Edit Cover Photo
        </a>
      </div>
      <div class="profile-picture">
        <img src="${profilePicture}" style="background-color: #3b5998;" />
        <a class="edit-profile-picture">
          <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
            <path d="M15.75 10.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
          </svg>
        </a>
      </div>
      <div class="profile-info">
        <h1>${name}</h1>
        <p class="friends">${friendCount} friends</p>
        <div class="action-buttons">
          <a class="primary-button">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8 6.5a.5.5 0 01.5.5v1.5H10a.5.5 0 010 1H8.5V11a.5.5 0 01-1 0V9.5H6a.5.5 0 010-1h1.5V7a.5.5 0 01.5-.5z"></path>
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"></path>
            </svg>
            Add to story
          </a>
          <a class="secondary-button">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 017 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 01-.014.002H7.022zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 004 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0z"></path>
            </svg>
            Edit profile
          </a>
        </div>
      </div>
    </div>
    <style>
      .profile-card {
        position: relative;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        overflow: hidden;
      }

      .cover-photo {
        background-color: #f0f2f5;
        background-size: cover;
        background-position: center;
        height: 200px;
        position: relative;
      }

      .edit-cover-photo {
        position: absolute;
        right: 15px;
        bottom: 15px;
        background-color: white;
        border: none;
        border-radius: 6px;
        color: #050505;
        cursor: pointer;
        font-weight: 600;
        padding: 6px 10px;
        font-size: 13px;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .profile-picture {
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-50%);
      }

      .profile-picture img {
        border: 4px solid white;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        object-fit: cover;
      }

      .edit-profile-picture {
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #e4e6eb;
        border: none;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .profile-info {
        padding: 15px;
        margin-top: 70px;
        text-align: center;
      }

      .profile-info h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        color: #050505;
      }

      .friends {
        margin: 8px 0;
        color: #65676b;
        font-size: 14px;
      }

      .action-buttons {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 15px;
      }

      .primary-button,
      .secondary-button {
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        padding: 8px 10px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .primary-button {
        background-color: #1b74e4;
        color: white;
      }

      .secondary-button {
        background-color: #e4e6eb;
        color: #050505;
      }

      .primary-button:hover {
        background-color: #1877f2;
      }

      .secondary-button:hover {
        background-color: #d8dadf;
      }
    </style>
  `;
}
