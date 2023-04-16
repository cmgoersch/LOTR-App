import Link from "next/link";
import { volumes } from "../../lib/data";

export default function TheFellowShipOfTheRingPage() {
  const thisBook = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <h1>{thisBook.title}</h1>
      <p>{thisBook.description}</p>
      <ul>
        <li>
          {thisBook.books[0].ordinal}: {thisBook.books[0].title}
        </li>
        <li>
          {" "}
          {thisBook.books[1].ordinal}: {thisBook.books[1].title}
        </li>
      </ul>
    </>
  );
}
