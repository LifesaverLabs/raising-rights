import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-primary">Raising Rights</h3>
            <p className="text-sm text-muted-foreground">
              Designing the Future Together
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Learn</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/the-case" className="hover:text-foreground transition-colors">
                  The Case for 14
                </Link>
              </li>
              <li>
                <Link to="/objections" className="hover:text-foreground transition-colors">
                  Frequent Objections
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Engage</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/take-action" className="hover:text-foreground transition-colors">
                  Take Action
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://studentvote.us" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  StudentVote.us
                </a>
              </li>
              <li>
                <a 
                  href="https://www.civicreligion.us" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Civic Religion
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Raising Rights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
