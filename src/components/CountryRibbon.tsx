import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

export const CountryRibbon = () => {
  return (
    <Link
      to="/international"
      className="fixed top-16 right-0 z-40 bg-primary text-primary-foreground px-6 py-2 shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2 rounded-l-md"
      title="View international voting ages"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-semibold">🇺🇸 United States</span>
    </Link>
  );
};
