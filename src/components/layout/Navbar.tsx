import Link from "next/link";
import Logo from "../ui/Logo";
import ButtonLink from "../ui/ButtonLink";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
    return (
        <header className="sticky top-0 border-b border-border bg-background">
            <nav className="flex justify-between max-w-310 mx-auto py-4">
                <Link href={'/'} className="flex items-center gap-2.5">
                    <Logo />
                    <span className="font-heading text-[21px] font-semibold tracking-[-0.01rem]">apply-board</span>
                </Link>
                <div className="flex gap-2">
                    <div className="flex">
                        <ButtonLink href={'#'}>Features</ButtonLink>
                        <ButtonLink href={'#'}>How it works</ButtonLink>
                        <ButtonLink href={'#'}>GitHub</ButtonLink>
                        <ThemeToggle />
                    </div>
                    <div className="border-line border-l ml-7" />
                    <div>
                        <ButtonLink href={'#'}>Sign in</ButtonLink>
                        <ButtonLink href={'#'} variant="primary">Sign up</ButtonLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}