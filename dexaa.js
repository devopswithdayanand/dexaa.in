import React from "react";
import "./App.css";

function App() {
  return (
    <div>

      {/* HERO */}
      <header className="hero">
        <h1>DEXAA</h1>
        <h3>DevOps as a Service</h3>
        <p>
          We manage your cloud & DevOps, so you can focus on building your product.
        </p>
        <button>Get Free Infrastructure Audit</button>
      </header>

      {/* WHO WE HELP */}
      <section>
        <h2>Who We Help</h2>
        <div className="grid">
          {["Startups","SaaS","Small Teams","Growing Businesses"].map(item=>(
            <div className="card" key={item}>{item}</div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="dark">
        <h2>Our Services</h2>
        <div className="grid">
          <Service title="DevOps as a Service" 
            points={["CI/CD","Docker & K8s","Automation"]}/>
          <Service title="Cloud Setup" 
            points={["AWS","Azure","GCP","Auto scaling"]}/>
          <Service title="Maintenance" 
            points={["Monitoring","Backups","SSL"]}/>
          <Service title="Cost Optimization" 
            points={["Billing","Reports","Savings"]}/>
        </div>
      </section>

      {/* PRICING */}
      <section>
        <h2>Pricing</h2>
        <div className="grid">
          <Price title="Starter" text="For MVPs" />
          <Price title="Growth" text="Scaling startups" />
          <Price title="Scale" text="High traffic apps" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="dark">
        <h2>Contact Us</h2>
        <form onSubmit={send}>
          <input placeholder="Name" required />
          <input placeholder="Email" required />
          <textarea placeholder="Message" required />
          <button>Send</button>
        </form>
      </section>

      <footer>
        <p>contact@dexaa.in</p>
        <p>+91-XXXXXXXXXX</p>
      </footer>

    </div>
  );
}

function Service({title,points}){
  return(
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {points.map(p=><li key={p}>{p}</li>)}
      </ul>
    </div>
  )
}

function Price({title,text}){
  return(
    <div className="price">
      <h3>{title}</h3>
      <p>{text}</p>
      <button>Get Quote</button>
    </div>
  )
}

function send(e){
  e.preventDefault();
  alert("Message sent! We'll contact you soon.");
}

export default App;
