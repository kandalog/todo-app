import NextTaskButton from "./NextTaskButton";

function Header() {
  return (
    <header className="border flex justify-end h-10 pr-4 sticky top-0">
      <NextTaskButton />
    </header>
  );
}

export default Header;
