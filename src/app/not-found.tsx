import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="space-y-6 max-w-md">
        <p className="text-5xl font-mono text-accent font-bold">404</p>
        <h1 className="text-2xl font-bold text-foreground">Route Not Found</h1>
        <p className="text-muted text-sm">
          The project or page you requested does not exist or has been relocated.
        </p>
        <div>
          <Link href="/">
            <Button variant="primary">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}