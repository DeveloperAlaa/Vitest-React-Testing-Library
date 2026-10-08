export default function Signin() {
  return (
    <form>
      <h2>SignIn Form</h2>
      <h3>Create a new account for free</h3>

      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>

      <div>
        <input type="number" value={20} onChange={() => {}} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password" id="password" />
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <input type="text" placeholder="Enter your bio..." id="bio" />
      </div>

      <div>
        <p>By submiting your data you are accepting our terms and conditions</p>
      </div>
      <button>Submit</button>
    </form>
  );
}
