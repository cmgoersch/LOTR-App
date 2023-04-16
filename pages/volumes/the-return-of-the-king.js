import Link from "next/link";
import { volumes } from "../../lib/data";

export default function TheReturnOfTheKingPage() {
  const thisBook = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <div>
      <h1>{thisBook.title}</h1>
      <e>{thisBook.description}</e>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
