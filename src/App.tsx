import React from 'react'

export default function App() {
  return (
    <>
      <header>
        <h1>
          <img src="*" alt="Logo" />
          <span>Coding Conf</span>
        </h1>
        <hgroup>
          <h2>Your journey to Coding Conf 2025 starts here!</h2>
          <p>Secure your spot at next year's biggest coding conference.</p>
        </hgroup>
      </header>
      <main>
        <form>
          <label>
            <span>Upload Avatar</span>
            <input type="file" name="avatar" accept="image/png, image/jpeg" />
            <div>
              <img src="*" alt="info" />
              <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
            </div>
          </label>
          <label>
            <span>Full Name</span>
            <input type="text" name="fullName" />
          </label>
          <label>
            <span>Email Address</span>
            <input type="email" name="email" placeholder="example@email.com" />
          </label>
          <label>
            <span>GitHub Username</span>
            <input type="text" name="ghUsername" placeholder="@yourusername" />
          </label>
          <input type="submit" value="Generate My Ticket" />
        </form>
      </main>
    </>
  );
}