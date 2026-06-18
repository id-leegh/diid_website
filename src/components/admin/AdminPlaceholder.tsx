export function AdminPlaceholder({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-4 rounded-xl border border-dashed border-border bg-white p-12 text-center text-muted">
        {title} 기능은 Supabase 연동 후 활성화됩니다.
      </p>
    </div>
  );
}
