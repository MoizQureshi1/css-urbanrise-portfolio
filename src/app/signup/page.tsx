import Footer from "../component/footer";
import "./globals.css"

export default function Signup() {
  return (
    <main className="signup">
    <div className="main-signup">
      <form>
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
      <Footer/>
    </main>
  );
}