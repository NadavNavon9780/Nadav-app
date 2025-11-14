import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h2>Welcome to the Product Jam Starter Kit</h2>
        <p>
          Feel free to look around, edit the source code and navigate to the
          demos.
        </p>

        <Image
          src="/huji.svg"
          alt="HUJI Logo"
          width="80"
          height="80"
          priority
        />
        <Image
          src="/bezalel.svg"
          alt="Bezalel Logo"
          className="item"
          width="80"
          height="80"
          priority
        />
        <div>
          <h2>Links</h2>
          <p>
            <a href="./design">DouGami Page</a>
          </p>
          <p>
            <a href="./tic-tac-toe">Tic Tac Toe Game</a>
          </p>
          <p>
            <a href="./art">Art page</a>
          </p>
        </div>
      </div>
    </main>
  );
}
