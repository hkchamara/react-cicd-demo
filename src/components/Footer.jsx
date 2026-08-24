export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>ShoeStore</h3>
          <p>Step into style with comfortable shoes for every occasion.</p>
        </div>

        <div>
          <h4>Shop</h4>
          <p>Running</p>
          <p>Casual</p>
          <p>Sports</p>
          <p>Formal</p>
        </div>

        <div>
          <h4>Project</h4>
          <p>React + Vite</p>
          <p>Jenkins CI</p>
          <p>GitHub</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ShoeStore. Demo e-commerce project.
      </div>
    </footer>
  );
}