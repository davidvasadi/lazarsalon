import { NotFoundContent } from '@/components/not-found-content';

// 404 for addresses outside the site structure (e.g. /hu/a/b/c)
export default function NotFound() {
  return <NotFoundContent />;
}
