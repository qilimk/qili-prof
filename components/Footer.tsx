export default function Footer() {
  return (
    <footer className="py-10 text-sm text-gray-600">
      <hr className="border-gray-200" />
      <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Jane Doe.</p>
        <p>Minimal React re-implementation inspired by the reference site’s structure. </p>
      </div>
    </footer>
  );
}
