import { Skeleton } from "@/components/ui/skeleton";

export function AvatarFallbackSection() {
  return (
    <div className="relative">
      <Skeleton className="h-10 w-10 rounded-full" />
    </div>
  );
}
