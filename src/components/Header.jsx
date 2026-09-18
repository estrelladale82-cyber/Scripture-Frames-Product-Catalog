export default function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <h1 className="font-display text-xl font-medium tracking-tight text-ink">
          Scripture Frames
        </h1>
        <nav aria-label="Primary">
          <ul className="flex gap-6 text-sm text-forest">
            <li>
              <a href="#catalog" className="hover:text-ink">
                Wall Frames
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-ink">
                Desk Frames
              </a>
            </li>
            <li>
              <a href="#add-frame" className="hover:text-ink">
                Add a Frame
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
