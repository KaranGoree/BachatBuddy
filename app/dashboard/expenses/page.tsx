import dynamic from "next/dynamic";

// Completely disable SSR for this page to avoid prerendering errors
const ExpensesContent = dynamic(
  () => import("./expenses-content"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading expenses...</p>
        </div>
      </div>
    ),
  }
);

export default function ExpensesPage() {
  return <ExpensesContent />;
}