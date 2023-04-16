import Link from "next/link";
import { introduction } from "../lib/data";

export default function LOTR() {
  return (
    <div>
      <h1>Lord of the Rings Page</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The return of the King
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The two Towers</Link>
        </li>
      </ul>
    </div>
  );
}
